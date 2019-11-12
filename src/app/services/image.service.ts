import { Injectable, EventEmitter } from '@angular/core';
import { WagtailService } from 'angular-wagtail';
import { HttpClient } from '@angular/common/http';

export interface IImage {
  id: number,
  meta: {
    type: string,
    detail_url: string,
    tag: string[],
    download_url: string,
    full_download_url: string,
  },
  title: string,
  width: number,
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageId: number;
  imageChanged = new EventEmitter<IImage>();

  constructor(private wagtailService: WagtailService, private http: HttpClient) { }

  setImage(imageId: number) {
    this.imageId = imageId;
    this.loadImage();
  }

  getImageApiUrl() {
    return this.wagtailService.getWagtailDomain() + "/api/v2/images/" + this.imageId
  }

  loadImage() {
    this.http.get(
      this.getImageApiUrl()
    )
      .subscribe(image => {
        let imageCast = <IImage>image;

        // get full download path
        imageCast.meta.full_download_url = this.wagtailService.getWagtailDomain() + imageCast.meta.download_url;

        // push image
        this.imageChanged.emit(imageCast);
      });
  }

}
