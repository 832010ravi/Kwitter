var firebaseConfig = {
      apiKey: "AIzaSyBzHkw5RXASMijDubDRezFZg0d2z-uO1oU",
      authDomain: "kwitter-social-website-6bf8c.firebaseapp.com",
      databaseURL: "https://kwitter-social-website-6bf8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-website-6bf8c",
      storageBucket: "kwitter-social-website-6bf8c.appspot.com",
      messagingSenderId: "614807718996",
      appId: "1:614807718996:web:714ceab9872963614d31c1",
      measurementId: "G-YFEB8M67LB"
    };
    
    
  firebase.initializeApp(firebaseConfig);
       
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }