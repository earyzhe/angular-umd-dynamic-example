(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('modulea', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global.modulea = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    var ModuleaService = (function () {
        function ModuleaService() {
        }
        ModuleaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        ModuleaService.ctorParameters = function () { return []; };
        ModuleaService.ngInjectableDef = i0.defineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });
        return ModuleaService;
    }());

    var ModuleaComponent = (function () {
        function ModuleaComponent() {
        }
        ModuleaComponent.prototype.ngOnInit = function () {
        };
        ModuleaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-modulea',
                        template: "\n  <form>\n  <section class=\"form-block\">\n      <label>Input Fields</label>\n      <div class=\"form-group\">\n          <label for=\"formFields_1\">Textbox [type=\"text\"]</label>\n          <input type=\"text\" id=\"formFields_1\" placeholder=\"Email\" size=\"35\" disabled>\n          <input type=\"text\" id=\"formFields_2\" placeholder=\"Email 2\" size=\"45\">\n          <input type=\"text\" id=\"formFields_3\" placeholder=\"Email\" size=\"25\">\n          <input type=\"text\" id=\"formFields_4\" placeholder=\"Email 2\">\n          <input type=\"text\" id=\"formFields_5\" placeholder=\"Email\">\n          <input type=\"text\" id=\"formFields_6\" placeholder=\"Email 2\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_7\">Textbox [type=\"password\"]</label>\n          <input type=\"password\" id=\"formFields_7\" placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_8\">Textarea</label>\n          <textarea id=\"formFields_8\" rows=\"5\"></textarea>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_9\">Textbox [type=\"url\"]</label>\n          <input type=\"url\" id=\"formFields_9\" placeholder=\"https://vmware.github.io/clarity/\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_10\">Textbox [type=\"tel\"]</label>\n          <input type=\"tel\" id=\"formFields_10\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_11\">Textbox [type=\"date\"]</label>\n          <input type=\"date\" id=\"formFields_11\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_12\">Textbox [type=\"datetime-local\"]</label>\n          <input type=\"datetime-local\" id=\"formFields_12\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_13\">Textbox Readonly [type=\"text\"]</label>\n          <input type=\"text\" id=\"formFields_13\" size=\"35\" readonly value=\"Readonly Text\">\n      </div>\n  </section>\n</form>  \n  \n  ",
                        styles: []
                    },] },
        ];
        ModuleaComponent.ctorParameters = function () { return []; };
        return ModuleaComponent;
    }());

    var ModuleaModule = (function () {
        function ModuleaModule() {
        }
        ModuleaModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ModuleaComponent
                                }
                            ])
                        ],
                        declarations: [ModuleaComponent],
                        exports: [ModuleaComponent]
                    },] },
        ];
        return ModuleaModule;
    }());

    /*
     * Public API Surface of modulea
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModuleaService = ModuleaService;
    exports.ModuleaComponent = ModuleaComponent;
    exports.ModuleaModule = ModuleaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlYS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL21vZHVsZWEvbGliL21vZHVsZWEuc2VydmljZS50cyIsIm5nOi8vbW9kdWxlYS9saWIvbW9kdWxlYS5jb21wb25lbnQudHMiLCJuZzovL21vZHVsZWEvbGliL21vZHVsZWEubW9kdWxlLnRzIiwibmc6Ly9tb2R1bGVhL3B1YmxpY19hcGkudHMiLCJuZzovL21vZHVsZWEvbW9kdWxlYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZHVsZWFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW1vZHVsZWEnLFxuICB0ZW1wbGF0ZTogYFxuICA8Zm9ybT5cbiAgPHNlY3Rpb24gY2xhc3M9XCJmb3JtLWJsb2NrXCI+XG4gICAgICA8bGFiZWw+SW5wdXQgRmllbGRzPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm1GaWVsZHNfMVwiPlRleHRib3ggW3R5cGU9XCJ0ZXh0XCJdPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm1GaWVsZHNfMVwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBzaXplPVwiMzVcIiBkaXNhYmxlZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm1GaWVsZHNfMlwiIHBsYWNlaG9sZGVyPVwiRW1haWwgMlwiIHNpemU9XCI0NVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybUZpZWxkc18zXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHNpemU9XCIyNVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybUZpZWxkc180XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCAyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtRmllbGRzXzVcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtRmllbGRzXzZcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIDJcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9ybUZpZWxkc183XCI+VGV4dGJveCBbdHlwZT1cInBhc3N3b3JkXCJdPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJmb3JtRmllbGRzXzdcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm1GaWVsZHNfOFwiPlRleHRhcmVhPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJmb3JtRmllbGRzXzhcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm1GaWVsZHNfOVwiPlRleHRib3ggW3R5cGU9XCJ1cmxcIl08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXJsXCIgaWQ9XCJmb3JtRmllbGRzXzlcIiBwbGFjZWhvbGRlcj1cImh0dHBzOi8vdm13YXJlLmdpdGh1Yi5pby9jbGFyaXR5L1wiIHNpemU9XCIzNVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmb3JtRmllbGRzXzEwXCI+VGV4dGJveCBbdHlwZT1cInRlbFwiXTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBpZD1cImZvcm1GaWVsZHNfMTBcIiBzaXplPVwiMzVcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9ybUZpZWxkc18xMVwiPlRleHRib3ggW3R5cGU9XCJkYXRlXCJdPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImZvcm1GaWVsZHNfMTFcIiBzaXplPVwiMzVcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9ybUZpZWxkc18xMlwiPlRleHRib3ggW3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIGlkPVwiZm9ybUZpZWxkc18xMlwiIHNpemU9XCIzNVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmb3JtRmllbGRzXzEzXCI+VGV4dGJveCBSZWFkb25seSBbdHlwZT1cInRleHRcIl08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybUZpZWxkc18xM1wiIHNpemU9XCIzNVwiIHJlYWRvbmx5IHZhbHVlPVwiUmVhZG9ubHkgVGV4dFwiPlxuICAgICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbjwvZm9ybT4gIFxuICBcbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2R1bGVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlYUNvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlYS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogTW9kdWxlYUNvbXBvbmVudFxuICAgICAgfVxuICAgIF0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01vZHVsZWFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTW9kdWxlYUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kdWxlYU1vZHVsZSB7IH1cbiIsIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgbW9kdWxlYVxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZHVsZWEuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2R1bGVhLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2R1bGVhLm1vZHVsZSc7XG4iLCIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs2QkFKRDtLQVFDOzs7UUM2Q0M7U0FBaUI7UUFFakIsbUNBQVEsR0FBUjtTQUNDOztvQkF0REZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLCtsRUE0Q1Q7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7OztRQVFELHVCQUFDO0tBQUE7OztRQ3RERDtTQVc4Qjs7b0JBWDdCQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0ksSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0I7aUNBQzNEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM1Qjs7UUFDNEIsb0JBQUM7S0FBQTs7SUNmOUI7O09BRUc7O0lDRkg7O09BRUc7Ozs7Ozs7Ozs7Ozs7OyJ9