import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../../models/message-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public user = new MessageModel

  onSubmit(regForm: any) {
    console.log(this.user)
    // this.user.name=''
    // this.user.email=''
    // this.user.subject=''
    // this.user.message=''
  }

}
