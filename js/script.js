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
    photo1: "img/.jpg",
    photo2: "img/.jpg",
    photo3: "img/.jpg"
  },
];

// All soaps

var id = 101; // Variable is used to generate id's for image
function allSoaps(){
  document.getElementById('soaps').innerHTML = " "; //to clear the container
for(var i = 0; i < soaps.length; i++) {
  document.getElementById('soaps').innerHTML
  += '</br><h1 class="jumbotron text-primary">' + soaps[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img id="D' + id.toString() + ' " class="img-thumbnail mt-5 myDogs" src="' + soaps[i].photo1 + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> <h5 class="text-primary" >Breed : ' + soaps[i].breed + '</h5>'
  + '</br>  <h5 class="text-primary" >Age : ' + soaps[i].age + '</h5>'
  + '</br>  <h5 class="text-primary" >Height :' + soaps[i].height + '</h5>'
  + '</div>'
  + '</div>';
  id++; // id is incremented automatically
}
}
