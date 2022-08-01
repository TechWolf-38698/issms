import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OptionalEmailValidator } from '../../../Shared/Optional-Email-Validator';

@Component({
  selector: 'app-add-students',
  styleUrls: ['./add-students.component.css'],
  templateUrl: './add-students.component.html',
})
export class AddStudentsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loading = false;

  form = this.fb.group({
    academicSession: ['', Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    admissionNo: ['string', Validators.required],
    firstName: ['string', Validators.required],
    lastName: ['string', Validators.required],
    email: ['string', [Validators.required, Validators.email]],
    dob: ['string', Validators.required],
    studentHouse: this.fb.group({
      cardinal: [false],
      paramount: [false],
      eminent: [false],
    }),
    studentContactNo: ['string', Validators.required],
    gender: ['', Validators.required],
    bloodGroup: ['string'],
    address: ['string', Validators.required],
    profilePic: ['string'],
    zipCode: ['string'],
    country: ['', Validators.required],
    fatherName: ['string', Validators.required],
    fatherSurname: ['string', Validators.required],
    fatherEmail: ['string', OptionalEmailValidator],
    fatherNo: ['string', Validators.required],
    fatherCNIC: ['string'],
    fatherProfession: ['string', Validators.required],
    fatherCompany: ['string'],
    motherName: ['string', Validators.required],
    motherSurname: ['string', Validators.required],
    motherEmail: ['string'],
    motherNo: ['string', Validators.required],
    motherCNIC: ['string'],
    motherProfession: ['string'],
    parentsEmail: ['string'],
    emergencyContactName: ['string', Validators.required],
    emergencyContactNo: ['string', Validators.required],
    emergencyContactRelation: ['string', Validators.required],
    sibling1Name: ['string'],
    sibling1Class: ['string'],
    sibling2Name: ['string'],
    sibling2Class: ['string'],
    sibling3Name: ['string'],
    sibling3Class: ['string'],
    fbLink: ['string'],
    linkedinProfile: ['string'],
  });

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    window.setTimeout(() => {
      console.log(this.form.value);
      this.form.reset();
      this.loading = false;
    }, 1000);
  }

  academicsSessions = [
    {
      id: 'opt1',
      name: 'Option 1',
    },
    {
      id: 'opt2',
      name: 'Option 2',
    },
    {
      id: 'opt3',
      name: 'Option 3',
    },
    {
      id: 'opt4',
      name: 'Option 4',
    },
  ];
  classes = [
    {
      id: 'opt1',
      name: 'Option 1',
    },
    {
      id: 'opt2',
      name: 'Option 2',
    },
    {
      id: 'opt3',
      name: 'Option 3',
    },
    {
      id: 'opt4',
      name: 'Option 4',
    },
  ];
  sections = [
    {
      id: 'opt1',
      name: 'Option 1',
    },
    {
      id: 'opt2',
      name: 'Option 2',
    },
    {
      id: 'opt3',
      name: 'Option 3',
    },
    {
      id: 'opt4',
      name: 'Option 4',
    },
  ];
  countries = [
    {
      id: 'opt1',
      name: 'Option 1',
    },
    {
      id: 'opt2',
      name: 'Option 2',
    },
    {
      id: 'opt3',
      name: 'Option 3',
    },
    {
      id: 'opt4',
      name: 'Option 4',
    },
  ];
}
