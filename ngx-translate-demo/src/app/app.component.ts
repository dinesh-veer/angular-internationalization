import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-translate-demo';
  constructor(private translate:  TranslateService){
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
