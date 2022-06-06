import react from 'react';


function Rain() {

    //SETUP
     var c = document.getElementById("c");
     var ctx = c.getContext("2d");
  
     //making the canvas full screen
     c.height = window.innerHeight;
     c.width = window.innerWidth;
     
     //Black BG for the canvas
     //translucent BG to show trail
     var backgroundColor = "rgba(0, 0, 0, 0.05)"
     var defaultSpeed = 33;
     var font_size = 15;
     var columns = c.width/font_size; //number of columns for the rain
     //an array of drops - one per column
     var drops = [];
     //x below is the x coordinate
     //1 = y co-ordinate of the drop(same for every drop initially)
 
 
     /*
         Switches betweeen different letter sets
     */
     var LangManager = {
         langPointer: 0,
         // Potential to add support for more character sets
         langArr : ["MTC       "],
         changeLang : function() {
           this.langPointer++;
          },
         getLetters : function() {
             return this.langArr[this.langPointer % this.langArr.length].split("");
 
         }
     }
 
 
   
 //------------------------------------ Color Management ---------------------------------------
 
   /*
         Not currently used but was able to toggle betweeen sets of colors
     */
     var ColorManager = {
         pointer : 0,
         arr : [["#0F0","#F00"],["#FFF", "#4d94ff"], ["#ffff00", "#8533ff"]],
 
         currentColors : function () {
             return this.arr[this.pointer % this.arr.length];
         },
 
         toggle : function () {
             this.pointer++;
  
         }
     }
 
     var SpeedManager = {
         speed : defaultSpeed,
         resetSpeed : function() {
             clearInterval(draw);
             setInterval(draw, 33);
 
         }
     };
  

 
      //RandomColor generater
     function getRandomColor() {
         var letters = 'MTC'.split('');
         var color = '#';
         for (var i = 0; i < 6; i++ ) {
             color += letters[Math.floor(Math.random() * 14)];
         }
         console.log(color);
         return color;
     }
     
     var randColorFunction = function(count, color) {
                 var color = color;
                 if (count < columns) {
                     // call the function.
                     drops[count].setColor(color); 
  
                     // The currently executing function which is an anonymous function.
                     var caller = arguments.callee; 
                     window.setTimeout(function() {
                         // the caller and the count variables are
                         // captured in a closure as they are defined
                         // in the outside scope.
                         caller(count + 1, color);
                     }, 5);    
                 }
             };
 
 // ----------------------------------------------------------------------------------------------
 
 // ********************************** Event management *******************************
     /*
         The next few lines of code are responsible for mouse actions
     */    
      // Capture position of mouse
     var cursorX;
     var cursorY;
     var OnMouseObject = {
 
         hideDrop : function(e) {
             cursorX = e.pageX;
             cursorY = e.pageY;
 
             var cursorColumn = Math.round(cursorX / font_size); 
             cursorColumn = cursorColumn || 2;
     //        drops[cursorColumn].color = rainbowGenerator.getColor(columns/2);
             drops[cursorColumn].hide();
             drops[cursorColumn].hit = true;
 
         },
 
         changeLang: function() {
             LangManager.changeLang();
 
         }
 
     }    
 
     // Moving the mouse will hide the drops
     window.onmousemove = function(e){
         OnMouseObject.hideDrop(e);
     }
 
     // clicking will change the current letter set
     window.onmousedown = function(){
         OnMouseObject.changeLang();
     }
 
     /*
         Space action
     */
      // On space we want to change color
     var SpaceFunction = function(toggle) {
         randColorFunction(0, getRandomColor());
     }
 
     // Check
     var toggle = false;
     window.onkeydown = function(e){
         // If space
         if (e.keyCode == 0 || e.keyCode == 32){
             SpaceFunction(toggle);
             toggle = !toggle;
         }
     }
 
 // **************************************************************************************
         
        // Checks every 100 milliseconds whether all the drops have been 'hit'
         setInterval(function(){
             var allHit = true;
             drops[0].hit = true;
             drops[0].color = backgroundColor;
             //Check if all the drops have been hit
             for(var i = 0; i < drops.length; i++){
                 if(drops[i].hit === false){
                     allHit = false;
                 } 
             }
 
             if(allHit){
                 //Change speed
                 SpeedManager.resetSpeed();
                 // Set timer for color change
                 setTimeout(function(){
                     randColorFunction(0, ColorManager.currentColors()[0]);
                 }, (c.height * SpeedManager.speed) / 10);
 
                 // Toggle current color palette
                 ColorManager.toggle();
                 // reset hit to false
                 for(var i = 0; i < drops.length; i++){
                         (drops[i].hit = false)
                 }
 
             } 
 
          }, 100);
 
 
 
         function Drop() {
         this.y = 1000;
         this.hide = function() {
                  this.color = backgroundColor;
                  this.y = -10000;
                 };
 
         this.hit = false;
         this.language = LangManager.currentLang;
         this.setColor = function(col) {
             this.color = col;
             };
     }
     Drop.prototype.color = "#FFE373";
 
 
 
     for(var x = 0; x < columns; x++){
         drops[x] = new Drop();
 
     }
 
     /*
         Responsible for drawing the drops. Gets the latest letters from LangManager, generates a random letter for each drop
         Increments drops y position
     */
     function draw()
     {
         //Black BG for the canvas
         //translucent BG to show trail
         ctx.fillStyle = backgroundColor;
         ctx.fillRect(0, 0, c.width, c.height);
 
         ctx.fillStyle = "#0F0"; //green text
         ctx.font = font_size + "px console";
 
         var letters = LangManager.getLetters();
         //looping over drops
         for(var i = 0; i < drops.length; i++)
         {
             //a random chinese character to print
             var text = letters[Math.floor(Math.random()*letters.length)];
             //x = i*font_size, y = value of drops[i]*font_size
 
 
             //sending the drop back to the top randomly after it has crossed the screen
             //adding a randomness to the reset to make the drops scattered on the Y axis
             if(drops[i].y*font_size > c.height && Math.random() > 0.975)
                 drops[i].y = 0;
 
 
             drops[i].y++;
             ctx.fillStyle = drops[i].color;
             ctx.fillText(text, i*font_size, drops[i].y*font_size);
 
         }
     }
 
     setInterval(draw, defaultSpeed);
 
 }
 
 export default Rain;