import { Injectable, EventEmitter } from '@angular/core';
import { WagtailService, IWagtailPage } from 'angular-wagtail';
import { HttpClient } from '@angular/common/http';

interface IWagtailPageRouter extends IWagtailPage {
  router_link: string;
}

export interface IWagtailMenuResponse {
  items: IWagtailPageRouter[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private pages: IWagtailMenuResponse;
  pagesChanged = new EventEmitter<IWagtailMenuResponse>();

  constructor(private wagtailService: WagtailService, private http: HttpClient) {
    this.fetchMenu();
  }

  fetchMenu() {
    this.http.get(this.wagtailService.getWagtailDomain() + "/api/v2/pages/?show_in_menus=true")
      .subscribe(pages => {
        // cast pages
        this.pages = <IWagtailMenuResponse>pages;

        // add router_link
        this.pages.items.forEach(function (item) {
          item.router_link = item.meta.html_url.replace(window.location.origin, "");
        });

        // push image
        this.pagesChanged.emit(this.pages);
      });
  }

}

