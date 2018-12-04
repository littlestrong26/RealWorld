import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap, concat, concatAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RealworldService } from 'src/app/services/realworld.service';
import { Member } from 'src/app/interface/member';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: Member;
  articledata$: Observable<any>;
  constructor(private route: ActivatedRoute,
    private realworldService: RealworldService) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(param =>
          this.realworldService.getMemberById(param['id'])
        )
      )
      .subscribe(value => this.data = value);

      this.articledata$ = this.realworldService.getArticles();
  }

}
