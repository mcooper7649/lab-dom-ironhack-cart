var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc'); // this is the location of the "Calculate prices" button


function calcAll() {
  // Iteration 1.2
  
  const allProducts = document.querySelectorAll('tr.product');  //Create an Array based off tag and class siblings selectors
  let totalPrice = 0;  // create total variable
  allProducts.forEach(row => {    //iterate through each row in allproducts and execute code below
    let price = row.children[1].children[0].innerText;   // set price = row with dom manipulation until we get to price field
    let qty = row.querySelector('.qty input').value;  //set qty and queryselect within row and find our qty class and input sibling ;value for numerical
    let total = price*qty;  //now we have our variables we can create total to equal price * qty
    // totalPrice += total;
    row.querySelector('.subtot span').innerText = total;   //updates that rows subtotal
  })
  document.querySelectorAll('.subtot span').forEach(subtot => {
    totalPrice += Number(subtot.innerText);  //this updates the subtotal for all rows
  });


  document.querySelector("body > h2 > span").innerText = totalPrice;
  //updates Total price

}
$calc.onclick = calcAll;  //calcbutton onclick = calcall function executed

/**
 * Steps for iteration 4
 * 1. make a collection of all delete buttons
 * 2. loop through collection and add an onclick event that will call a function removeProduct() 
 *    (or whatever you want to name the fucntion) that will remove the whole row (i.e. the product)
 * 3. Create the function to remove the row (i.e. the product) where delect was clicked 
 */

/**
 * Resources
 * onclick - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
 * getElementsByClassName() - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 
 * Intro to events - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 
 * Event - https://developer.mozilla.org/en-US/docs/Web/API/Event 
 * Event.currentTarget - https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
 * Node.parentElement - https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement 
 * Comparison of Event Targets - https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets  
 * ChildNode.remove() - https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove 
 */

// HTML collection you can only loop using a regualr for loop
// NodeList (you can create a node list using querySelectorAll) you can use array methods such as forEach
// NodeListhttps://developer.mozilla.org/en-US/docs/Web/API/NodeList


function addDeleteListener(){
  let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');    // Step 1: make a collection of all delete buttons
  for(let i = 0; i < deleteBtnCollection.length;i++){    // Step 2: loop through collection to add onclick event that will remove the product
    deleteBtnCollection[i].onclick = removeProduct;   //execute removeProduct
  }
}

addDeleteListener()

function removeProduct(event) { // Step 3: create the function to remove the row (i.e. the product) where delect was clicked
  console.log("what", typeof event.currentTarget)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);
  console.log("What is the parent element of the current target: ", event.currentTarget.parentElement);
  console.log("What is the parent of the parent of the current target: ", event.currentTarget.parentElement.parentElement);
  event.currentTarget.parentElement.parentElement.remove(); //if we clicked on delete button> this will move up to parent elements and remove the row
 } 

 
 let createBtn = document.querySelector("#create")
 //declare createBtn by using query selector to targed ID
 
 createBtn.onclick = createRow
 //when our button is clicked execute createRow function

 function createRow(){   // declare our createRow function
   let productName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value  //specify product name by targeting path and adding value
   let price = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value   // specify product price by targeting path and adding value
   
   // delare a row variable that we can inject html format with ticks
   
   let rowHTML = `<tr class="product">  
   <td class="name">
     <span>${productName}</span>
   </td>
   <td class="pu">$<span>${price}</span></td>
   <td class="qty">
     <label>
       <input type="number" value="0" min="0" />
     </label>
   </td>
   <td class="subtot">$<span>0</span></td>
   <td class="rm">
     <button class="btn btn-delete">Delete</button>
   </td>
   </tr>`

   //still within our Create row function we specify to add our html to the table body
   document.querySelector("#cart > tbody").innerHTML += rowHTML

  addDeleteListener()
  //call delete listener so new iteration through new rows can happen and delete will work
 }