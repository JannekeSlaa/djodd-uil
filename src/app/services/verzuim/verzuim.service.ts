import { Injectable } from '@angular/core';
import {VerzuimPerStatus} from '../../models/VerzuimPerStatus';

@Injectable({
  providedIn: 'root'
})
export class VerzuimService {

  constructor() { }

  getVerzuimPerStatus(): Array<VerzuimPerStatus> {
    const list: Array<VerzuimPerStatus> = [];
    // Deze JSON String komt straks van de backend
    const jsonString = '{"data":[{"label":"afgesloten","aantal_l":0,"aantal_lrv":0,"aantal_0":24,"aantal_v3":9},{"label":"geregistreerd","aantal_l":0,"aantal_lrv":1,"aantal_0":18,"aantal_v3":1},{"label":"In behandeling","aantal_l":0,"aantal_lrv":1,"aantal_0":1,"aantal_v3":0}]}';
    const parsedJsonObject = JSON.parse(jsonString).data;

    // parsedJsonObject.json().results.map(obj => list.push(Object.assign(new VerzuimPerStatus(), obj)));
    parsedJsonObject.forEach(element => {
      list.push(Object.assign(new VerzuimPerStatus(), element));
    });
    return list;
  }
}
