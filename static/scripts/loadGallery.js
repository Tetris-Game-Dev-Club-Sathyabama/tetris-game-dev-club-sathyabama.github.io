let slideIndex = 1;


fetch('/data/gallery.json').then(resp => resp.json(), { cache: 'no-store' }).then(resp => {
    let slideparent = 0;
    let firstimage="";
    let firstcaption="";
    Object.keys(resp.gallery).forEach((v,i) => {
      if(i>3*slideparent-1||i==0)
      {
        if(i==0)
        {
          firstimage=resp.gallery[v].image;
          firstcaption=resp.gallery[v].caption;
        }
        slideparent++;
        document.getElementById('slideContainer').innerHTML +=`
        <div class="slides fade">
        <div class="galleryslide" id="slideParent${String(slideparent-1)}">
        </div>
        </div>
        `;
        document.getElementById('dotContainer').innerHTML+=`<span class="dot" onclick="currentSlide(${String(slideparent)})"></span>`

      }
        var slide=resp.gallery[v];
        console.log(i);
        document.getElementById('slideParent'+String(slideparent-1)).innerHTML +=`<img onclick="mainview(\'${slide.image}\',\'${slide.caption}\')" src="data/gallery_images/${slide.image}" style="width:100%; padding:10px" >`
    });
showSlides(slideIndex);
mainview(firstimage,firstcaption);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function mainview(imageName,imagecaption)
{
  // galleryimg
  document.getElementById("galleryimg").src="data/gallery_images/"+imageName;
  document.getElementById("galleryimgcaption").innerHTML=imagecaption;
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 