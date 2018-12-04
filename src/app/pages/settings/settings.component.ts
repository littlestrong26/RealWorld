import { Component, OnInit } from '@angular/core';
import { RealworldService } from 'src/app/services/realworld.service';
import { filter, map, tap, concat, concatAll } from 'rxjs/operators';
import { Member, MemberModel } from '../../interface/member';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  model: Member;
  constructor(private realworldService: RealworldService) {
  }

  ngOnInit() {
    this.model = new MemberModel();
    this.realworldService.getMemberById(1)
      .subscribe(value => {
        this.model = value;
      });
  }

  onSubmit() {
    this.realworldService.updateMember(this.model, 1).subscribe();
  }

}
