import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletteTactileComponent } from './tablette-tactile.component';

describe('TabletteTactileComponent', () => {
  let component: TabletteTactileComponent;
  let fixture: ComponentFixture<TabletteTactileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletteTactileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletteTactileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
