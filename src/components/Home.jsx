import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart } from "../features/cartSlice";

function Home() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const data = [
    {
      id:1,
      Name: "Chocolate",

      src: "https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg",
      Price: "599",
    },
    {
      id:2,
      Name: "Vanila",

      src: "https://afairytaleflavor.com/wp-content/uploads/2021/01/DSC04487-scaled.jpg",
      Price: "699",
    },
    {
      id:3,
      Name: "Pineapple",

      src: "http://www.cakegift.in/sites/default/files/Pineapple%20Birthday%20Cake.jpg",
      Price: "799",
    },
    {
      id:4,
      Name: "Red velvet",

      src: "https://www.doughandcream.com/wp-content/uploads/2023/01/RedVelvetCake_1200x.jpeg",
      Price: "999",
    },
  ];
  const backery = [
    {
      Name: "Products",
      src: "https://cdn-icons-png.flaticon.com/512/2915/2915870.png",
      brief: "Our cake products are indentification of our backery.",
    },
    {
      Name: "Cake Class",

      src: "https://cdn-icons-png.flaticon.com/512/2015/2015969.png",
      brief: "Our taste shows the class of our Cake.",
    },
    {
      Name: "Recipes",

      src: "https://cdn-icons-png.flaticon.com/512/8338/8338144.png",
      brief: "Visit us you have not test these recipes yet.",
    },
  ];

  return (
    <>
      <div className="bg-yellow-100 divbg">
        <Navbar />
        <div style={{ paddingTop: "50px" }}>
          <div className="products grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 justify-center bg-yellow-50">
            {backery.map((back) => {
              return (
                <>
                  <div
                    href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                  >
                    <img class="productimg " src={back.src} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {back.Name}
                      </h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {back.brief}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-sans text-center pheader">
              NEW PRODUCTS
            </h1>
            <div className="container mx-auto ">
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center "
                style={{ width: "90%", margin: "auto" }}
              >
                {data.map((element) => {
                  return (
                    <div className="flex justify-center  rounded-xl p-6 bg-gray-100">
                      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img
                          class="p-8 rounded-t-lg"
                          src={element.src}
                          alt={element.Name}
                          style={{ width: "250px", height: "250px" }}
                        />

                        <div class="px-5 pb-5">
                          <h5 class="text-3xl font-bold text-gray-900 dark:text-white">
                            {element.Name}
                          </h5>

                          <div class="flex items-center justify-between">
                            <span class="text-xl  tracking-tight text-gray-900 dark:text-white">
                              {element.Price}Rs
                            </span>
                            <button
                              onClick={() => dispatch(addToCart(element))}
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
