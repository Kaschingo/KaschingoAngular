import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IWagtailPageDetail } from 'angular-wagtail';

interface IEntryPageDetails extends IWagtailPageDetail {
  extra_field: string;
}

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent implements OnInit {

  public cmsData$: Observable<IEntryPageDetails>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cmsData$ = this.route.data.pipe(map(dat => dat.cmsData));
  }

}
