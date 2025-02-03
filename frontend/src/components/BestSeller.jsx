import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { shopContext, } from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Filter only products where bestseller is true
    const filteredProducts = products.filter((product) => product.bestseller);
    setBestSeller(filteredProducts.slice(0, 5)); // Limit to the first 5 bestsellers
  }, [products]);

  return (
    <div>
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga enim quisquam minus eveniet debitis itaque
          iste, unde nisi similique aliquam nostrum, laborum, distinctio adipisci. Consequuntur dignissimos eum
          repellendus excepturi illum.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6 pl-14 pr-14">
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
