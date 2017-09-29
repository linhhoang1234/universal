import { IRequestParams } from "./request-params";
import { Type, NgModuleFactory, StaticProvider } from '@angular/core';

export interface IEngineOptions {
  appSelector: string;                      // e.g., <app-root></app-root>
  request: IRequestParams;                  // e.g., params
  url?: string;                             // e.g., http://testhost.com
  document?: string;                        // e.g., <html>...</html>
  ngModule: Type<{}> | NgModuleFactory<{}>; // e.g., AppModule
  providers?: StaticProvider[];             // StaticProvider[]
}
