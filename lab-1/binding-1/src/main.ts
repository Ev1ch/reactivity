import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './two-way-binding-app/two-way-binding-app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
