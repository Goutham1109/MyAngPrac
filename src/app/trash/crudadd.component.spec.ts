import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudaddComponent } from './crudadd.component';

describe('CrudaddComponent', () => {
  let component: CrudaddComponent;
  let fixture: ComponentFixture<CrudaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
