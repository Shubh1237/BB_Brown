// On clicking remove button the item should be removed from DOM as well as localstorage.
var bucketItems = JSON.parse(localStorage.getItem("Bag"));

var total = bucketItems.reduce(function(sum,el,index,arr){
    return sum + el.price;
},0)

document.querySelector("h3").innerText = `${total}`

bucketItems.map(function (el, index) {

    var box = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;
    img.style.width = "300px";
        img.style.height = "300px";

        let h = document.createElement("h3")
        h.innerText = el.name;
        h.setAttribute("id","name")
        
        let R = document.createElement("p")
        R.innerText = el.header;
        R.setAttribute("id","header")


        let D = document.createElement("p")
        D.innerText = el.desc;
        D.setAttribute("id","desc")

        let p = document.createElement("p")
        p.innerText = el.price;
        p.setAttribute("id","price")
        
    let btn = document.createElement("button")
    btn.innerText = "Remove"
    

    btn.addEventListener("click", function () {
        RemoveItems(el,index);
    })
    box.append(img, h, p, btn);
    document.querySelector("#bucket").append(box)
});
  

      function RemoveItems(el,index){
          console.log(el,index);
          bucketItems.splice(index,1);
          console.log(bucketItems)
          localStorage.setItem("Bag",JSON.stringify(bucketItems));
          window.location.reload();
      }

   
 
