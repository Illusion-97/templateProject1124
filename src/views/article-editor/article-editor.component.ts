import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AbstractFormComponent} from '../../tools/abstract-form-component';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent extends AbstractFormComponent {
  form: FormGroup = new FormGroup({});

  onSubmit$(): void {
    console.log("Article : ", this.form.value)
  }
}
