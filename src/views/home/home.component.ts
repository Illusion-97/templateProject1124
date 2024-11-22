import {Component, inject} from '@angular/core';
import {Article} from './article';
import {ArticleComponent} from './article/article.component';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleComponent,
    AsyncPipe // se place dans l'HTML pour remplacer le .subscribe()
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // PAS DE  | Async
  /*data: Article[] = []

  constructor(service: ArticleService) {
    service.all().subscribe(result => this.data = result)
  }*/

  // avec le | async
  /*data: Observable<Article[]>
  constructor(service: ArticleService) {
    this.data = service.all()
  }*/

  // syntaxe simplifiée
  protected service = inject(ArticleService)
  data = this.service.all()
}
