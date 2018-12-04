import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealworldService } from 'src/app/services/realworld.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$: Observable<any>;
  tags$: Observable<any>;
  constructor(private realworldService: RealworldService) { }

  ngOnInit() {
    this.data$ = this.realworldService.getArticles();
    this.tags$ = this.realworldService.getTags();
  }

}
