var file = null;

var uid = null;
var user = firebase.auth().currentUser;


firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// Usuário Logado
        uid = user.uid;
        
		console.log(user);
	} else {
	//window.location.replace("login.html");
		console.log(user);
	}
});

function uploadImage(){
    

    var file = document.getElementById("iptImage").files[0];
    var galleryRef =  firebase.storage().ref('users/' + uid + '/' + file.name);

	galleryRef.put(file).then(function(snapshot) {
	console.log('Uploaded a blob or file!');
	});
}