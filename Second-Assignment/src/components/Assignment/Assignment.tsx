import React from "react";

type ProductsType={
    name:string;
    price:number;
    status:boolean;
    image: string;
}
let products:ProductsType[] = [

  {
    name: "Mobile",
    price: 60000,
    status: true,
    image: "images/products/camera.jfif",
  },
  {
    name: "LED",
    price: 50000,
    status: true,
    image: "images/products/camera.jfif",
  },
  {
    name: "Apple Iphone",
    price: 90000,
    status: false,
    image: "images/products/camera.jfif",
  },
];

// ...................................................QUESTION 01........................................

const sort = [...products].sort((a, b) => a.price - b.price);
console.log(sort);

// ...................................................QUESTION 02........................................

const greaterPrice = products
  .filter((e) => e.price > 45000)
  .sort((a, b) => b.price - a.price);
console.log(greaterPrice);

// ...................................................QUESTION 03........................................

const increasedPrice = products.map((e:ProductsType):ProductsType => {
  return {
    ...e,
    price: Math.round(e.price * 1.1),
  };
});
console.log(increasedPrice);

// ...................................................QUESTION 04........................................

const productStartsWithA = products.filter(
  (e) => e.name[0] === "A" || e.name[0] === "a"
);
console.log(productStartsWithA);

// ...................................................QUESTION 05........................................

const expensiveProducts = [...products]
  .sort((a, b) => b.price - a.price)
  .slice(0, 2);
console.log(expensiveProducts);

// ...................................................QUESTION 06........................................

type Label=ProductsType &{
    label:string
}
let total = products.reduce((sum:number, item:ProductsType) => sum + item.price, 0);
let average = total / products.length;
let showProducts:Label[] = products.map((e) => {
  let label = e.price > average ? "Above Average" : "Below Average";
  return {
    ...e,
    label: label,
  };
});

showProducts.forEach((e) => {
  console.log(`${e.name} ${e.price} ${e.label}`);
  e.name;
});
