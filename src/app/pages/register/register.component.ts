import { Component, OnInit } from '@angular/core';
import { RealworldService } from 'src/app/services/realworld.service';
import { filter, map, tap, concat, concatAll } from 'rxjs/operators';
import { Member } from 'src/app/interface/member';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userName;
  email;
  password;
  signup = false;

  constructor(private realworldService: RealworldService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.realworldService.getMembers()
      .pipe(
        tap(_ => console.log(_)),
        concatAll(),
        tap(_ => console.log(_)),
        filter(value => value.id === 1),
        tap(_ => console.log('12321312')),
      )
      .subscribe(
        value => {
          console.log(value);
        }
      );
  }

  onSubmit2() {

    const source = from([{
      id: 1,
      name: 'test',
      email: 'test@gmail.com',
      password: 'qwe123'
    },
    {
      id: 2,
      name: 'test2',
      email: 'test2@gmail.com',
      password: 'qwe123'
    }]);
    const example = source.pipe(tap(_ => console.log(_.email)),
     filter(num => num.email === 'test2@gmail.com')).subscribe(_ => console.log(_));
  }
}
