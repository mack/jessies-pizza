window.onload = function() {
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    var img = new Image();
    img.src='pizza.jpg';
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 500, 378);
      add_toppings(2, ctx);
    }
};

function add_toppings(topping, ctx) {
  for (var i = 0; i < 20; i++) {
    var img = new Image();
    img.src='pepperoni.png';
    img.onload = addImg(img, ctx, i)
  }
}

function addImg(img, ctx, i) {
    console.log(200 * Math.cos((i + 1) * 2 * Math.PI / 20))
    console.log(200 * Math.sin((i + 1) * 2 * Math.PI / 20))
    ctx.drawImage(img, 200 * Math.cos((i + 1) * 2 * Math.PI / 20), 200 * Math.sin((i + 1) * 2 * Math.PI / 20), 25, 25)
    console.log('test')

}
