
let currentFlip = 0;
let flipArray = []
let coin = {
    state: 0,
    flip: function() {
        currentFlip = 0;
        this.state = Math.random()<.5;
        currentFlip = this.state
        flipArray.push(currentFlip)
        console.log ("this.state",this.state)
        console.log (flipArray)
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        let flipDiv = document.createElement("div")
        
     if (this.state === true){
        //flipDiv.innerHTML +='heads '; 
        flipDiv.innerHTML="heads"
        document.body.appendChild(flipDiv)
        return "heads"
     }
     else{
        flipDiv.innerHTML="tails"
        document.body.appendChild(flipDiv)
     return "tails"
    }
    
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let imgDiv = document.createElement("div");
        let image = document.createElement('img'); 
        image.style.width = "100px"
        image.style.height = "100px"
        if (this.state === true){
            image.src = './assets/images/heads.png'
            document.querySelector("div").appendChild(image)
            return image
        }else{
        image.src = "./assets/images/tails.png"
        document.querySelector("div").appendChild(image)
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};


function display20flips(){
 for (let i = 20; i > 0; i--){
     console.log ("i counter", i)
     coin.flip ();
     coin.toString();
    console.log(currentFlip)
    console.log(flipArray)
}
}
display20flips();
function display20Images(){
for (let i = 20; i > 0; i--){
        console.log ("i counter", i)
        coin.flip ();
        coin.toHTML();
        console.log(currentFlip)
        console.log(flipArray)
   
}
}

display20Images()