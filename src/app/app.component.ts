import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Xenos';

  user = this.authService.user;

  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer,
              private authService: AuthService) {
                
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));
  }

  logout() {
    this.authService.signOut();
  }
}
