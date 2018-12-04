import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  EditForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.EditForm = this._fb.group({});

    const title = new FormControl();
    title.setValidators([Validators.required]);
    this.EditForm.addControl('title', title);

    const subtitle = new FormControl();
    subtitle.setValidators([Validators.required]);
    this.EditForm.addControl('subtitle', subtitle);

    const detail = new FormControl();
    detail.setValidators([Validators.required]);
    this.EditForm.addControl('detail', detail);

    const tag = new FormControl();
    tag.setValidators([Validators.required]);
    this.EditForm.addControl('tag', tag);

  }
}
