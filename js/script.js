console.log('formative project 2.2');

var soaps = [
  {
    name : "Chai",
    id : "S101",
    use : "Body",
    scent : "Cinnamon",
    price : 20,
    photo1: "img/chai.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg",
  },
  {
    name : "Petal",
    id : "S102",
    use : "Body",
    scent : "Rose",
    price : 22,
    photo1: "img/rose petal.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Blue Mountain",
    id : "S103",
    use : "Body",
    scent : "Lavender",
    price : 22,
    photo1: "img/mountain.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Rosie",
    id : "S104",
    use : "Skin",
    scent : "Rose",
    price : 26,
    photo1: "img/rosie.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Full Moon",
    id : "S105",
    use : "Hair",
    scent : "Spearmint",
    price : 30,
    photo1: "img/night-sky.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Honeybee",
    id : "S106",
    use : "Face",
    scent : "No scent",
    price : 30,
    photo1: "img/honeybee.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Sea Salt",
    id : "S107",
    use : "Face",
    scent : "Lavender",
    price : 26,
    photo1: "img/after sunset.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Milkshake",
    id : "S108",
    use : "Body",
    scent : "Vanilla",
    price : 36,
    photo1: "img/simple-is-best.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Coconut Dreams",
    id : "S109",
    use : "Hair",
    scent : "Ylang Ylang",
    price : 30,
    photo1: "img/crisp.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Tropical Beach",
    id : "S110",
    use : "Body",
    scent : "Citrus",
    price : 33,
    photo1: "img/citrus.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Birthday Cake",
    id : "S111",
    use : "Face",
    scent : "Vanilla",
    price : 26,
    photo1: "img/berry kisses.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Mint Bar",
    id : "S112",
    use : "Hair",
    scent : "Spearmint",
    price : 28,
    photo1: "img/mint-bar.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Oat Mylk",
    id : "S112",
    use : "Hair",
    scent : "No scent",
    price : 28,
    photo1: "img/mylk.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Lavender Dreams",
    id : "S112",
    use : "Body",
    scent : "Lavender",
    price : 28,
    photo1: "img/lavender-dreams.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Latte Art",
    id : "S112",
    use : "Hair",
    scent : "No scent",
    price : 28,
    photo1: "img/latte art.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Ginger",
    id : "S113",
    use : "Face",
    scent : "Ginger",
    price : 20,
    photo1: "img/ginger.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  }
];

console.log(soaps);

// Show all soaps

var id = 101; // Variable is used to generate id's for image


// Function that includes all soaps and their properties

function allSoaps(i){
  for(var i = 0; i < soaps.length; i++) {
  // id is incremented automatically
  displaySoaps(i);
}
}

function displaySoaps(j){
  document.getElementById('soaps').innerHTML
  += '<div class="row">'
  + '<div class="column">'
  + '<div class="content">'
  + '<div class="content-header">' + soaps[j].name + '</div>'
  + '</br> <img id="S' + id.toString() + ' " class="img-thumbnail mySoaps" src="' + soaps[j].photo1 + ' "  alt="Soap"/>'
  + '</div>'
  + '<div class="col">'
  + '</br>  <div class="content-text">Use: ' + soaps[j].use + '</div>'
  + '</br>  <div class="content-text">Scent: ' + soaps[j].scent + '</div>'
  + '</br>  <div class="content-text">Price: $' + soaps[j].price + '</div>'
  + '</div>'
  + '</div>'
  + '</div>'
  + '</div>';
  id++;
}
// ALL SOAPS WILL APPEAR HERE
allSoaps();


// Conditional display
// Display all products
document.getElementById('products').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container
  for(var i = 0; i < soaps.length; i++) {
      displaySoaps(i);
   }
});

// Face products

document.getElementById('face').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container
  for(var i = 0; i < soaps.length; i++) {
    if (soaps[i].use === "Face") {
      displaySoaps(i);
   }
  }
});

// Body products

document.getElementById('body').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container
  for(var i = 0; i < soaps.length; i++) {
    if (soaps[i].use === "Body") {
      displaySoaps(i);
   }
  }
});

// Hair products

document.getElementById('hair').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container
  for(var i = 0; i < soaps.length; i++) {
    if (soaps[i].use === "Hair") {
      displaySoaps(i);
   }
  }
});

// Display modal

$('.soaps').on('click', function(){
  $('.myModal').show();
  $('#hideContainer').hide();
  for (var i = 0; i < soaps.length ; i++) {
    //id property of soaps is checked for  equivalence with the image id of the clicked element
    if (this.id.trim() == soaps[i].id.trim()) {
      //remove leading and trailing space in the string while trying to match
      document.getElementById('modalContent').innerHTML
      += '<div class="jumbotrons ml-5 text-info"> ' + soaps[i].name + '</br>'
      + soaps[i].use + '</br>' + soaps[i].scent + '</br>'
      + 'Height : ' + soaps[i].price + '</br>' + 'Age :' + '</div>' + '<br>'
      + '<div id="carouselExampleIndicators" class="carousel slide myCarousel" data-ride="carousel">'
      +      '<ol class="carousel-indicators">'
      +         '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
      +         '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
      +         '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
      +      '</ol> <div class="carousel-inner"><div class="carousel-item active">'
      + '<img class="card-thumbnail  myDogs modalDog width="200" height="120" src="' + soaps[i].photo + '"  alt="Dog"/>'
      + '</div> <div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + soaps[i].photo1 + '"  alt="Soap"/>'
      + '</div><div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + soaps[i].photo2 + '"  alt="Soap"/>'
      + '</div> </div>'
      + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
      + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Previous</span> </a>'
      + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
      + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Next</span> </a></div>';
      + '</br>'
      }
    }
});

$('.closeBar').on('click', function(){
  $('.myModal').hide();
  $('#hideContainer').show();
});
