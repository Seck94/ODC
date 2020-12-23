import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BienService } from 'src/app/bien.service';
import { Bien } from '../bien.modele';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {
  bien: Bien ;

  constructor(private bienSERV: BienService, private activeR: ActivatedRoute) { }

  ngOnInit(): void {
    this.bien =  this.bienSERV.getBienById(+this.activeR.snapshot.params.id);
  }

}
