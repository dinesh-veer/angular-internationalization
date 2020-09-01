import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  param = { value: 'Robby' };
  optsDefault = 'en';
  opts = [{
    value: 'en',
    translate: 'lang.en',
  }, {
    value: 'zh-tw',
    translate: 'lang.zh-tw',
  }, {
    value: 'zh-cn',
    translate: 'lang.zh-cn',
  }]

  constructor(private translate: TranslateService) { }

  ngOnInit() { }

  changeLocale(e) {
    this.translate.use(e.target.value.split(' ')[1]);
  }

}
