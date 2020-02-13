import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-dynamic-module',
  template: `
    <p>
      test-dynamic-module works!
    </p>
  `,
  styles: []
})
export class TestDynamicModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
