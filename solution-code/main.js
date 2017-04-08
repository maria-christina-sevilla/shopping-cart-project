//Categories
function onPageLoad() {
    // when you click on the category1 (is an element) add an event listener
    document.getElementById("candy-button").addEventListener("click", function() {
        document.getElementById("candy").classList.remove('hide'); // display category1 
        document.getElementById("cereal").classList.add('hide'); //and hide (class cateogry2 
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





}



document.addEventListener("DOMContentLoaded", onPageLoad);
