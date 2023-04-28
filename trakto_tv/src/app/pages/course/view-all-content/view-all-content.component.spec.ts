import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllContentComponent } from './view-all-content.component';

describe('ViewAllContentComponent', () => {
  let component: ViewAllContentComponent;
  let fixture: ComponentFixture<ViewAllContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
