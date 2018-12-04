import { Component, OnInit } from '@angular/core';
import { RealworldService } from 'src/app/services/realworld.service';
import { filter, map, tap, concat, concatAll } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private realworldService: RealworldService,
               private authservice: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.realworldService.getMembers()
      .pipe(
        concatAll(),
        filter(value => value.email === this.email && value.password === this.password),
      )
      .subscribe(
        value => {
          alert(this.authservice.getLogin());
          this.authservice.setLogin(true);
          alert(this.authservice.getLogin());
        }
      );
  }

}
