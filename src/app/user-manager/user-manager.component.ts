import { Component, OnInit } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: 'user-manager.component.html',
  styleUrls: ['user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  currentLanguage: string = this.translate.currentLang;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  onLanguageChange(lang: string) {
    this.translate.use(lang)
    this.currentLanguage = this.translate.currentLang
  }
}