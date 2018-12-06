import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasquesComponent } from './casques.component';

describe('CasquesComponent', () => {
  let component: CasquesComponent;
  let fixture: ComponentFixture<CasquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
