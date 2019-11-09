import { Component, OnInit } from '@angular/core';
import {IWagtailPageDetail} from 'angular-wagtail';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

interface IProductIndexDetails extends IWagtailPageDetail {
  extra_field: string;
}

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  public cmsData$: Observable<IProductIndexDetails>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cmsData$ = this.route.data.pipe(map(dat => dat.cmsData));
  }

}
