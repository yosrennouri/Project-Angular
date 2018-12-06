import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurDeBureauComponent } from './ordinateur-de-bureau.component';

describe('OrdinateurDeBureauComponent', () => {
  let component: OrdinateurDeBureauComponent;
  let fixture: ComponentFixture<OrdinateurDeBureauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurDeBureauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurDeBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
