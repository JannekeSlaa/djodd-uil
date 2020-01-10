import { Component } from '@angular/core';
import { LeerlingenAantalService } from './leerling-prognose.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _leerlingenAantal: LeerlingenAantalService) {}

  ngOnInit() {
    this._leerlingenAantal.getLeerlingenAantal()
      .subscribe(res => {
        console.log(res)
      })
  }


}
