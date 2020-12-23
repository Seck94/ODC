import { Component, OnInit } from '@angular/core';
import { BienService } from '../bien.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private bienS: BienService) { }

  ngOnInit(): void {
  }

}
