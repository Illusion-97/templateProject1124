import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {MiniPost, MiniPostComponent} from './mini-post/mini-post.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent,
    MiniPostComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  parentValue : string = "parentValue"

  @Output() moreClicked: EventEmitter<string> = new EventEmitter<string>()

  protected auth = inject(AuthService)

  minipost1 : MiniPost = {
    alt: 'Image alt',
    link: '#',
    src: 'pic08.jpg',
    text: 'hi there'
  }

  miniposts: MiniPost[] = [
    /*this.minipost1,
    {
      alt: 'Image alt',
      link: '#',
      src: 'pic09.jpg',
      text: this.parentValue
    },
    {
      alt: 'Image alt',
      link: '#',
      text: 'hi there'
    }*/
  ]

}
