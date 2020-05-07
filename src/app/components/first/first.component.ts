import { Component, OnInit } from '@angular/core';
//import {FormsModule} from '@angular/forms';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  comment: string
  name: string
  birthyear:number
  gender: string
  email: string
  phone: string
  profile: user_profile
  studentid: string
  address:string

  constructor() { 
    this.profile = {
      studentid: 'B6001520',
      name: 'Kittichai  Jitjaroen',
      gender: 'Male',
      birthyear: 1998,
      email: 'b6001520@g.sut.ac.th',
      phone: '0901316436',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    //this. studentid='B6001520',
   // this. name= 'Kittichai  Jitjaroen',
   // this. gender= 'Male',
   // this. birthyear= 1998,
   // this.  email= 'b6001520@g',
   // this.  phone= '0901316436',
   // this.address = 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand'
  }
  getStudentid(){
    return this.profile.studentid;
  }
  getimg(){
    return this.profile.img;
  }
  getName(){
    return this.profile.name;
  }
  getGender(){
    return this.profile.gender;
  }
  getBirthyear(){
    return this.profile.birthyear;
  }
  getEmail(){
    return this.profile.email;
  }
  getPhone(){
    return this.profile.phone;
  }
  onUserClick($e){
    alert(this.profile.address);

  }

}
