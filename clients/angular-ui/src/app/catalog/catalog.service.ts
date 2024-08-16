import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogResult } from '../interfaces/CatalogResult';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  GetAllCatalogItems(
    pageIndex: number,
    pageSize: number,
    brand?: number,
    type?: number
  ): Observable<CatalogResult> {
    var filterQs = '';
    var brandQs = brand && brand !== 0 ? brand.toString() : '';
    if (type && type !== 0) {
      filterQs = `/type/${type}/brand/${brandQs}`;
    } else if (brand && brand !== 0) {
      filterQs = `/type/all/brand/${brandQs}`;
    }

    var url = `http://localhost:5222/api/catalog/items${filterQs}?pageIndex=${pageIndex}&pageSize=${pageSize}&api-version=1.0`;
    return this.http.get<CatalogResult>(url);
  }

  GetProductImageUrl(productId: number) {
    var url = `http://localhost:5222/api/catalog/items/${productId}/pic?api-version=1.0`;
    return this.http.get<string>(url);
  }
}
