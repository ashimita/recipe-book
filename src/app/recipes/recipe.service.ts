import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe('Summer salad', 'Good one', 'http://www.booths.co.uk/wp-content/uploads/summer_green_salad_640x4501-640x371.jpg', [])
  ];

  constructor() { }

}
