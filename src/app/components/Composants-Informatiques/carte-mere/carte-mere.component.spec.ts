import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMereComponent } from './carte-mere.component';

describe('CarteMereComponent', () => {
  let component: CarteMereComponent;
  let fixture: ComponentFixture<CarteMereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
