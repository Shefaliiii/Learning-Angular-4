import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
form;

onSubmit= function(user){
  this.user;
  console.log(user);
}

  
  constructor() { }

  ngOnInit() {
  }

}
