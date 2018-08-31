import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from'rxjs'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {
  todos$: Object
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTodos().subscribe(
      data => this.todos$ = data
    );
  }

}
