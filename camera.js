AFRAME.registerComponent("cam", {
    schema: {
      clickCounter :{type:"number" , default:0},
      y:{type:"number" , default : 1},
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp"){
            this.data.clickCounter =  this.data.clickCounter+1;
              if (this.data.clickCounter === this.data.y) {
                const position ={x:0,y:250+this.data.y,z:-2400}
                this.el.setAttribute("position", position);
                this.data.y+=1
              } 
          }
          if (e.key === "ArrowDown"){
            this.data.clickCounter =  this.data.clickCounter+1;
              if (this.data.clickCounter === this.data.y) {
                const position ={x:0,y:250-this.data.y,z:-2400}
                this.el.setAttribute("position", position);
                this.data.y+=1
              } 
          }
        }
      );
    }
  });