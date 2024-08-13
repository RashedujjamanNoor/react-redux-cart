import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItem);
  const [data, setData] = useState();

  const cartDataFetch = async (cartData) => {
    await setData(cartData);
  };
  useEffect(() => {
    cartDataFetch(cartData);
  }, [cartData]);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="mx-[2%] md:mx-[10%]">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <div className="bg-slate-100 flex justify-between items-center px-3 my-3 rounded-lg">
              <img
                src={item.images}
                alt=""
                className="w-14 bg-white my-2 rounded-lg shadow-md mr-2"
              />
              <h1>
                <div className="font-bold text-lg">{item.title}</div>
              </h1>
              <div>
                <p className="font-semibold ">Price: ${item.price}</p>
                <MdDelete
                  className="float-right text-2xl my-1"
                  onClick={() => handleRemove(item)}
                />
              </div>
            </div>
          </div>
        ))}
      <Link to="/">
        <button className="bg-blue-500 py-2 mt-1 px-5 rounded-xl font-bold text-white">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Cart;
