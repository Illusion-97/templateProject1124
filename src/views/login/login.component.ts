import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials : Credentials = {
    email: "",
    password: ""
  }

  private http = inject(HttpClient)

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity()) {
      this.http.post("/login",this.credentials).subscribe({
        next: response => console.log(response),
        error: err => console.log(err)
      })
      form.reset()
    }
  }
}

export interface Credentials {
  email: string,
  password: string
}
