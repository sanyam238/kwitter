const firebaseConfig = {
      apiKey: "AIzaSyDnltgReAF2Osn9lyM1731FmOHUJXcR5to",
      authDomain: "kwitter-d6b57.firebaseapp.com",
      databaseURL: "https://kwitter-d6b57-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6b57",
      storageBucket: "kwitter-d6b57.appspot.com",
      messagingSenderId: "670747397411",
      appId: "1:670747397411:web:7ac00e93cf8727961d9096"
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
     /*function logout(){

     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
      window.location.replace = "index.html";
}*/

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['username'];
message = message_data['message'];
likes = message_data['like'];
name_with_tag = "<h4>"+Name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes:"+ likes+"</span> </button> <hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;

function updateLike(message_id){
     console.log("clicked on the like button- "+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
});
}
//End code
      } });  }); }
getData();
