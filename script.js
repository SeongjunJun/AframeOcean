let fishes = [];
let scene = null;
let ocean = null;
let fishCount = 0;
let fishCounter = null;
let rod = null;


window.onload = function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  ocean = document.querySelector("a-ocean");
  rod = document.getElementById("rod");
  fishCounter = document.getElementById("fish-count");
  fishCounter.innerHTML = fishCount;

  // Generate 20 fishes
  for (let i = 0; i < 20; i++) {
    let fish = new Fish(scene);
    fishes.push(fish);
  }

  window.addEventListener('click', function(event) {
    if (event.target === ocean) {
      console.log("ocean clicked");
      rod.setAttribute('position', { x: 1, y: -5, z: 0 });
      console.log(rod, "rod!!")
    }
  })

}

