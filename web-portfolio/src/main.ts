import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//AppModule = main module of application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
