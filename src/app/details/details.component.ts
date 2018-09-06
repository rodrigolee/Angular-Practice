import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({transform: 'translateX(40%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DetailsComponent implements OnInit {
  user$: Object;
  albums$: Object;
  posts$: Object;
  todos$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.user$ = params.id );
  }
  
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
    this.data.getAlbumsForUser(this.user$).subscribe(
      data => this.albums$ = data
    )
    this.data.getPostsForUser(this.user$).subscribe(
      data => this.posts$ = data
    )
    this.data.getTodosForUser(this.user$).subscribe(
      data => this.todos$ = data
    )
  }

}
