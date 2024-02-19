class Shopping{

    product_id:number
    product_name:string
    product_quantity:number
    product_price:number
    
    constructor(product_id:number,product_name:string,product_quantity:number,product_price:number)
    {
        this.product_id=product_id
        this.product_name=product_name
        this.product_quantity= product_quantity       
        this.product_price=product_price
    }

    calculateBill():number
    {
        if(this.product_quantity<=0)
            {
                return 0
            }
        else
            {
                let bill:number=this.product_quantity*this.product_price
                return bill
            }
        
    }

    displayShoppingDetails():void{

        if(this.calculateBill()==0)
        {
            console.log("Error!!!!")
        }
        else
        {
            console.log("Shopping Details")
            console.log("Product_ID:"+this.product_id)
            console.log("Product_Name:"+this.product_name)
            console.log("Product_Quantity:"+this.product_quantity)
            console.log("Product_Price:"+this.product_price)
            console.log("Product_Bill:"+this.calculateBill())
        }

    }

}

var shop_obj= new Shopping(121,"Ice_Cream",2,70)

shop_obj.calculateBill()
shop_obj.displayShoppingDetails()