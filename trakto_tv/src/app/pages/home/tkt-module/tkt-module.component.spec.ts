import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TktModuleComponent } from './tkt-module.component';

describe('TktModuleComponent', () => {
  let component: TktModuleComponent;
  let fixture: ComponentFixture<TktModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TktModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TktModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
