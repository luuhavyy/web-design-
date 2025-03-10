import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadgroupComponent } from './uploadgroup.component';

describe('UploadgroupComponent', () => {
  let component: UploadgroupComponent;
  let fixture: ComponentFixture<UploadgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
