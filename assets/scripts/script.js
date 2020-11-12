let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(1)
        console.log (state)
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {

     if (this.state = 0){
    
    
        return heads

     }
     else{

     return tails
     }
    
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 1){
        image = heads

        }else{
        image = tails
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};


function display20flips(){
 for (let i = 20; i > 0; i--){
 console.log (coin.flip)
 
 }


}

function display20Images(){
    for (let i = 20; i > 0; i--){
        console.log (coin.flip)
        

}


