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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "to add the room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_chat_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room names -"+Room_names);
row = "<div class ='room_name' id="+Room_names+ "onclick ='RedirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
      });
 }
getData();

function RedirectToRoomName(Room_names) {
console.log(Room_names);
localStorage.setItem("Room_names",Room_names);
window.location = "kwitter_chat_page.html";

}