import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ODC SMS';
  nom = 'SMS vous allez bien';
  age = 25 ;
  ok = false ;
  desactive = 'desactive';
  textbtn = 'Activer' ;

  Onclick(): void{
  this.ok = ! this.ok ;
  this.textbtn = this.ok ? 'Desactiver' : 'Activer';
  }
}
