import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMemoireComponent } from './carte-memoire.component';

describe('CarteMemoireComponent', () => {
  let component: CarteMemoireComponent;
  let fixture: ComponentFixture<CarteMemoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMemoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
