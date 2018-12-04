import { Component, OnInit, DoCheck, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.getLoginStatus.subscribe(
      x => {
        this.status = this.authservice.getLogin();
      }
    );
  }
}
