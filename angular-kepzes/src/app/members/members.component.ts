import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public members = [
    {id: 1, username: 'testUserName1', accessLevel: 'Developer'},
    {id: 2, username: 'testUserName2', accessLevel: 'admin'},
    {id: 3, username: 'testUserName3', accessLevel: 'Tester'},
    {id: 4, username: 'testUserName4', accessLevel: 'Developer'},
    {id: 5, username: 'testUserName5', accessLevel: 'Admin'},
    {id: 6, username: 'testUserName6', accessLevel: 'Tester'},
    {id: 7, username: 'testUserName7', accessLevel: 'Developer'},
    {id: 8, username: 'testUserName8', accessLevel: 'Developer'},
    {id: 9, username: 'testUserName9', accessLevel: 'Developer'},
    {id: 10, username: 'testUserName10', accessLevel: 'Developer'},
  ]

constructor() { }

ngOnInit() {
}

}
