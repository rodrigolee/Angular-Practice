import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
  post$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.post$ = params.id );
   }

  ngOnInit() {
    this.data.getPost(this.post$).subscribe(
      data => this.post$ = data 
    );
  }

}
