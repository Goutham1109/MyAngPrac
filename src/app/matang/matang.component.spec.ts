import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatangComponent } from './matang.component';

describe('MatangComponent', () => {
  let component: MatangComponent;
  let fixture: ComponentFixture<MatangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
