 
var txt;
               var r = confirm("Welcome to the website!");
               console.log(r);
               if (r == true) {
               txt = "You pressed Ok!";
               } else {txt = "You pressed Cancel!";}
               
           
        
        
                 var person = prompt("Please enter your name", "");
                 console.log(person);
                 alert(person);
                 document.write (person);
                 function myFunction() {
                 var hour = new Date().getHours(); 
                 var greeting;
                 if (hour < 18) {greeting = "Good day";} else {greeting = "Good evening";}
                 document.getElementById("1").innerHTML = greeting;}
                 
                 var order = prompt("what do you want to order, Auto parts or Auto accessories?")
                 while(order !== "auto parts" && order !== "auto accessories")
                 {
                     order = prompt(" what do you want to order, Auto parts or Auto accessories?s ")
                 }

                 var itemOrder="";
                 if (order == "auto parts")
                  {
                      itemOrder = "<img src= 'https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?k=6&m=1034249292&s=612x612&w=0&h=mkT247JTsOYyiKv315d1ObCp-dqhrmraZiS14naOKD0=' />"

                      

                 }
                 else if (order == "auto accessories")
                 {
                    itemOrder = "<img src= 'https://images-na.ssl-images-amazon.com/images/I/61Co%2BwD4NnL._SL1024_.jpg' />"

                 

                 }
                 var numOfOrders = prompt ("How many items you want to order?");
                 var result = "";
                 for (var i=0; i<numOfOrders; i++)
                 {
                     result= result + itemOrder;
                     console.log(i)

                     document.write (itemOrder);
                 }
                