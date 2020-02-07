import { Injectable } from '@angular/core';
import { GroepsgroottePerLeerjaar } from '../../models/GroepsgroottePerLeerjaar';

@Injectable({
  providedIn: 'root'
})
export class GroepsgrootteService {

  constructor() { }

  getGroepsgrootte(): Array<GroepsgroottePerLeerjaar> {
    const list: Array<GroepsgroottePerLeerjaar> = [];
    // const jsonString = '{"data":[{"leerjaar": "0", "onderbouw" : "11.5", "bovenbouw": "0"},{"leerjaar": "1","bouw": "Onderbouw","aantal_leerlingen": "11.67742"},{"leerjaar": "2","bouw": "Onderbouw","aantal_leerlingen": "14.115385"},{"leerjaar": "3","bouw": "Onderbouw","aantal_leerlingen": "18.277779"},{"leerjaar": "4","bouw": "Onderbouw","aantal_leerlingen": "17.88889"},{"leerjaar": "5","bouw": "Bovenbouw","aantal_leerlingen": "19.055555"},{"leerjaar": "6","bouw": "Bovenbouw","aantal_leerlingen": "19.375"},{"leerjaar": "7","bouw": "Bovenbouw","aantal_leerlingen": "17.6"},{"leerjaar": "8","bouw": "Bovenbouw","aantal_leerlingen": "18.666666"}]}';
    const jsonString = '{"data":[{"leerjaar": "0", "onderbouw" : "11.5", "bovenbouw": "0"},{"leerjaar": "1", "onderbouw" : "0", "bovenbouw": "10"}]}';

    const parsedJsonObject = JSON.parse(jsonString).data;

    parsedJsonObject.forEach(element => {
      list.push(Object.assign(new GroepsgroottePerLeerjaar(), element));
    });

    return list;
  }
}
