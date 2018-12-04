import { Component, OnInit } from '@angular/core';
import { Article, ArticleModel } from 'src/app/interface/article';
import { RealworldService } from 'src/app/services/realworld.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  model: Article;
  constructor(private realworldservice: RealworldService) { }

  ngOnInit() {
    this.model = new ArticleModel();
  }

  GoSumbit() {
    this.model.memberid = 1;
    this.realworldservice.createArticle(this.model).subscribe(
      x => { console.log(x); }
    );
  }
}
