import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[ProductsService,HttpClient],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent implements OnInit{


  products_list:any

  constructor(public myclient:ProductsService, private router:Router)
  {

  }

  ngOnInit(): void {
    
  
    this.getAllProducts()
  
  }

  getAllProducts()
  {
    this.myclient.getData().subscribe(result=>{this.products_list=result})
  }

  navigateToBack() {
    this.router.navigate(['/Login']); // Navigate to the home page or any other desired route
  }

}
