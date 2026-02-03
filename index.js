 const mySmall = document.getElementById("mySmall")
  const myLarge = document.getElementById("myLarge")
   const myMedium = document.getElementById("myMedium")
   const mySausage = document.getElementById("mySausage")
    const myPepperoni = document.getElementById("myPeppeoni")
    const myPinapple = document.getElementById("myPineapple")
     const myOrderButton = document.getElementById("orderButton")
      const myTotal = document.getElementById("total")
       const myThanks = document.getElementById("thanks")
let myResult = 0  
///Yooooooo
       myOrderButton.onclick = function calculateTotal(){
        myResult = 0;
        if(mySmall.checked)
        {if(mySausage.checked){myResult += 2 }
        {if(myPepperoni.checked){myResult += 3 }
        {if(myPinapple.checked){myResult += 4 }
            myResult += 6
         if(myMedium.checked){
            myResult += 9
        }
        if(myLarge.checked) {
            myResult += 12
        };
          
       }

    }}}