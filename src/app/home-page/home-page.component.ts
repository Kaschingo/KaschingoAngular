import { Component, OnInit } from '@angular/core';
import { IWagtailPageDetail } from 'angular-wagtail';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IStreamField } from '../stream-field/stream-field.component';

interface IHomePageDetails extends IWagtailPageDetail {
  body: IStreamField[];
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public cmsData$: Observable<IHomePageDetails>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cmsData$ = this.route.data.pipe(map(dat => dat.cmsData));
  }

}
