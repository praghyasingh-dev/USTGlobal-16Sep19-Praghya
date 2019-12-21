import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  compose()
  {
  this.router.navigateByUrl("/composeemail");
  }
}
