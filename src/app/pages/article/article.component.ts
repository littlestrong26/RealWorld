import { Component, OnInit } from '@angular/core';
import { RealworldService } from 'src/app/services/realworld.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap, concat, concatAll } from 'rxjs/operators';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private realworldService: RealworldService,
    private route: ActivatedRoute) { }
  data;
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(param =>
          this.realworldService.getArticleById(param['id'])
        )
      )
      .subscribe(value => {
        this.data = value;
        console.log(value['id']);
      });
  }

}
