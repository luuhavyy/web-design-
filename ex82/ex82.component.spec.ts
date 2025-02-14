import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex82Component } from './ex82.component';

describe('Ex82Component', () => {
  let component: Ex82Component;
  let fixture: ComponentFixture<Ex82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex82Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
