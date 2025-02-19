import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex88serviceComponent } from './ex88service.component';

describe('Ex88serviceComponent', () => {
  let component: Ex88serviceComponent;
  let fixture: ComponentFixture<Ex88serviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex88serviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex88serviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
