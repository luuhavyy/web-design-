import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex124Component } from './ex124.component';

describe('Ex124Component', () => {
  let component: Ex124Component;
  let fixture: ComponentFixture<Ex124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex124Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
