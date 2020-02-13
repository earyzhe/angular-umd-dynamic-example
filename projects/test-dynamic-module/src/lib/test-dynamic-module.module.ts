import { NgModule } from '@angular/core';
import { TestDynamicModuleComponent } from './test-dynamic-module.component';

@NgModule({
  imports: [
  ],
  declarations: [TestDynamicModuleComponent],
  exports: [TestDynamicModuleComponent]
})
export class TestDynamicModuleModule { }
