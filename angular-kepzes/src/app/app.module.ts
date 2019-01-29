import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilesComponent } from './files/files.component';
import { FileItemComponent } from './files/file-item/file-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';
import { UserComponent } from './members/user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueFormComponent } from './issues/issue-form/issue-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilesComponent,
    FileItemComponent,
    SidebarComponent,
    DashboardComponent,
    MembersComponent,
    UserComponent,
    ProfileComponent,
    ProjectComponent,
    PagenotfoundComponent,
    IssuesComponent,
    IssueFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
