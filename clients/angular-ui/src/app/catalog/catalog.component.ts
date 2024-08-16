import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
import { CatalogResult } from '../interfaces/CatalogResult';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CatalogSearchComponent } from '../catalog-search/catalog-search.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, CatalogSearchComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  public catalogResult?: CatalogResult;
  public pageIndexs: number[] = [];
  public currentPage = 1;
  public pageSize = 9;
  public brand = 0;
  public type = 0;
  constructor(private service: CatalogService) {}

  ngOnInit() {
    this.GetAllCatalogItems();
  }

  GetProductImageUrl(id: number) {
    return this.service.GetProductImageUrl(id);
  }

  GetAllCatalogItems(updatePage:boolean = true) {
    this.service
      .GetAllCatalogItems(
        this.currentPage - 1,
        this.pageSize,
        this.brand,
        this.type
      )
      .subscribe((response) => {
        if (updatePage) this.GetVisiblePageIndexes(response);
        this.catalogResult = { ...response };
      });
  }

  GetImagePath(name: string) {
    return 'assets/Pics/' + name;
  }

  GetItemsForCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.GetAllCatalogItems(false);
  }

  setBrand(id: number) {
    this.brand = id;
    this.GetAllCatalogItems();
  }

  setType(id: number) {
    this.type = id;
    this.GetAllCatalogItems();
  }

  GetVisiblePageIndexes(catalogResult: CatalogResult) {
    this.pageIndexs = [];
    const length = Math.ceil(1.0 * ((catalogResult?.count ?? 0) / 9));
    let i = 1;
    while (i < length) {
      this.pageIndexs.push(i);
      i++;
    }
    this.pageIndexs;
  }
}
