console.log('formative project 2.2');

var soaps = [
  {
    name : "Chai",
    id : "S101",
    use : "Body",
    scent : "Cinnamon",
    price : 20,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg",
  },
  {
    name : "Mystery",
    id : "S102",
    use : "Body",
    scent : "Ylang Ylang",
    price : 22,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Mountain",
    id : "S103",
    use : "Body",
    scent : "Lavender",
    price : 22,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Rosie",
    id : "S104",
    use : "Skin",
    scent : "Citrus",
    price : 26,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Full Moon",
    id : "S105",
    use : "Hair",
    scent : "Spearmint",
    price : 30,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "White Tea",
    id : "S106",
    use : "Face",
    scent : "No scent",
    price : 30,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Sea Salt",
    id : "S107",
    use : "Face",
    scent : "Lavender",
    price : 26,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Milkshake",
    id : "S108",
    use : "Body",
    scent : "Vanilla",
    price : 36,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Coconut Dreams",
    id : "S109",
    use : "Hair",
    scent : "Ylang Ylang",
    price : 30,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Beach",
    id : "S110",
    use : "Body",
    scent : "Citrus",
    price : 33,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Birthday Cake",
    id : "S111",
    use : "Face",
    scent : "Vanilla",
    price : 26,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Mint Bar",
    id : "S112",
    use : "Hair",
    scent : "Spearmint",
    price : 28,
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
  {
    name : "Mylk",
    id : "S112",
    use : "Hair",
    scent : "No scent",
    price : 28,
    photo1: "img/mylk.jpg",
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


// Show all soaps

var id = 101; // Variable is used to generate id's for image

function allSoaps(){
  document.getElementById('soaps').innerHTML = " "; //to clear the container
for(var i = 0; i < soaps.length; i++) {
  document.getElementById('soaps').innerHTML
  += '</br><h1 class="jumbotron text-primary">' + soaps[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img id="S' + id.toString() + ' " class="img-thumbnail mt-5 mySoaps" src="' + soaps[i].photo1 + ' "  alt="Soap"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> <h5 class="text-primary" >Use : ' + soaps[i].use + '</h5>'
  + '</br>  <h5 class="text-primary" >Scent : ' + soaps[i].scent + '</h5>'
  + '</br>  <h5 class="text-primary" >Price : ' + soaps[i].price + '</h5>'
  + '</div>'
  + '</div>';
  id++; // id is incremented automatically
}
}

//conditional display
//beagle
document.getElementById('summer').addEventListener('click', function(){
  console.log(soaps);
  document.getElementById('soaps').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (soaps[i].scent === "Citrus") {
      document.getElementById('soaps').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + soaps[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 mySoaps" src="' + soaps[i].photo1 + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br> Breed : <h5 class="text-danger" >' + soaps[i].use + '</h5>'
      + '</br> Age : <h5 class="text-danger" > ' + soaps[i].scent + '</h5>'
      + '</br> Height : <h5 class="text-danger" >' + soaps[i].price + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});
