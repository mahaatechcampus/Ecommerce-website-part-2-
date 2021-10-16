let carts = document.querySelectorAll('.add-cart');

let products = [
{
    name:"Cheeky Cheetah Cushion 45 X 45Cm",
    tage:"9.png",
    price:139,
    incart:0
}
,{
    name:"Moomin Troll & Snorkmaiden Glass Water Bottle",
    tage:"17.png",
    price:88,
    incart:0
}
,{
    name:"Cherry Blossom Smoothie Cup",
    tage:"11.png",
    price:56,
    incart:0
}
,{
    name:"Desert Palm Cocktail Essentials Kit",
    tage:"12.png",
    price:146,
    incart:0
}
,{
    name:"PlayStation 5 Travel Mug",
    tage:"13.png",
    price:73,
    incart:0
}
,{
    name:"Charm Teapot 1250ml",
    tage:"14.png",
    price:137,
    incart:0
}
,{
    name:"Folio Case Iphone 12 / 12 Pro / 12 Pro Max",
    tage:"15.png",
    price:220,
    incart:0
}
,{
    name:"The Best Is Yet To Come 18 Month Planner",
    tage:"16.png",
    price:71,
    incart:0
}
,{
    name:"Plum, Orchid & Vanilla Candle",
    tage:"18.png",
    price:141,
    incart:0
}
,{
    name:"Crystalline Nova Ballpoint Pen",
    tage:"19.png",
    price:279,
    incart:0
}
]


for(let i =0; i<carts.length;i++){
  carts[i].addEventListener('click',()=>{
    products[i].incart++;
    localStorage.setItem(`product${i}`, JSON.stringify(products[i]));
     console.log(typeof localStorage.getItem(`product${i}`))

    alert("The item added to cart successfully");
    
    cartNumbers(products[i]);
    totalCost(products[i]);

  })
}

  //------------------
function onLoadCartNumber(){
    
let producNumbers = localStorage.getItem('cartNumbers');
if(producNumbers){
 document.querySelector('.cart span').textContent =producNumbers;   
     }
}


  //------------------
  function cartNumbers(product){

    let producNumbers = localStorage.getItem('cartNumbers');
   producNumbers = parseInt(producNumbers);
  
  
   //if the productnumber exsist?
   if(producNumbers){
    localStorage.setItem('cartNumbers',producNumbers+1);
    document.querySelector('.cart span').textContent=producNumbers+1;

  }
  else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent=1;
  }
  
  //setItems(product);
  }


  //------------------
  function setItems(product){

   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
   if(cartItems != null){

    if(cartItems[product.tage] == undefined){
        cartItems = {
            ...cartItems,
            [product.tage]: product
        }
    }
    // product.incart++;
  cartItems[product.tage].incart ++;
   }
   else{
product.incart ++;
cartItems = {
    [product.tage]: product
}

   }
  
   localStorage.setItem("productInCart", JSON.stringify(cartItems));
  }

 function totalCost(product){
   
     let cartCost =localStorage.getItem('totalCost');

     if(cartCost != null){
     cartCost = parseInt(cartCost);
      cartCost= cartCost + product.price;
     localStorage.setItem("totalCost", cartCost);
     }
     else{
         localStorage.setItem("totalCost",product.price)
     }
 } 

 function displayCart(){
     let productCountainer = document.querySelector(".cartContent");
     let product=[];   

    for (let i = 0; i < localStorage.length; i++) {
     if(localStorage.key(i) ==`product${i}`) {
        
         product[i]=JSON.parse(localStorage.getItem(`product${i}`));
    
       
         Object.values(product[i]).map(item => {
            productCountainer.innerHTML +=`
        
         div class="col-2"><img class="img-fluid" src="images/${item.tage}"></div>
                <div class="col">
                     <div class="row">${item.name}</div>
                </div>

                 <div class="col"> <i class="bi bi-arrow-left-circle-fill mx-2"></i>${item.incart}<i class="bi bi-arrow-right-circle-fill mx-2"></i> </div>
                 <div class="col">${item.price} SAR  <i class="bi bi-x-circle-fill mx-2"></i></div>
         
         `;
        });
       
 }}
  productCountainer.innerHTML =``;
    }
  
// let cartItems = localStorage.getItem("productInCart");
// cartItems =JSON.parse(cartItems);
         
//         if(cartItems && productCountainer){
//               productCountainer.innerHTML =``;

//               Object.values(cartItems).map(item => {
//                 productCountainer.innerHTML +=`
               
//                 <div class="col-2"><img class="img-fluid" src="images/${item.tage}"></div>
//                 <div class="col">
//                     <div class="row">${item.name}</div>
//                </div>

//                 <div class="col"> <i class="bi bi-arrow-left-circle-fill mx-2"></i>${item.incart}<i class="bi bi-arrow-right-circle-fill mx-2"></i> </div>
//                 <div class="col">${item.price} SAR  <i class="bi bi-x-circle-fill mx-2"></i></div>

               
//         `;
//         });
//             productCountainer.innerHTML +=`
//             <div class="col-md-4 summary">
//             <div>
//                 <h5><b>Summary</b></h5>
//             </div>
//             <hr>
//             <div class="row">
//                 <div class="col text-right">${cartCost}</div>
//             </div>
//             <form>
//                 <p>SHIPPING</p> <select>
//                     <option class="text-muted">Standard-Delivery- &euro;5.00</option>
//                 </select>
//                 <p>GIVE CODE</p> <input id="code" placeholder="Enter your code">
//             </form>
//             <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
//                 <div class="col">TOTAL PRICE</div>
//                 <div class="col text-right">&euro; 137.00</div>
//             </div> <button class="btn">CHECKOUT</button>
//         </div>
//             `;

            
//           }
 
  onLoadCartNumber();
  displayCart();
