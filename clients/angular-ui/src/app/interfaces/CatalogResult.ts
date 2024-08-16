export interface CatalogBrand{
    id:number, 
    brand:string
}
export interface CatalogItemType {
    id:number, type:string
}
export interface CatalogItem{
    id:number,
    name:string,
    description:string,
    price:number,
    pictureFileName:string,
    pictureUrl:string,
    catalogBrandId:number,
    catalogBrand:CatalogBrand,
    catalogTypeId:number,
    catalogType:CatalogItemType
}
export interface CatalogResult {
    pageIndex:number, 
    pageSize:number, 
    count:number, 
    data:CatalogItem[]
}


