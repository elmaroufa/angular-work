import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products  = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:  'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ]
  constructor() { }

  getProducts() : Observable<Product[]>{
    return of(this.products);
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class SalyAbbo {

//   workSkill = 'Web developer | software engineer';
//   LANGAGE = 'PYTHON | JAVASCRIPT/TYPESCRIPT | JAVA';
//   frameworkAndLibrary =  {
//     odoo: {
//       backend: "odoo/python",
//       frontend: "OWL"
//     },
//     python: "Flask",
//     java: "Spring boot",
//     angular : "Angular",
//   }
// }
