import { Component, OnInit } from '@angular/core';
import { BienService } from 'src/app/bien.service';
import { Bien } from '../bien.modele';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.scss']
})
export class ListBienComponent implements OnInit {
   seach: string = '';
   biens: Bien[];
  constructor(private bienservice: BienService) {
   }

  ngOnInit(): void {
    this.biens = this.bienservice.getAllBiens() ;
  }

}
