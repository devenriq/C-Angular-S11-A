import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formLogin = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  send():any{
    console.log(this.formLogin.value)
  }
}


