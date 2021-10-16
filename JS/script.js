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
    
    
    // for(let i =0; i<carts.length;i++){
    //   carts[i].addEventListener('click',()=>{
    //     products[i].incart++;
    //     localStorage.setItem(`product${i}`, JSON.stringify(products[i]));
    //      console.log(typeof localStorage.getItem(`product${i}`))
    
    //     alert("The item added to cart successfully");
        
    //     cartNumbers(products[i]);
    //     totalCost(products[i]);
    
    //   })
    // }

var result;
//-----------------
function SetItems(item) {
    var name = item.parentNode.children[1].innerHTML;
    var price = item.parentNode.children[3].innerHTML;
    localStorage.setItem(name, price);
    alert("The item added to cart successfully");
    displayCart();

}
//-----------------
function RemoveItem(item) {
    var removeitem = item.parentNode.parentNode.children[0].innerHTML;
    localStorage.removeItem(removeitem);
    displayCart();
}
//------------------
function Discount(item) {
    let cobon = item.parentNode.children[0].value;
    let cobonvalue = 25;
    if (cobon === "welcome") {

        result = result - cobonvalue;
    }
}
//-------------------
function clearCart() {
    localStorage.clear();
    displayCart();
}
//-------------------
function displayCart(alter) {
    if (CheckBrowser()) {

        var products = "<tr'><th scope='col'>Product</th><th scope='col'>Price</th><th scope='col'></th></tr>";
        var key = "";
        var prices = []
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            prices.push(parseFloat(localStorage.getItem(key)))
            products += `<tr id="toremove"> 
            <td>${key} </td>
             <td>${localStorage.getItem(key)}</td>
				<td>
                <button type="button" class="btn-close" value="Delete" onclick="RemoveItem(this)" aria-label="Close"></button>
                </td>
                </tr>`;
        }
        if (prices.length == 0) {
            if (document.getElementById('container') != null)
                document.getElementById('container').innerHTML = `
                <tr><td ><div style="text-align: center;">
		            	You're Cart Is  Empty
		                    </div>
	                    	</td></tr>`;
        } else {

            let total = prices.reduce(function(a, b) {
                return (a + b);
            })

            let vat = total * 0.15;

            result = total + vat;
            document.querySelector('.cart span').textContent = localStorage.length;

            if (document.getElementById('container') != null)

                document.getElementById('container').innerHTML = products + `
                <br>
                <table class="table table-borderless table align-middle table mx-2 my-2">
                <thead>
             </thead>
                <tbody>
                <tr>
                   <th scope="row">Total including VAT 15% : <td>${result} SAR</td></th>
                </tr>
                <tr>
                   <th  scope="row"><input type="text" class="form-control" placeholder="Enter your code"> </th>
                   <td> <button type="button" onclick="Discount(this)" class="btn btn-outline-secondary">Apply Code</button></td>
                </tr>
<tr><td><input type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  Collection </label> </td> </tr>

  <tr><td><input type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  Delivery </label> </dh> 
  
  </tr>
  <tr><td><select class="form-select" aria-label="Default select example">
  <option selected>Standard-Delivery - 20.00 SAR</option>
  <option >Fast-Delivery - 35.00 SAR</option>
</select></td></tr>
 </tbody>
 </table>
<br>
` + ` 
<button onclick="CHECKOUT()" class="btn btn-secondary me-md-2" type="button">CHECKOUT</button>
`; }}}
//-----------------
function CHECKOUT() {
    alert('Youre Order Number is #' + Math.random() * 100);
    localStorage.clear();
    displayCart();
}

//-----------------
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}