import { Component, OnInit, Input } from '@angular/core';
import { ImageService, IImage } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() imageId: number;
  image: IImage;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.setImage(this.imageId);
    this.imageService.imageChanged
      .subscribe(
        (image: IImage) => {
          this.image = image;
        }
      );
  }

}

