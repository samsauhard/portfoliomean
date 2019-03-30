import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute,
    private authService: AuthService
    ) {
    super(route);
   }

  ngOnInit() {
  }
isLoggedIn(): boolean
{
  return this.authService.loggedIn();
}
}
