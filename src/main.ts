import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TodoListComponent } from './app/presentation/todo-list/todo-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(TodoListComponent, {
    providers: [provideHttpClient(withFetch()), provideAnimationsAsync('noop')]
  })
  .catch((err) => console.error(err));
