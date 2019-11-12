import { Component, OnInit } from '@angular/core';
import { MenuService, IWagtailMenuResponse } from '../services/menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pages: IWagtailMenuResponse;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.pagesChanged
      .subscribe(
        (pages: IWagtailMenuResponse) => {
          this.pages = pages;
        }
      );
  }

}
