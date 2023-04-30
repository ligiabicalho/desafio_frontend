import { TestBed } from '@angular/core/testing';
import { CourseModule } from './course.module';

describe('CourseModule', () => {
  let pipe: CourseModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CourseModule] });
    pipe = TestBed.inject(CourseModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
