import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../service/api.service'

@Component({
  selector: 'app-container-area',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  profileFormButton!: FormGroup
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.profileFormButton = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  addButton() {
    this.api.addCard(
      this.profileFormButton.value.title,
      this.profileFormButton.value.description,
    )
  }
}
