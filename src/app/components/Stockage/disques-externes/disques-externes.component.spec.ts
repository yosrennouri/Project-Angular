import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisquesExternesComponent } from './disques-externes.component';

describe('DisquesExternesComponent', () => {
  let component: DisquesExternesComponent;
  let fixture: ComponentFixture<DisquesExternesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisquesExternesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisquesExternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
