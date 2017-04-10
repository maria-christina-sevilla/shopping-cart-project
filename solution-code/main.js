//Categories
function onPageLoad() {
    // when you click on the category1 (is an element) add an event listener
    document.getElementById("candy-button").addEventListener("click", function() {
        document.getElementById("candy").classList.remove('hide'); // display category1 
        document.getElementById("cereal").classList.add('hide'); //and hide (class) cateogry2 
        document.getElementById("juice").classList.add('hide'); // and hide (class) category3 
    });

    // when you click on the category2 button  
    document.getElementById("cereal-button").addEventListener("click", function() {
        document.getElementById("candy").classList.add('hide'); // hide category1
        document.getElementById("cereal").classList.remove('hide'); //display category2
        document.getElementById("juice").classList.add('hide'); //hide cateogry3
    });

    // when you click on the category3 button 
    document.getElementById("juice-button").addEventListener("click", function() {
        document.getElementById("candy").classList.add('hide'); //hide category1
        document.getElementById("cereal").classList.add('hide'); //hide category2
        document.getElementById("juice").classList.remove('hide'); //display cateogry3
    });


    //Shopping Cart
    // When you click on an image the items will be sent to the shopping cart

    var itemsArray = document.getElementsByClassName("items"); //1
    for (var i = 0; i < itemsArray.length; i++) { //2

        var addItem = itemsArray[i]; //2
        addItem.addEventListener("click", function() { //3

            var listItem = document.createElement('li'); //4
            listItem.innerHTML = this.innerText; //5
            console.log(this);

            var cart = document.getElementById('cart'); //6
            cart.appendChild(listItem);

        });
    }
}

document.addEventListener("DOMContentLoaded", onPageLoad);

//Shopping Cart Notes:
// When you click on an image the items will be sent to the shopping cart
// [div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items, div.items]
// since these items are in an array, use a for loop to put items in shopping cart

// 1. Hey, HTML document find me everything wiht the class " ", that I want the user to click on to put in the shopping cart.
// 2. Store items in the array.
// 3.What do you want to do with the array? (When item clicked add event listener)
// 4. create an empty list element and store it in a variable.
// 5. Text, Hey, list item I just created, I want to set your list item with innerHTML = points to items at indices[0] by only 1 item in array .querySeclector
// 6.grab innerHTML and append to list with .appendchild

// // index [0]
// var firstItem = itemsArray[0];
// firstItem.addEventListener("click", function() {

//     var listItem = document.createElement('li');
//     listItem.innerHTML = this.innerText;
//     console.log(this);

//     var cart = document.getElementById('cart');
//     cart.appendChild(listItem);


// });

// // index[1]
// var secondItem = itemsArray[1];
// secondItem.addEventListener("click", function() {

//     var listItem = document.createElement('li');
//     listItem.innerHTML = this.innerText;
//     console.log(this);

//     var cart = document.getElementById('cart');
//     cart.appendChild(listItem);
// });
