const fishTypes = [["#fish1", [5, 5, 5]], ["#fish2", [3, 3, 3]], ["#fish3", [0.3, 0.3, 0.3]]];
let fishCount = 0;

class Fish {
  constructor(scene, camera, cursor) {
    let position = this.getFishPosition();
    let fishType = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    let fishCounter = document.getElementById("fish-count");

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("model-relative-opacity", true);
    this.obj.setAttribute('gltf-model', fishType[0]);
    this.obj.setAttribute("animation-mixer", true);
    this.obj.setAttribute("scale", { x: fishType[1][0], y: fishType[1][1], z: fishType[1][2] });
    this.obj.setAttribute("position", { x: position[0], y: position[1], z: position[2] });

    this.obj.setAttribute('animation__rise', {
      property: 'position',
      to: `${position[0]} ${4} ${position[2]}`,
      startEvents: 'poke',
      dur: 2000,
      easing: 'linear'
    });

    this.obj.setAttribute('animation__fade', {
      property: 'model-relative-opacity.opacity',
      from: 1,
      to: 0,
      dur: 1500,
      startEvents: 'poke'
    });

    this.obj.addEventListener("click", () => {
      if (this.calculateFishDistance(camera, this.obj) <= 10) {
        let spear = document.getElementById("spear");
        if (typeof spear !== 'undefined') {
          spear.emit('poke', null, false);
          fishCount += 1;

          setTimeout(() => {
            this.obj.emit('poke', null, false);
          }, 500);

          setTimeout(() => {
            fishCounter.innerHTML = fishCount;
          }, 3000);

          setTimeout(() => {
            cursor.removeChild(spear);
            let newSpear = new Spear(cursor);
          }, 3000)
        }
      }
      else {
        let message = document.getElementById('error');
        message.style.display = 'block';
        setTimeout(function() {
          message.style.display = 'none';
        }, 1700);
      }
    })

    scene.appendChild(this.obj);
  }

  getFishPosition() {
    let x, y, z;
    do {
      x = Math.floor(Math.random() * 36) - 20;
      y = Math.floor(Math.random() * 2) - 1;
      z = Math.floor(Math.random() * 36) - 20;
    } while (x >= -10 && x <= 10 && z >= -10 && z <= 10);
    return [x, y, z];
  }

  calculateFishDistance(camera, fish) {
    let cameraPos = camera.object3D.position
    let fishPos = fish.object3D.position
    let distance = cameraPos.distanceTo(fishPos)
    return distance
  }
}

