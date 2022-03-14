AFRAME.registerComponent("island-rotation", {
    schema: {
      clickCounter :{type:"number" , default:0},
      x:{type:"number" , default : 1},
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft"){
          this.data.clickCounter =  this.data.clickCounter+1;
            if (this.data.clickCounter === this.data.x) {
              const rotation = { x:270, y: (this.data.x*1), z: 0 };
              this.el.setAttribute("rotation", rotation);
              this.data.x+=1
            } 
        }
        if (e.key === "ArrowRight"){
          this.data.clickCounter =  this.data.clickCounter+1;
            if (this.data.clickCounter === this.data.x) {
              const rotation = { x:270, y: (this.data.x*-1), z: 0 };
              this.el.setAttribute("rotation", rotation);
              this.data.x+=1
            } 
        }
        }
      );
    }
  });