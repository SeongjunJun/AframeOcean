const fishTypes = [["fish1.glb", [5, 5, 5]], ["fish2.glb", [3, 3, 3]], ["fish3.glb", [0.3, 0.3, 0.3]]];

class Fish {
  constructor(scene) {
    let position = this.getFishPosition();
    let fishType = fishTypes[Math.floor(Math.random() * fishTypes.length)];

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", fishType[0]);
    this.obj.setAttribute("animation-mixer", true);
    this.obj.setAttribute("scale", { x: fishType[1][0], y: fishType[1][1], z: fishType[1][2] });
    this.obj.setAttribute("position", { x: position[0], y: position[1], z: position[2] });
    scene.appendChild(this.obj);
  }

  getFishPosition() {
    let x, y, z;
    do {
      x = Math.floor(Math.random() * 41) - 20;
      y = Math.floor(Math.random() * 2) - 1;
      z = Math.floor(Math.random() * 41) - 20;
    } while (x >= -10 && x <= 10 && z >= -10 && z <= 10);
    return [x, y, z];
  }
}

