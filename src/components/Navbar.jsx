import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <div className="sticky top-0 z-30 w-full">
        <button className="btnprof">
          <img
            className="btnicon"
            alt="cart"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
        </button>
        <Link
              to={"/cart"} className="btnatc relative" >
          <img
            className="btnicon"
            alt="cart"
            src="https://icons-for-free.com/iconfiles/png/512/full+products+round+icon-1320165923168064523.png"
          />
          {cartItems.length > 0 ? (
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {cartItems.length}
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </>
  );
}

export default Navbar;
