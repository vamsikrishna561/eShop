import { Component, EventEmitter, Output } from '@angular/core';
import { CatalogSearchService } from './catalog-search.service';
import { CatalogBrand, CatalogItemType } from '../interfaces/CatalogResult';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-catalog-search',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './catalog-search.component.html',
  styleUrl: './catalog-search.component.scss',
})
export class CatalogSearchComponent {
  public catalogBrands: CatalogBrand[] = [];
  public catalogItemTypes: CatalogItemType[] = [];
  public itemTypeId: number = 0;
  public brandId: number = 0;
  @Output() brand = new EventEmitter<number>();
  @Output() type = new EventEmitter<number>();
  constructor(private service: CatalogSearchService) {}
  ngOnInit() {
    this.service.GetBrands().subscribe((res) => {
      this.catalogBrands = res;
    });
    this.service.GetTypes().subscribe((res) => {
      this.catalogItemTypes = res;
    });
  }

  setBrand(id: number) {
    this.brandId = id;
    this.brand.emit(id);
  }
  setType(id: number) {
    this.itemTypeId = id;
    this.type.emit(id);
  }
}
