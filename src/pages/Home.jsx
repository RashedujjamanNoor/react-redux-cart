import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [product, setProuct] = useState();
  const data = async () =>
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProuct(res.data.products);
        console.log(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <div className="md:mx-[10%]">
        <div className="text-3xl font-bold text-center border-b-2">
          <h1>Products</h1>
        </div>
        <div className="md:grid grid-cols-4 justify-items-center">
          {product &&
            product.map((item, index) => (
              <div key={index}>
                <div className="bg-slate-200 w-80 h-auto flex flex-col justify-center  m-5 p-4 rounded-lg shadow-md">
                  <img src={item.images} alt="" className="w-96 " />
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="text-sm font-semibold text-justify">
                    Description: {item.description}
                  </p>
                  <p className="mt-2">Price: ${item.price}</p>
                  <button className="bg-blue-500 py-2 mt-1 rounded-xl font-bold text-white">
                    Add Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
