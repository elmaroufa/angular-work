import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    return [
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
    ];
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
