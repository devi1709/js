const menu=[
    {
        id:1,
        title:"Idly",
        category:"breakfast",
        price:0.48,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03hQXsm-jgFRIjUkgDR88xfUmpE1pLxOCNg&s",
    },
    {
        id:2,
        title:"Dosa",
        category:"breakfast",
        price:0.54,
         img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqOSy6ejD58tHQvCxAweTCSG6HIFaMewrHQ&s",
    },
    {
        id:3,
        title:"pongal",
        category:"breakfast",
        price:0.66,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRj_VZBUMtX88ArREQl63kvXRLBam5SHE-w&s",
    },
    {
        id:4,
        title:"poori",
        category:"breakfast",
        price:0.66,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDxHfg7eUhVwINriSNSI8uAVb7bL2X9nFeQ&s",
    },
    {
       id:5,
       title:"udapam",
       category:"breakfast",
       price:0.54,
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZULhoFQFhIhG1RzA0LXfLjMulrmpPUumDg&s",
    },
    {
        id:6,
        title:"coconut rice",
        category:"lunch",
        price:0.62,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26OUTjPKvaxX4M6kN0F4K-cV7RyJJPPRPWg&s",
    },
    {
        id:7,
        title:"Tomato rice",
        category:"lunch",
        price:0.67,
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7s7a2cerm9SnNpHI62rE_OcRfwAavQEMBg&s",
    },
    {
        id:8,
        title:"Sambar rice",
        category:"lunch",
        price:0.89,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIncwi_i1Up4nB-P88DJrnMHlm6f20ym6GQ&s",
    },
    {
        id:9,
        title:"Idly ",
        category:"dinner",
        price:0.48,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NUqxfirlp9efppUl2StfjkvidY-3zb-PSA&s",
    },
    {
        id:10,
        title:"Dosa",
        category:"dinner",
        price:0.54,
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqOSy6ejD58tHQvCxAweTCSG6HIFaMewrHQ&s",
    },
    {
       id:11,
       title:"udapam",
       category:"dinner",
       price:0.54,
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZULhoFQFhIhG1RzA0LXfLjMulrmpPUumDg&s",
    },
     {
        id:12,
        title:"poori",
        category:"dinner",
        price:0.66,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDxHfg7eUhVwINriSNSI8uAVb7bL2X9nFeQ&s",
    },
];
const navToggle=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");

navToggle.addEventListener("click",function(){
         linksContainer.classList.toggle("show-links");
    // const linksHeight=links.getBoundingClientRect().height;
    // const containerHeight=linkscontainer.getBoundingClientRect().height;   
    // if(containerHeight===0){
    //        linkscontainer.style.height=`${linksHeight}`;
    // }
    // else{
    //     linkscontainer.style.height=0;
    // }
});
const navBar=document.getElementById("nav");
const toplink=document.querySelector(".top-link");
  window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=navBar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navBar.classList.add("fixed-nav");
    }
    else{
        navBar.classList.remove("fixed-nav");
    }
    if(scrollHeight>500){
        toplink.classList.add("show-link");
    }
    else{
        toplink.classList.remove("show-link");
    }
 });

const itemcard=document.querySelector(".section-center");
const btncontainer=document.querySelector(".btn-container");
const filterBtns=btncontainer.querySelectorAll(".filter-btn");
window.addEventListener("DOMContentLoaded",function(){
      displayMenuItems(menu);
 });
function displayMenuItems(menuItems){
   let displayMenu=menuItems.map(function(item){
        return  `<article class="menu-item">
                 <img src=${item.img} alt="${item.title}" class="photo"/>
                 <h4 id="name">${item.title}</h4>
                 <h4 id="price"> $${item.price}</h4>
                 </article>`
    });
    displayMenu=displayMenu.join("");
    itemcard.innerHTML=displayMenu;
}
filterBtns.forEach(function(btn){
   btn.addEventListener("click",function(e){
    const category=e.currentTarget.dataset.id;
    const menuCategory=menu.filter(function(menuitem){
            if(menuitem.category===category){
                  return menuitem;
             }
            });
            if(category==="all"){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory);
            }
        });
    });
console.log(filterBtns);
