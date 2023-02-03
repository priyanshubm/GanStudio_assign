import Navbar from "./Navbar";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-yellow-100 divbg ">
        <Navbar />
        <div style={{ paddingTop: "50px" }} className="h-full">
          <div>
            <div className="mt-4 mx-auto w-[90%]">
              {" "}
              <Link
                to={"/"}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Back
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-sans text-center pheader">
              Products in Cart
            </h1>
            <div className="container mx-auto ">
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center "
                style={{ width: "90%", margin: "auto" }}
              >
                {cartItems.map((element) => {
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
                              onClick={() => dispatch(removeFromCart(element))}
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Remove
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
export default Cart;
