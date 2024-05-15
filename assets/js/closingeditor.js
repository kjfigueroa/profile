//enabling block-source
 document.addEventListener('contextmenu', event => event.preventDefault());       
// F12      
    document.onkeydown = function (e) {       
        if(e.keyCode == 123) {       
            return false;       
        }       
//  I       
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){       
            return false;       
        }       
//  J      
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {       
            return false;       
        }        
//  U      
        if(e.ctrlKey && e.keyCode == 85) {      
            return false;      
        }      
} 
