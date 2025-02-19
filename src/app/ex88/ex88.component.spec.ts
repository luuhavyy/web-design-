import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex88Component } from './ex88.component';

describe('Ex88Component', () => {
  let component: Ex88Component;
  let fixture: ComponentFixture<Ex88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex88Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
