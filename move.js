function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + "px";
        element.style.bottom = y + "px";

        function moveCharacter(){
            if(direction === "west" && x !== 0){
                x = x - 1;
            }

            if(direction === "north" && y !== window.innerHeight - 75){
                y = y + 1;
            }

            if(direction === "east" && x !== window.innerWidth - 50){
                x = x + 1;
            }

            if(direction === "south" && y !== inventory.clientHeight){
                y = y - 1;
            }
            element.style.left = x + "px";
            element.style.bottom = y + "px";

            if (y < 250){
                character.style.zIndex = 17
            } else if (y < 350) {
                character.style.zIndex = 13
            } else if (y < 450) {
                character.style.zIndex = 7
            } else if (y < 555) {
                character.style.zIndex = 5
            } else if (y < 590) {
                character.style.zIndex = 3
            } else {
                character.style.zIndex = 1
            }
            
        }
    

        setInterval(moveCharacter, 1)

        document.addEventListener("keydown", function(e){
            if(e.repeat) return;
            
            if(e.key === "ArrowLeft"){
                direction = "west"
            }
        
            if(e.key === "ArrowUp"){
                direction = "north"
            }
        
            if(e.key === "ArrowRight"){
                direction = "east"
            }
        
            if(e.key === "ArrowDown"){
                direction = "south"
            }

            if(typeof callback === "function"){
                callback(direction);
            }
        })
        
        document.addEventListener("keyup", function(e){
            direction = null;
            
            if(typeof callback === "function"){
                callback(direction);
            }
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}