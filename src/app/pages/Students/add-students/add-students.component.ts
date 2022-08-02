import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  styleUrls: ['./add-students.component.css'],
  templateUrl: './add-students.component.html',
})
export class AddStudentsComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.ngOnInit();
  }

  loading = false;

  form = this.fb.group({
    academicSession: ['', Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    admissionNo: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required],
    studentHouse: this.fb.group({
      cardinal: [false],
      paramount: [false],
      eminent: [false],
    }),
    studentContactNo: ['', Validators.required],
    gender: ['', Validators.required],
    bloodGroup: [''],
    address: ['', Validators.required],
    profilePic: [''],
    zipCode: [''],
    country: ['', Validators.required],
    fatherName: ['', Validators.required],
    fatherSurname: ['', Validators.required],
    fatherEmail: ['', Validators.email],
    fatherNo: ['', Validators.required],
    fatherCNIC: [''],
    fatherProfession: ['', Validators.required],
    fatherCompany: [''],
    motherName: ['', Validators.required],
    motherSurname: ['', Validators.required],
    motherEmail: ['', Validators.email],
    motherNo: ['', Validators.required],
    motherCNIC: [''],
    motherProfession: [''],
    parentsEmail: [''],
    emergencyContactName: ['', Validators.required],
    emergencyContactNo: ['', Validators.required],
    emergencyContactRelation: ['', Validators.required],
    sibling1Name: [''],
    sibling1Class: [''],
    sibling2Name: [''],
    sibling2Class: [''],
    sibling3Name: [''],
    sibling3Class: [''],
    fbLink: [''],
    linkedinProfile: [''],
  });

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    window.setTimeout(() => {
      console.log(this.form.value);
      this.form.reset();
      this.loading = false;
      this.ngOnInit();
      // Uncomment the line blow after testing APi on this page
      // window.location.reload();
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

  get academicSession() {
    return this.form.get('academicSession');
  }
  get class() {
    return this.form.get('class');
  }
  get section() {
    return this.form.get('section');
  }
  get admissionNo() {
    return this.form.get('admissionNo');
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }
  get dob() {
    return this.form.get('dob');
  }
  get studentHouse() {
    return this.form.get('studentHouse');
  }
  get studentContactNo() {
    return this.form.get('studentContactNo');
  }
  get gender() {
    return this.form.get('gender');
  }
  get bloodGroup() {
    return this.form.get('bloodGroup');
  }
  get address() {
    return this.form.get('address');
  }
  get profilePic() {
    return this.form.get('profilePic');
  }
  get zipCode() {
    return this.form.get('zipCode');
  }
  get country() {
    return this.form.get('country');
  }
  get fatherName() {
    return this.form.get('fatherName');
  }
  get fatherSurname() {
    return this.form.get('fatherSurname');
  }
  get fatherEmail() {
    return this.form.get('fatherEmail');
  }
  get fatherNo() {
    return this.form.get('fatherNo');
  }
  get fatherCNIC() {
    return this.form.get('fatherCNIC');
  }
  get fatherProfession() {
    return this.form.get('fatherProfession');
  }
  get fatherCompany() {
    return this.form.get('fatherCompany');
  }
  get motherName() {
    return this.form.get('motherName');
  }
  get motherSurname() {
    return this.form.get('motherSurname');
  }
  get motherEmail() {
    return this.form.get('motherEmail');
  }
  get motherNo() {
    return this.form.get('motherNo');
  }
  get motherCNIC() {
    return this.form.get('motherCNIC');
  }
  get motherProfession() {
    return this.form.get('motherProfession');
  }
  get parentsEmail() {
    return this.form.get('parentsEmail');
  }
  get emergencyContactName() {
    return this.form.get('emergencyContactName');
  }
  get emergencyContactNo() {
    return this.form.get('emergencyContactNo');
  }
  get emergencyContactRelation() {
    return this.form.get('emergencyContactRelation');
  }
  get sibling1Name() {
    return this.form.get('sibling1Name');
  }
  get sibling1Class() {
    return this.form.get('sibling1Class');
  }
  get sibling2Name() {
    return this.form.get('sibling1Name');
  }
  get sibling2Class() {
    return this.form.get('sibling1Class');
  }
  get sibling3Name() {
    return this.form.get('sibling1Name');
  }
  get sibling3Class() {
    return this.form.get('sibling1Class');
  }
  get fbLink() {
    return this.form.get('fbLink');
  }
  get linkedinProfile() {
    return this.form.get('linkedinProfile');
  }

  setFatherCNIC(e: any) {
    if (e.length == 13) {
      this.form
        .get('fatherCNIC')
        ?.setValue(
          e.replace(/\D/g, '').replace(/(\d{5})(\d{7})(\d{1})/, '$1-$2-$3')
        );
    }
  }
  setMotherCNIC(e: any) {
    if (e.length == 13) {
      this.form
        .get('motherCNIC')
        ?.setValue(
          e.replace(/\D/g, '').replace(/(\d{5})(\d{7})(\d{1})/, '$1-$2-$3')
        );
    }
  }
}
