/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../app/main/main-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './main.component.ngfactory';
import * as import4 from '../../../../app/main/main.component';
class MainRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.MainRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _MainRoutingModule_1:import1.MainRoutingModule;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import3.MainComponentNgFactory],([] as any[]));
  }
  createInternal():import1.MainRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._MainRoutingModule_1 = new import1.MainRoutingModule();
        this._ROUTES_2 = [[{
          path: '',
          component: import4.MainComponent,
          pathMatch: 'full'
        }
    ]];
    return this._MainRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.MainRoutingModule)) { return this._MainRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MainRoutingModuleNgFactory:import0.NgModuleFactory<import1.MainRoutingModule> = new import0.NgModuleFactory<any>(MainRoutingModuleInjector,import1.MainRoutingModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovV29yay9hbmd1bGFyMi1zZXJ2ZXItdGVzdC9iY2xpZ2h0L3NyYy9hcHAvbWFpbi9tYWluLXJvdXRpbmcubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1dvcmsvYW5ndWxhcjItc2VydmVyLXRlc3QvYmNsaWdodC9zcmMvYXBwL21haW4vbWFpbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
