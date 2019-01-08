import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public files = [
    {id: 1, fileName: 'testFile1', isFolder: true, lastUpdate: new Date()},
    {id: 2, fileName: 'testFile2', isFolder: true, lastUpdate: new Date()},
    {id: 3, fileName: 'testFile3', isFolder: false, lastUpdate: new Date()},
    {id: 4, fileName: 'testFile4', isFolder: false, lastUpdate: new Date()},
    {id: 5, fileName: 'testFile5', isFolder: true, lastUpdate: new Date()}
  ]

  constructor() { }

  ngOnInit() {
  }

}
