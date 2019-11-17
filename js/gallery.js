function mostrarGaleria(){
    // document.getElementById("divGallery").classList.remove("fadeIn");
    document.getElementById("divGallery").classList.add("fadeOut");
    document.getElementById("divGallery").classList.remove("fadeIn");
    document.getElementById("divGalleryDisplay").classList.remove("fadeOutLeft");
    
    setTimeout(function(){ 
        document.getElementById("divGallery").style.display = "none";
        document.getElementById("divGalleryDisplay").style.display = "block";
        document.getElementById("divGalleryDisplay").classList.add("fadeInLeft");
    }, 1000);
  
}

function mostrarMenu(){
    document.getElementById("divGalleryDisplay").classList.add("fadeOutLeft");
    document.getElementById("divGalleryDisplay").classList.remove("fadeInLeft");
    // document.getElementById("divGallery").classList.remove("fadeOut");

    setTimeout(function(){
        document.getElementById("divGalleryDisplay").style.display = "none";
        document.getElementById("divGallery").classList.remove("fadeOut");
        document.getElementById("divGallery").classList.add("fadeIn");
        document.getElementById("divGallery").style.display = "block";
    }, 1000);
}

$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
  });