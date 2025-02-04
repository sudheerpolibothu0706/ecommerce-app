import { createContext, useEffect, useState,} from "react";
import {products} from "../assets/assets"


export const shopContext = createContext();
export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems]=useState({});

  const addToCart= async(itemId, size )=>{
    let cartData= structuredClone(cartItems);

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size]+=1;
      }
      else{
        cartData[itemId][size]=1
      }
    }
    else{
      cartData[itemId] = { [size]: 1 };
    }
    setCartItems(cartData);
  }
  const getCartCount=()=>{
    let totalCount=0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item]>0){
            totalCount +=cartItems[items][item];
          }
        }
        catch{

        }
      }
    }
    return totalCount;
  }
  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])
  
  const currency = "$";
  const delivery_fee = 10;
  
  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    getCartCount
  };
  return (
    <shopContext.Provider value={value}>{props.children} </shopContext.Provider>
  );
};