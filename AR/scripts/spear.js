class Spear {
  constructor(cursor) {
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("id", "spear")
    this.obj.setAttribute("model-relative-opacity", true);
    this.obj.setAttribute("src", "#spear-model");
    this.obj.setAttribute("scale", "0.01 0.01 0.01");
    this.obj.setAttribute("position", "1 0 0");
    this.obj.setAttribute("rotation", "0 240 0")

    this.obj.setAttribute('animation__move', {
      property: 'position',
      to: "-2 -3 -8",
      startEvents: 'poke',
      dur: 700,
    });

    this.obj.setAttribute('animation__poke', {
      property: 'rotation',
      to: "20 220 150",
      dur: 200,
      startEvents: 'poke'
    });

    this.obj.setAttribute('animation__es', {
      property: 'model-relative-opacity.opacity',
      from: 1,
      to: 0,
      dur: 500,
      startEvents: 'poke'
    });

    cursor.appendChild(this.obj);
  }
}