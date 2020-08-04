import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsTableComponent } from './serials-table.component';

describe('CustomerTableComponent', () => {
  let component: SerialsTableComponent;
  let fixture: ComponentFixture<SerialsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
