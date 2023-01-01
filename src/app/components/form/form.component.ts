import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  minDate = new Date(1950, 1, 1);
  maxDate = new Date();

  isWhatsappNumberSameAsMobileNumber = true;

  changeNumberSelection(event: any) {
    console.log(event.source.value);

    if (event.source.value == 'same') {
      this.isWhatsappNumberSameAsMobileNumber = true;
      console.log(this.userForm.controls['mobileNumber'].value);
      this.userForm.controls['whatsappNumber'].setValue(this.userForm.controls['mobileNumber'].value);
      console.log(this.userForm.controls['whatsappNumber'].value);

      // this.userForm.controls['whatsappNumber'].setValue(this.userForm.controls['mobileNumber'].value);
    }
    else {
      this.isWhatsappNumberSameAsMobileNumber = false;
      this.userForm.controls['whatsappNumber'].setValue('');

    }
  }




  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,

    ]),
    middleName: new FormControl('',
      [Validators.required,]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    firstNameGujrati: new FormControl('', [
      Validators.required,
    ]),
    middleNameGujrati: new FormControl('', [
      Validators.required,
    ]),
    lastNameGujrati: new FormControl('', [
      Validators.required,
    ]),
    gender: new FormControl('', [
      Validators.required,
    ]),
    dob: new FormControl(new Date(), [
      Validators.required,
    ]),
    bloodGroup: new FormControl('', [
      Validators.required,
    ]),
    occupation: new FormControl('',
      [
        Validators.required,
      ]),
    education: new FormControl('', [

    ]),
    skill: new FormControl('', [
    ]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.email,


    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(14),

    ]),
    whatsappNumber: new FormControl('', [
      Validators.required,
    ]),
    countryCode: new FormControl('', [
      Validators.required,
    ]),
    nativeVillagePinCode: new FormControl('', [
      Validators.required,
    ]),
    nativeVillageName: new FormControl('', [
      Validators.required,
    ]),
    presentVillagePinCode: new FormControl('', [
      Validators.required,
    ]),
    presentVillageName: new FormControl('', [
      Validators.required,
    ]),

  }
  );
  bloodGroups = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB-', viewValue: 'AB-' },
    { value: 'O+', viewValue: 'O+' },
    { value: 'O-', viewValue: 'O-' }
  ];
  educations = [
    { value: '10th', viewValue: '10th' },
    { value: '12th', viewValue: '12th' },
    { value: 'Graduate', viewValue: 'Graduate' },
    { value: 'Post Graduate', viewValue: 'Post Graduate' },
    { value: 'Doctorate', viewValue: 'Doctorate' },
  ];
  skills = [
    { value: 'C', viewValue: 'C' },
    { value: 'C++', viewValue: 'C++' },
    { value: 'Java', viewValue: 'Java' },
    { value: 'Python', viewValue: 'Python' },
    { value: 'Angular', viewValue: 'Angular' },
    { value: 'React', viewValue: 'React' },
    { value: 'Node', viewValue: 'Node' },
    { value: 'MongoDB', viewValue: 'MongoDB' },
    { value: 'MySQL', viewValue: 'MySQL' },
    { value: 'PostgreSQL', viewValue: 'PostgreSQL' },
    { value: 'Oracle', viewValue: 'Oracle' },
    { value: 'AWS', viewValue: 'AWS' },
    { value: 'Azure', viewValue: 'Azure' },
    { value: 'GCP', viewValue: 'GCP' },
    { value: 'Docker', viewValue: 'Docker' },
    { value: 'Kubernetes', viewValue: 'Kubernetes' },
    { value: 'Jenkins', viewValue: 'Jenkins' },
  ];
  occupations = [
    { value: 'Student', viewValue: 'Student' },
    { value: 'Employed', viewValue: 'Employed' },
    { value: 'Unemployed', viewValue: 'Unemployed' },
    { value: 'Self Employed', viewValue: 'Self Employed' },
    { value: 'Retired', viewValue: 'Retired' },
  ];

  countryCodes = [
    { value: '+91', viewValue: 'India (+91)' },
    { value: '+1', viewValue: 'USA (+1)' },
    { value: '+44', viewValue: 'UK (+44)' },
    { value: '+61', viewValue: 'Australia (+61)' },
    { value: '+7', viewValue: 'Russia (+7)' },
    { value: '+86', viewValue: 'China (+86)' },
    { value: '+81', viewValue: 'Japan (+81)' },
    { value: '+33', viewValue: 'France (+33)' },
    { value: '+49', viewValue: 'Germany (+49)' },
    { value: '+39', viewValue: 'Italy (+39)' },
    { value: '+31', viewValue: 'Netherlands (+31)' },
    { value: '+55', viewValue: 'Brazil (+55)' },
    { value: '+64', viewValue: 'New Zealand (+64)' },
    { value: '+82', viewValue: 'South Korea (+82)' },
    { value: '+34', viewValue: 'Spain (+34)' },
    { value: '+46', viewValue: 'Sweden (+46)' },
    { value: '+90', viewValue: 'Turkey (+90)' },
  ];

  numbers = [
    { value: 'same', viewValue: 'Same as Mobile Number' },
    { value: 'different', viewValue: 'Different' },
  ];
  genders = [
    {
      value: "Male",
      view: "Male"
    },
    {
      value: "Female",
      view: "Female"
    }
  ];

  nativeVillageNames = [
    {
      value: "Bagasra",
      view: "Bagasra (બગસરા)"
    },
    {
      value: "Rajkot",
      view: "Rajkot (રાજકોટ)"
    },
    {
      value: "Ahmedabad",
      view: "Ahmedabad (અહમદાબાદ)"
    },
    {
      value: "Surat",
      view: "Surat (સુરત)"
    },
    {
      value: "Vadodara",
      view: "Vadodara (વડોદરા)"
    },
    {
      value: "Bhavnagar",
      view: "Bhavnagar (ભાવનગર)"
    },
    {
      value: "Jamnagar",
      view: "Jamnagar (જમનગર)"
    },
    {
      value: "Junagadh",
      view: "Junagadh (જુનાગઢ)"
    },
    {
      value: "Gandhinagar",
      view: "Gandhinagar (ગાંધીનગર)"
    },
    {
      value: "Anand",
      view: "Anand (આનંદ)"
    },
    {
      value: "Bharuch",
      view: "Bharuch (ભરૂચ)"
    },
    {
      value: "Bhuj",
      view: "Bhuj (ભુજ)"
    }

  ];

  presentVillageNames = [
    {
      value: "Bagasra",
      view: "Bagasra (બગસરા)"
    },
    {
      value: "Rajkot",
      view: "Rajkot (રાજકોટ)"
    },
    {
      value: "Ahmedabad",
      view: "Ahmedabad (અહમદાબાદ)"
    },
    {
      value: "Surat",
      view: "Surat (સુરત)"
    },

  ];






  onSubmit() {
    console.warn(this.userForm.value);
    this.userForm.reset();



  }


  constructor() { }

  ngOnInit(): void {
  }

}
