import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisquesInternesComponent } from './disques-internes.component';

describe('DisquesInternesComponent', () => {
  let component: DisquesInternesComponent;
  let fixture: ComponentFixture<DisquesInternesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisquesInternesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisquesInternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
