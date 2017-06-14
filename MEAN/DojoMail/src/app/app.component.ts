import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  importance = true;
  emails = [
    {
    email: 'bill@gates.com',
    importance: true,
    subject: "Hello",
    content: "WUZZAAH"
    },
    {
    email: 'yo@momma.com',
    importance: false,
    subject: "YoMommaSoDumb",
    content: "Sits on the Tv and watches the couch"
    },
    {
    email: 'sponge@bob.com',
    importance: true,
    subject: "KrabbyPatties",
    content: "Squidward says youre cut off"
    }
  ]}
