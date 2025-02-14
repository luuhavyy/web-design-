import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex84Component } from './ex84.component';

describe('Ex84Component', () => {
  let component: Ex84Component;
  let fixture: ComponentFixture<Ex84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex84Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
