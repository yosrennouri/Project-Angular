import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleUSBComponent } from './cle-usb.component';

describe('CleUSBComponent', () => {
  let component: CleUSBComponent;
  let fixture: ComponentFixture<CleUSBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleUSBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleUSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
