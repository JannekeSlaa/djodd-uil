import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeerlingenAantalService {

  constructor(private _http: HttpClient) { }


  getLeerlingenAantal(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Basic QW5ndWxhci1ESk9ERDphbmd1bGFyLURKT0RE",
      'Access-Control-Allow-Origin': '*' });
    let options = { headers: headers };  

    return this._http.post("http://localhost:4200/api",{"implementerParameters":{"organisatie":["4192"],"endDate":"01-2025"},"eventHistory":[],"dataType":2,"subject":"leerlingenPrognosePerSchool","dataProvider":"leerlingenprognose_postgres"}, options)
  }

  getLeerlingenPrognose(){
    return JSON.parse('{ "result": [ [ "2014 / 2015", "TELLING", "99DN - Demonstratieschool ParnasSys", "aantal", "197.00" ], [ "2015 / 2016", "TELLING", "99DN - Demonstratieschool ParnasSys", "aantal", "197.00" ], [ "2016 / 2017", "TELLING", "99DN - Demonstratieschool ParnasSys", "aantal", "198.00" ], [ "2017 / 2018", "TELLING", "99DN - Demonstratieschool ParnasSys", "aantal", "206.00" ], [ "2018 / 2019", "TELLING", "99DN - Demonstratieschool ParnasSys", "aantal", "208.00" ], [ "2019 / 2020", "PROGNOSE", "99DN - Demonstratieschool ParnasSys", "aantal", "208.08" ], [ "2020 / 2021", "PROGNOSE", "99DN - Demonstratieschool ParnasSys", "aantal", "203.30" ], [ "2021 / 2022", "PROGNOSE", "99DN - Demonstratieschool ParnasSys", "aantal", "198.16" ], [ "2022 / 2023", "PROGNOSE", "99DN - Demonstratieschool ParnasSys", "aantal", "189.68" ], [ "2023 / 2024", "PROGNOSE", "99DN - Demonstratieschool ParnasSys", "aantal", "179.40" ], [ "2024 / 2025", "PROGNOSE", "99DN - Demonstratieschool ParnasSys", "aantal", "176.58" ] ]}')
  }

  getLeerlingenJaartal(){
    var jaartallen = [];
    var jaartal = this.getLeerlingenPrognose().valueOf('result').get[0] ;
    jaartallen.push(jaartal);
    return 
  }
}
