import { SerialsParams } from '../core/models/serials-params';
import { Observable, of } from 'rxjs';
import { SerialsResponse } from '../core/models/serials-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serials } from '../core/models/serials';
import { SERIALS } from './mock-serials';
import { DatePipe } from '@angular/common';

@Injectable()
export class SerialsService {

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }

  public getSerials(params: SerialsParams): Observable<SerialsResponse> {
    return of(this.getFakeSerials(params));
  }

  private getFakeSerials(params: SerialsParams): SerialsResponse {
    let data: Serials[];
    data = SERIALS.filter(c => ~(c.name.toLocaleLowerCase()).indexOf(params.filter)
      && ~(c.network).indexOf(params.filterChannel)
      && ~(this.datePipe.transform(c.premiereDate, 'yyyy')).indexOf(params.filterYear));

    data.sort((a, b) => (a[params.sortField] > b[params.sortField] ? 1 : -1) * (params.sortDirection === 'asc' ? 1 : -1));

    return {
      total: data.length,
      serials: data.slice((params.pageIndex) * params.pageSize, (params.pageIndex + 1) * params.pageSize)
    };
  }
}
