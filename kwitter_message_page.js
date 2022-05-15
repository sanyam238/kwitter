const firebaseConfig = {
      apiKey: "AIzaSyDpijxc9pyt90lJD-YythpGO_kvpekz2bE",
      authDomain: "kwitter-cda8e.firebaseapp.com",
      databaseURL: "https://kwitter-cda8e-default-rtdb.firebaseio.com",
      projectId: "kwitter-cda8e",
      storageBucket: "kwitter-cda8e.appspot.com",
      messagingSenderId: "669166720119",
      appId: "1:669166720119:web:890268954a8ee38e026272"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
console.log(msg);
firebase.database().ref(room_name).push({
username:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";

     }
     function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
