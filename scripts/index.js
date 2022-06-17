// Add the coffee to local storage with key "coffee"


let arr = JSON.parse(localStorage.getItem("Bag")) || []


var length = arr.length;
console.log(length);

document.querySelector("#count").innerText = ` ${length} `;






//const url = " https://masai-mock-api.herokuapp.com/coffee/menu"

const url = "https://application21.herokuapp.com/api/products"

async function getdata(){

    try{
        let res = await fetch(url);
        let data = await res.json()
        append(data)
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
}

getdata();

function append(data){
     const menu = document.getElementById("menu")
    data.forEach(function(el){
     
        let div = document.createElement("div");
        div.setAttribute("id","box1")
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
        btn.innerText = "Add To Bag"
       
        btn.style.cursor = "pointer";
        btn.setAttribute("id","bookbtn")

        btn.addEventListener("click",function(){
            addTobucket(el);
        })
           div.append(img,h,R,D,p,btn);
           menu.append(div);
    })
}
  
  function addTobucket(el){
      console.log(el)
      arr.push(el)

      localStorage.setItem("Bag",JSON.stringify(arr));
      window.location.reload()
  }