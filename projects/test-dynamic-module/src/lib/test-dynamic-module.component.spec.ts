import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDynamicModuleComponent } from './test-dynamic-module.component';

describe('TestDynamicModuleComponent', () => {
  let component: TestDynamicModuleComponent;
  let fixture: ComponentFixture<TestDynamicModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDynamicModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
