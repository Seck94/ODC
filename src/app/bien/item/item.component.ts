import { Component, OnInit, Input } from '@angular/core';
import { Bien } from '../bien.modele';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() bien: Bien;
  constructor() { }

  ngOnInit(): void {
  }

}
