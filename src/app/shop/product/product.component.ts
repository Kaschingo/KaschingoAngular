import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {IWagtailPageDetail} from 'angular-wagtail';

interface IProductDetails extends IWagtailPageDetail {
  extra_field: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public cmsData$: Observable<IProductDetails>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cmsData$ = this.route.data.pipe(map(dat => dat.cmsData));
  }

}
