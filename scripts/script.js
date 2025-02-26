let fishes = [];
const numFish = 20;

window.onload = function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  spear = document.getElementById("spear");
  cursor = document.querySelector("a-cursor");
  let fishCounter = document.getElementById("fish-count");
  fishCounter.innerHTML = 0

  new Spear(cursor);

  // Generate 20 fishes
  for (let i = 0; i < numFish; i++) {
    let fish = new Fish(scene, camera, cursor);
    fishes.push(fish);
  }

}

