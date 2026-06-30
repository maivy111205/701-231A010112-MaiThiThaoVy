
console.log("Website 701-231A010112-Mai Thị Thảo Vy đã được tải thành công!");



const products = [
{
    name:"Son Kem",
    price:"250.000đ",
    image:"images/son1.jpg"
},
{
    name:"Nước Hoa",
    price:"850.000đ",
    image:"images/perfume.jpg"
},
{
    name:"Kem Chống Nắng",
    price:"320.000đ",
    image:"images/sunscreen.jpg"
},
{
    name:"Sữa Rửa Mặt",
    price:"180.000đ",
    image:"images/facewash.jpg"
},
{
    name:"Kem Dưỡng Da",
    price:"450.000đ",
    image:"images/cream.jpg"
},
{
    name:"Phấn Phủ",
    price:"390.000đ",
    image:"images/powder.jpg"
},
{
    name:"Mascara",
    price:"220.000đ",
    image:"images/mascara.jpg"
},
{
    name:"Serum Vitamin C",
    price:"560.000đ",
    image:"images/serum.jpg"
}
];




function displayProducts(list){

    const productList=document.getElementById("product-list");

    if(!productList) return;

    productList.innerHTML="";

    if(list.length===0){

        productList.innerHTML=
        "<h2>❌ Không tìm thấy sản phẩm.</h2>";

        return;
    }

    list.forEach(item=>{

        productList.innerHTML+=`

        <div class="product">

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p>${item.price}</p>

        </div>

        `;

    });

}




function searchProduct(){

    const keyword=document
    .getElementById("search")
    .value
    .trim()
    .toLowerCase();

    const result=products.filter(product=>

        product.name.toLowerCase().includes(keyword)

    );

    displayProducts(result);

}





const form=document.getElementById("registerForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const agree=document.getElementById("agree").checked;

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if(name===""){

alert("Vui lòng nhập họ tên.");

return;

}

if(!emailRegex.test(email)){

alert("Email không hợp lệ.");

return;

}

if(!passRegex.test(password)){

alert("Mật khẩu phải có ít nhất 8 ký tự gồm chữ hoa, chữ thường và số.");

return;

}

if(!agree){

alert("Bạn phải đồng ý điều khoản.");

return;

}

const user={

name,

email,

password

};

localStorage.setItem("user",JSON.stringify(user));

alert("🎉 Đăng ký thành công!");

form.reset();

});

}




const timer=document.getElementById("timer");

if(timer){

let time=600;

const interval=setInterval(function(){

let minute=Math.floor(time/60);

let second=time%60;

minute=String(minute).padStart(2,"0");

second=String(second).padStart(2,"0");

timer.innerHTML=`${minute}:${second}`;

if(time<=60){

timer.classList.add("warning");

}

if(time===0){

clearInterval(interval);

alert("⏰ Hết thời gian!");

}

time--;

},1000);

}
