import { Injectable } from '@angular/core';
import { Bien } from './bien/bien.modele';

@Injectable({
  providedIn: 'root'
})
export class BienService {

   seach: string = '' ;
  private biens: Bien [] = [
    {id: 1, title: 'maison',
    description: 'desc',
    price: 4000,
    image: 'https://source.unsplash.com/1080x720/?chambre ',
    categoriy: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.', sale: true,
    createAt: new Date(2020 , 12 , 23)
    },
    {id: 2, title: 'ordinateur',
    description: 'desc',
    price: 4000,
    image: 'https://source.unsplash.com/1080x720/?hp',
    categoriy: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.', sale: true,
    createAt: new Date(2000 , 10 , 12)
    },
    {id: 3, title: 'hotel',
    description: 'desc',
    price: 4000,
    image: 'https://source.unsplash.com/1080x720/?hotel',
    categoriy: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.', sale: true,
    createAt: new Date(2000 , 10 , 12)
    },
    {id: 4, title: 'food',
    description: 'desc',
    price: 4000,
    image: 'https://source.unsplash.com/1080x720/?resaurant',
    categoriy: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.', sale: true,
    createAt: new Date(2020 , 10 , 30)
    },
    {id: 5, title: 'voiture',
    description: 'desc',
    price: 4000,
    image: 'https://source.unsplash.com/1080x720/?bmw',
    categoriy: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.', sale: true,
    createAt: new Date(2015 , 1 , 12)
    },
    {id: 6, title: 'appel',
    description: 'desc',
    price: 4000,
    image: 'https://source.unsplash.com/1080x720/?Iphone',
    categoriy: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.', sale: true,
    createAt: new Date(2019 , 4 , 12)
    },
  ];

  constructor() { }
  // get biens(){
  //   return this.__biens ;
  // }
  getAllBiens(){
    return this.biens;
  }
  //cet fonction permet de rechercher par un id @ return un bien: Bien | null
  getBienById(id: number): Bien {
  const bienfound = this.biens.find(
     (bien:Bien) => {
       return bien.id === id ;
     }
   );
    return bienfound ;
  }
  addBien(newBien: Bien) {
    this.biens.push(newBien);
  }
  update (bienupdatetd: Bien) {
    var oldBien: Bien = this.biens.find(
      (bien:Bien) => {
        return bien.id === bienupdatetd.id;
      }
    );
    if (oldBien){
      oldBien = {...bienupdatetd};
    }
  }
    getLastId(): Number{
      return this.biens[this.biens.length - 1] ? this.biens[this.biens.length - 1 ].id : 0 ;
    }

    // getSimilarBiensById(id: number):Bien[]{
    //   this.biens.
    // }

}
