import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  constructor(private api:ApiService) { }
  $unsubscribe = new Subject();
  details: any;

  ngOnInit(): void {
    this.api.getDetails()
    .pipe(takeUntil(this.$unsubscribe))
    .subscribe((data) => {
      this.details = data;
      console.log(this.details);
    });
  }

}
