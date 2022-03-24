import {LubDetail} from "./lub-detail.model";

export class Lubricant {
  public name: string;
  public imagePath: string;
  public lubDetail: LubDetail[];

  constructor(name: string, imagePath: string, lubDetail: LubDetail[]) {
    this.name = name;
    this.imagePath = imagePath;
    this.lubDetail = lubDetail;
  }

}
