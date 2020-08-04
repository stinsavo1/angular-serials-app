import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalState } from '../store/states/global.state';
import { Store, select } from '@ngrx/store';
import { SerialsParams } from '../core/models/serials-params';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, merge, Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Serials } from '../core/models/serials';
import { SerialsLoadAction } from '../store/actions/serials.actions';
import { selectAllSerials, selectSerialsError, selectSerialsLoading, selectSerialsTotal } from '../store/selectors/serials.selectors';

@Component({
  selector: 'app-serials-table',
  templateUrl: './serials-table.component.html',
  styleUrls: ['./serials-table.component.scss']
})
export class SerialsTableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public displayedColumns: string[] = ['name', 'season', 'network', 'premiereDate', 'duration'];
  public dataSource: MatTableDataSource<Serials>;
  public serialsTotal: number;
  public noData: Serials[] = [];
  public loading: boolean;
  public error$: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'name', direction: 'asc' };

  private filter = '';
  private subscription: Subscription = new Subscription();

  constructor(public store: Store<GlobalState>) { }

  public ngOnInit(): void {
    this.store.pipe(select(selectAllSerials)).subscribe(serials => this.initializeData(serials));
    this.store.pipe(select(selectSerialsTotal)).subscribe(total => this.serialsTotal = total);
    this.subscription.add(this.store.pipe(select(selectSerialsLoading)).subscribe(loading => {
      if (loading) {
        this.dataSource = new MatTableDataSource(this.noData);
      }
      this.loading = loading;
    }));
    this.error$ = this.store.pipe(select(selectSerialsError));
  }

  public ngAfterViewInit(): void {
    this.loadSerials();
    const filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    const sort$ = this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0));

    this.subscription.add(merge(filter$, sort$, this.paginator.page).pipe(
      tap(() => this.loadSerials())
    ).subscribe());
  }

  private loadSerials(): void {
    this.store.dispatch(new SerialsLoadAction(
      {
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active
      } as SerialsParams
    ));
  }

  private initializeData(serials: Serials[]): void {
    this.dataSource = new MatTableDataSource(serials.length ? serials : this.noData);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadSerials();
  }
}
