
      
      function changeWords() {
        document.getElementById("changer").innerHTML = "The cat is the best animal ever!"
        document.getElementById("changer").style.backgroundColor = "grey";
        document.getElementById("changer").style.color = "purple";
        document.getElementById("changer").style.fontSize = "20px";
      }
      
      function dateFunction() {
          document.getElementById("showdate").innerHTML = Date();    
      }
      
      var x = document.getElementById("demo");
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
       }

      function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
      }  
      
      function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
          case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
          case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
          case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
        }
      }
      
      function lamp(n) {
        var pic;
        if (n == 0) {
          pic = "Images/halloweencatoff.png"
        } else {
          pic = "Images/halloweencaton.png"
        }
        document.getElementById("halloweenlamp").src = pic;
      }

      function showCode() {
        document.getElementById("catcode").innerHTML = "2 cats!";
      }

      window.onload = function() {
      var x = document.getElementById("catcanvas");
      var y = x.getContext("2d");
      y.beginPath();
      y.arc(100, 80, 60, 0, 2 * Math.PI);
      y.stroke();
      y.font = "20px Arial";
      y.fillText("Cats", 150, 170);
      y.strokeText("Rock", 200, 170);
      var img = document.getElementById("cicon");
      y.drawImage(img, 10, 10);
      y.drawImage(img, 280, 180);
      y.drawImage(img, 10, 180);
      y.drawImage(img, 280, 10);
      var grd = y.createRadialGradient(75, 50, 5, 90, 60, 100);
      grd.addColorStop(0, "purple");
      grd.addColorStop(1, "white");
      y.fillStyle = grd;
      y.fillRect(50, 50, 100, 65);
      }  
      
      function tailFunction() {
        alert("You pulled the kitty's tail!");
      }
      
      function delFunction() {
        var x = document.getElementsByClassName("food");
        for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
      }     
      
      function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text"); 
        ev.target.appendChild(document.getElementById(data));
      }   
      
     
        