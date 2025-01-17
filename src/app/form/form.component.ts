import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactRegex: string = '[789][0-9]{9}';
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegex),
      ]),

      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl('', Validators.required),
        contactNo: new FormControl('', [
          Validators.required,
          Validators.pattern(this.contactRegex),
        ]),
      }),
      skills: new FormArray([]),
    });
  }
  get fullname() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  get Address() {
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get Contact() {
    return this.form.get('contactDetails.contactNo');
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }
  onSubmit() {
    console.log(this.form.value);
  }

  addSkills(skills: HTMLInputElement) {
    this.Skills.push(new FormControl(skills.value));

    skills.value = '';

    console.log(this.form.value);
  }

  removeSkills(index: any) {
    this.Skills.removeAt(index);
  }
  ngOnInit(): void {}
}
