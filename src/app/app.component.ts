import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  send():any{
    console.log(this.formLogin.value)
  }
}
