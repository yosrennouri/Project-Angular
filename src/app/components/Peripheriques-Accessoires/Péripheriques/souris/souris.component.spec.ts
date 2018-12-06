import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourisComponent } from './souris.component';

describe('SourisComponent', () => {
  let component: SourisComponent;
  let fixture: ComponentFixture<SourisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
