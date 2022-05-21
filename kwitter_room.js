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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!";

function add_room()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "to add the room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_message_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room names -"+Room_names);
row = "<div class ='room_name' id="+Room_names+ " onclick ='RedirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
      });
 }
getData();

function RedirectToRoomName(Room_names) {
console.log(Room_names);
localStorage.setItem("Room_names",Room_names);
window.location = "kwitter_message_page.html";

}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}