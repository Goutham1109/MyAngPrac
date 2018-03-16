import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuttiComponent } from './chutti.component';

describe('ChuttiComponent', () => {
  let component: ChuttiComponent;
  let fixture: ComponentFixture<ChuttiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuttiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
