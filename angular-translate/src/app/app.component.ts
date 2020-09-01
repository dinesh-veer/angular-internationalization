import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// Import new language here
import en_US from '../i18n/en-US.js'
import zh_ZH from '../i18n/zh-tw.js'
import zh_CN from '../i18n/zh-cn.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {

    // Set language
    translate.setTranslation('en', en_US);
    translate.setTranslation('zh-tw', zh_ZH);
    translate.setTranslation('zh-cn', zh_CN);

    // Initial Lang
    translate.setDefaultLang('en');
    translate.use('en');

  }

}
