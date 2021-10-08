
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDul_eIYM94A1_jc-yUbSqNXwpUkYnerv0",
      authDomain: "kwitter-b0b37.firebaseapp.com",
      databaseURL: "https://kwitter-b0b37-default-rtdb.firebaseio.com",
      projectId: "kwitter-b0b37",
      storageBucket: "kwitter-b0b37.appspot.com",
      messagingSenderId: "535885862228",
      appId: "1:535885862228:web:74b19856c653c0ec3924c1"
    };
    
    
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
//End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}