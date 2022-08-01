import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  styleUrls: ['./add-students.component.css'],
  templateUrl: './add-students.component.html',
})
export class AddStudentsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loading = false;

  form = this.fb.group({
    admissionNo: ['string'],
    firstName: ['string'],
    lastName: ['string'],
    email: ['string'],
    dob: ['string'],
    studentHouse: this.fb.group({
      cardinal: [false],
      paramount: [false],
      eminent: [false],
    }),
    studentContactNo: ['string'],
    gender: ['string'],
    bloodGroup: ['string'],
    address: ['string'],
    profilePic: ['string'],
    zipCode: ['string'],
    fatherName: ['string'],
    fatherSurname: ['string'],
    fatherEmail: ['string'],
    fatherNo: ['string'],
    fatherCNIC: ['string'],
    fatherProfession: ['string'],
    fatherCompany: ['string'],
    motherName: ['string'],
    motherSurname: ['string'],
    parentsEmail: ['string'],
    emergencyContact: ['string'],
    emergencyContactRelation: ['string'],
    sibling1Class: ['string'],
    sibling1Name: ['string'],
    sibling2Class: ['string'],
    sibling2Name: ['string'],
    sibling3Class: ['string'],
    sibling3Name: ['string'],
    fbLink: ['string'],
    linkedinProfile: ['string'],
  });

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
  }
}
