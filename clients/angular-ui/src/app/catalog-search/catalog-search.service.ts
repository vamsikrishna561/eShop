import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogBrand, CatalogItemType } from '../interfaces/CatalogResult';

@Injectable({
  providedIn: 'root'
})
export class CatalogSearchService {

  constructor(private http: HttpClient) { }

  GetBrands(): Observable<CatalogBrand[]>{
     const url = `http://localhost:5222/api/catalog/catalogBrands?api-version=1.0`;
    return this.http.get<CatalogBrand[]>(url);
  }

  GetTypes(): Observable<CatalogItemType[]>{
    const url = `http://localhost:5222/api/catalog/catalogTypes?api-version=1.0`;
   return this.http.get<CatalogItemType[]>(url);
 }
}
