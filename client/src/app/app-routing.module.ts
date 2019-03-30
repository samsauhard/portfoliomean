import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectComponent } from './pages/project/project.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'project', component: ProjectComponent, data: {title: 'Project'}},
  {path: 'documents', component: DocumentsComponent, data: {title: 'Documents'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},

  {path: 'contact/contact-list', component: ContactListComponent, data: {title: 'Contact List'}},
  {path: 'contact/contact-list/add', component: ContactDetailsComponent, data: {title: 'Add Contact'}},
  {path: 'contact/contact-list/edit/:id', component: ContactDetailsComponent, data: {title: 'Edit Contact'}},
  {path: 'contact/contact-list/delete/:id', component: ContactDeleteComponent, data: {title: 'Add Contact'}},

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Register'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
