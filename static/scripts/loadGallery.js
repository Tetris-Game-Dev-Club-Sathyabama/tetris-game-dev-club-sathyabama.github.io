let slideIndex = 1;

fetch('/data/gallery.json').then(resp => resp.json(), { cache: 'no-store' }).then(resp => {
    Object.keys(resp.gallery).forEach((v,i) => {
        var slide=resp.gallery[v];
        console.log(slide.image);
        console.log(slide.caption);
        document.getElementById('galleryContainer').innerHTML +=`
        <div class="slides fade">
        <img src="data/gallery_images/`+slide.image+`" style="width:100%">
        <div class="caption-text">`+slide.caption+`</div>
      </div>
        `   
        document.getElementById('dotContainer').innerHTML+=`<span class="dot" onclick="currentSlide(`+(i+1)+`)"></span>`
    });
showSlides(slideIndex);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
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