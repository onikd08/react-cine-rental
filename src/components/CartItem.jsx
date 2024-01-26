/* eslint-disable react/prop-types */
import getImageUrl from "../utils/getImageUrl";
import deleteIcon from "../assets/delete.svg";
import { useContext } from "react";
import { CartContext } from "../providers/CartContextProvider";
import { toast } from "react-toastify";

const CartItem = ({ movie }) => {
  const { title, cover, price, genre } = movie;
  const { dispatch } = useContext(CartContext);

  const handleRemoveCartItem = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    toast.success(`${item.title} has been removed successfully`);
  };
  return (
    <>
      <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <div className="flex items-center gap-4">
            <img
              className="rounded overflow-hidden w-1/4 h-32"
              src={getImageUrl(cover)}
              alt={title}
            />
            <div>
              <h3 className="text-base md:text-xl font-bold">{title}</h3>
              <p className="max-md:text-xs text-[#575A6E]">{genre}</p>
              <span className="max-md:text-xs">${price}</span>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <button
              onClick={() => handleRemoveCartItem(movie)}
              className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
            >
              <img className="w-5 h-5" src={deleteIcon} alt="" />
              <span className="max-md:hidden">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
