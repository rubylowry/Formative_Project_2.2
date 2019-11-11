console.log('formative project 2.2');

var soaps = [
  {
    name : "Chai",
    id : 101,
    use : "Body",
    scent : "Cinnamon",
    price : 20,
    photo1: "img/chai.jpg",
    photo2: "img/chai.jpg",
    photo3: "img/chai.jpg",
  },
  {
    name : "Petal",
    id : 102,
    use : "Body",
    scent : "Rose",
    price : 22,
    photo1: "img/rose petal.jpg",
    photo2: "img/dried petals.jpg",
    photo3: "img/olibanum oil.jpg"
  },
  {
    name : "Blue Mountain",
    id : 103,
    use : "Body",
    scent : "Lavender",
    price : 22,
    photo1: "img/mountain.jpg",
    photo2: "img/mountain.jpg",
    photo3: "img/mountain.jpg"
  },
  {
    name : "Rosie",
    id : 104,
    use : "Skin",
    scent : "Rose",
    price : 26,
    photo1: "img/rosie.jpg",
    photo2: "img/rosie.jpg",
    photo3: "img/rosie.jpg"
  },
  {
    name : "Moon River",
    id : 105,
    use : "Hair",
    scent : "Spearmint",
    price : 30,
    photo1: "img/night-sky.jpg",
    photo2: "img/night-sky.jpg",
    photo3: "img/night-sky.jpg"
  },
  {
    name : "Honeybee",
    id : 106,
    use : "Face",
    scent : "No scent",
    price : 30,
    photo1: "img/honeybee.jpg",
    photo2: "img/honeybee.jpg",
    photo3: "img/honeybee.jpg"
  },
  {
    name : "Sea Salt",
    id : 107,
    use : "Face",
    scent : "Lavender",
    price : 26,
    photo1: "img/after sunset.jpg",
    photo2: "img/after sunset.jpg",
    photo3: "img/after sunset.jpg"
  },
  {
    name : "Milkshake",
    id : 108,
    use : "Body",
    scent : "Vanilla",
    price : 36,
    photo1: "img/simple-is-best.jpg",
    photo2: "img/simple-is-best.jpg",
    photo3: "img/simple-is-best.jpg"
  },
  {
    name : "Coconut Dreams",
    id : 109,
    use : "Hair",
    scent : "Ylang Ylang",
    price : 30,
    photo1: "img/crisp.jpg",
    photo2: "img/crisp.jpg",
    photo3: "img/crisp.jpg"
  },
  {
    name : "Tropical Beach",
    id : 110,
    use : "Body",
    scent : "Citrus",
    price : 33,
    photo1: "img/citrus.jpg",
    photo2: "img/citrus.jpg",
    photo3: "img/citrus.jpg"
  },
  {
    name : "Birthday Cake",
    id : 111,
    use : "Face",
    scent : "Vanilla",
    price : 26,
    photo1: "img/berry kisses.jpg",
    photo2: "img/berry kisses.jpg",
    photo3: "img/berry kisses.jpg"
  },
  {
    name : "Mint Bar",
    id : 112,
    use : "Hair",
    scent : "Spearmint",
    price : 28,
    photo1: "img/mint-bar.jpg",
    photo2: "img/mint-bar.jpg",
    photo3: "img/mint-bar.jpg"
  },
  {
    name : "Oat Mylk",
    id : 113,
    use : "Hair",
    scent : "No scent",
    price : 28,
    photo1: "img/oatmeal.jpg",
    photo2: "img/oatmeal-1.jpg",
    photo3: "img/oatmeal-2.jpg"
  },
  {
    name : "Lavender Dreams",
    id : 114,
    use : "Body",
    scent : "Lavender",
    price : 28,
    photo1: "img/lavender-dreams.jpg",
    photo2: "img/lavender-dreams.jpg",
    photo3: "img/lavender-dreams.jpg"
  },
  {
    name : "Candy Floss",
    id : 115,
    use : "Hair",
    scent : "No scent",
    price : 28,
    photo1: "img/candyfloss.jpg",
    photo2: "img/candyfloss-1.jpg",
    photo3: "img/candyfloss-2.jpg"
  },
  {
    name : "Breakfast Bar",
    id : 116,
    use : "Body",
    scent : "Citrus",
    price : 28,
    photo1: "img/breakfast-bar.jpg",
    photo2: "img/breakfast-bar-1.jpg",
    photo3: "img/breakfast-bar-2.jpg"
  },
  {
    name : "Ginger",
    id : 117,
    use : "Face",
    scent : "Ginger",
    price : 20,
    photo1: "img/ginger.jpg",
    photo2: "img/ginger.jpg",
    photo3: "img/ginger.jpg"
  },
  {
    name : "Tiramisu",
    id : 118,
    use : "Face",
    scent : "Vanilla",
    price : 20,
    photo1: "img/tiramisu.jpg",
    photo2: "img/tiramisu-1.jpg",
    photo3: "img/tiramisu-2.jpg"
  }
];

console.log(soaps);




// Show all soaps

// var id = 101; // Variable is used to generate id's for image

// ALL SOAPS WILL APPEAR HERE
allSoaps();

// Function that includes all soaps and their properties

function allSoaps(i){
  for(var i = 0; i < soaps.length; i++) {
  // id is incremented automatically
  displaySoaps(i);
}
}

function displaySoaps(j){
  document.getElementById('soaps').innerHTML
  += '<div class="content">'
  + '<img id="' + soaps[j].id + ' " class="img-thumbnail mySoaps" src="' + soaps[j].photo1 + ' "  alt="Soap"/>'
  + '</div>';
}


// Conditional display
// Display all products
document.getElementById('products').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container
  for(var i = 0; i < soaps.length; i++) {
      displaySoaps(i);

   }
   homeModal();
});

// Face products

document.getElementById('face').addEventListener('click', function(){
  document.getElementById('face').scrollIntoView();
  document.getElementById('soaps').innerHTML = " "; //to clear the container

  var propId= 101;
  var i;
  for(var i = 0; i < soaps.length; i++) {
    if (soaps[i].use === "Face") {
      displaySoaps(i);

    //onclick function
    $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].use.toLowerCase() === 'face' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Body products

document.getElementById('body').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container

  var propId= 101;
  var i;
  for(var i = 0; i < soaps.length; i++) {
    if (soaps[i].use === "Body") {
      displaySoaps(i);




    //onclick function
    $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].use.toLowerCase() === 'body' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Hair products

document.getElementById('hair').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container

  var propId= 101;
  var i;
  for(var i = 0; i < soaps.length; i++) {
    if (soaps[i].use === "Hair") {
      displaySoaps(i);




    //onclick function
    $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].use.toLowerCase() === 'hair' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: Rose

document.getElementById('rose-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'rose'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'rose' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: CINNAMON
document.getElementById('cinnamon-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
  // for(var i = 0; i < soaps.length; i++) {
  //   if (soaps[i].scent === "Citrus") {
  //     displaySoaps(i);
var propId= 101;
var i;
          for ( i = 0; i < soaps.length ; i++) {
            if (soaps[i].scent.toLowerCase() === 'cinnamon'){
              //display function
              document.getElementById('soaps').innerHTML
              displaySoaps(i);
              //onclick function
              $('.mySoaps').on('click', function(){
                // $('.overlay').hide();
                // $('.mySoaps').on('click', function(){
                  $('.overlay').show();
                  $('#hideContainer').hide();
                console.log(this.id);
                //reusable code ---  make it a function passing parameter
              for ( i = 0; i < soaps.length ; i++) {
              if (soaps[i].scent.toLowerCase() === 'cinnamon' && parseInt(this.id) === soaps[i].id){
              //remove leading and trailing space in the string while trying to match
              modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: CITRUS
document.getElementById('citrus-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
  // for(var i = 0; i < soaps.length; i++) {
  //   if (soaps[i].scent === "Citrus") {
  //     displaySoaps(i);
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'citrus'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'citrus' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: LAVENDER

document.getElementById('lavender-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'lavender'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'lavender' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: Vanilla

document.getElementById('vanilla-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'vanilla'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'vanilla' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: Spearmint

document.getElementById('spearmint-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'spearmint'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'spearmint' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});


// Scent: Ginger

document.getElementById('ginger-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'ginger'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'ginger' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: Ylang Ylang

document.getElementById('ylang-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'ylang ylang'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'ylang ylang' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});

// Scent: No Scent

document.getElementById('no-scent').addEventListener('click', function(){
document.getElementById('soaps').innerHTML = " "; //to clear the container
var propId= 101;
var i;
for ( i = 0; i < soaps.length ; i++) {
  if (soaps[i].scent.toLowerCase() === 'no scent'){
    //display function
    document.getElementById('soaps').innerHTML
    displaySoaps(i);
    //onclick function
    $('.mySoaps').on('click', function(){
      // $('.overlay').hide();
      // $('.mySoaps').on('click', function(){
        $('.overlay').show();
        $('#hideContainer').hide();
      console.log(this.id);
      //reusable code ---  make it a function passing parameter
    for ( i = 0; i < soaps.length ; i++) {
    if (soaps[i].scent.toLowerCase() === 'no scent' && parseInt(this.id) === soaps[i].id){
    //remove leading and trailing space in the string while trying to match
    modalInfo(i);
            }
          }
       });
  propId++;
    }
  }
});




// Modal information

function modalInfo(i){
  document.getElementById('modalContent').innerHTML = '<div class="myJumbo"> '
  + '<div class="soapName">'
  + soaps[i].name + '</div>'
  + '</br>For: ' + soaps[i].use
  + '</br>Scent: ' + soaps[i].scent
  + '</br>' + 'Price: $' + soaps[i].price
  + '</div>'
  + '<div id="carouselExampleIndicators" class="carousel slide myCarousel" data-ride="carousel">'
  +      '<ol class="carousel-indicators">'
  +         '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
  +         '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
  +         '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
  +      '</ol> <div class="carousel-inner"><div class="carousel-item active">'
  + '<img class="card-thumbnail  mySoaps modalSoap" src="' + soaps[i].photo1 + '"  alt="Soap"/>'
  + '</div> <div class="carousel-item">'
  + '<img class="card-thumbnail  mySoaps modalSoap" src="' + soaps[i].photo2 + '"  alt="Soap"/>'
  + '</div><div class="carousel-item">'
  + '<img class="card-thumbnail  mySoaps modalSoap" src="' + soaps[i].photo3 + '"  alt="Soap"/>'
  + '</div> </div>'
  + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
  + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
  + '<span class="sr-only">Previous</span> </a>'
  + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
  + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
  + '<span class="sr-only">Next</span> </a></div>';
}


homeModal();

// Displays modals on homepage

function homeModal(){
$('.overlay').hide();
$('.mySoaps').on('click', function(){
  $('.overlay').show();
  $('#hideContainer').hide();
  for (var i = 0; i < soaps.length ; i++) {
    //id property of soaps is checked for  equivalence with the image id of the clicked element
    // if (this.id.trim() == soaps[i].id.trim()) {
    if (this.id == soaps[i].id) {
      //remove leading and trailing space in the string while trying to match
      modalInfo(i);
      }
    }
  });
}

// Display modal with USE property
function showModal(data){
$('.overlay').hide();
$('.mySoaps').on('click', function(){
  $('.overlay').show();
  $('#hideContainer').hide();
  for (var i = 0; i < soaps.length ; i++) {
    //id property of soaps is checked for  equivalence with the image id of the clicked element
    // if (this.id.trim() == soaps[i].id.trim()) {
    console.log(data,soaps[i].scent);
    if (soaps[i].scent.toLowerCase() === data.toLowerCase()){
      //remove leading and trailing space in the string while trying to match
      modalInfo(i);
    }
  }
  });
}




$('.closeBar').on('click', function(){
  $('.overlay').hide();
  $('#hideContainer').show();
});


$('.overlay').on('click', function(e) {
  if (e.target !== this) {
    return;
  }
  $('.overlay').hide();
});

// Hover to change color of call to action button

$(document).ready(function(){
  $("#products").hover(function(){
    $(this).css("background-color", "#F5F5F5");
    }, function(){
    $(this).css("background-color", "");
  });
});

$(document).ready(function(){
  $("#products").hover(function(){
    $(this).css("color", "#404040");
    }, function(){
    $(this).css("color", "");
  });
});
