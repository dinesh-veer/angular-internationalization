import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
