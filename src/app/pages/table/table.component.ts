import { Component, OnInit } from '@angular/core';
import { Product } from '.'
import { ProductService } from '../../service/productservice';

@Component({
    templateUrl: './tabledynamicdemo.html',
})
export class TableDynamicDemo implements OnInit {

    products: Product[];

    cols: any[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }
}
