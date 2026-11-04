
// 1. add event listener to the button

document.querySelector("#rollButton").addEventListener("click", event => {
    // 2. animate the die 
    const images = document.querySelectorAll("#gameboard img");
    images.forEach(image => {
        // switch the source to the die rolling gif animation
        if(isDieUnlocked(image)){
            image.src = "assets/die_rolling.gif";
        
        }
    });

    setTimeout(() => {
        //run what is in here after x millisecond
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                // set images to random die 
                // 3. change the value each die lands on random
                // change the src image
                // image.src = Math.random() 
                const randomNumber = Math.floor(Math.random() *6 ) + 1;
                // switch the source to the die rolling gif animation
                image.src = `assets/white_dice_${randomNumber}.gif`;

            }
        });
    }, 1000);
});

function isDieUnlocked(dieImage) {
    //is the corresponding checkbox checked then return false
    const checkboxes = document.querySelectorAll("#gameboard input");
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find(unchecked => unchecked.className === dieImage.className);



    
}


