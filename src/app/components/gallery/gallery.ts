export class Gallery {
  title: string;
  items: GalleryItems[];
  link: string;
}
export class GalleryItems{
  refId: number;
  imageName: string;
  footer: string;
  subFooter: string;
}