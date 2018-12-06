import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacPCComponent } from './sac-pc.component';

describe('SacPCComponent', () => {
  let component: SacPCComponent;
  let fixture: ComponentFixture<SacPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
