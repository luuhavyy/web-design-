import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex83Component } from './ex83.component';

describe('Ex83Component', () => {
  let component: Ex83Component;
  let fixture: ComponentFixture<Ex83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex83Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
