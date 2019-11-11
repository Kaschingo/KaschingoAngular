import { Component, OnInit } from '@angular/core';
import { IWagtailPageDetail } from 'angular-wagtail';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


interface IBlogePageDetails extends IWagtailPageDetail {
  extra_field: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  public cmsData$: Observable<IBlogePageDetails>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cmsData$ = this.route.data.pipe(map(dat => dat.cmsData));
  }

}
