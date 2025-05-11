"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    setCartProducts(products);
  };

  useEffect(() => {
    getProductsFromStorage();
  }, []);

  const handleAddOne = (product) => {
    const products = [...cartProducts];
    const index = products.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      products[index].count++;
      setCartProducts(products);
      localStorage.setItem("products", JSON.stringify(products));
    }
  };

  const handleRemoveOne = (product) => {
    const products = [...cartProducts];
    const index = products.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      if (products[index].count > 1) {
        products[index].count--;
      } else {
        products.splice(index, 1);
      }
      setCartProducts(products);
      localStorage.setItem("products", JSON.stringify(products));
    }
  };

  return (
    <div className={styles.container}>
      {cartProducts?.map((prod) => (
        <div key={prod.product.id} className={styles.itemWrapper}>
          <div className={styles.productInfo}>
            <Image
              src={prod.product.image}
              width={70}
              height={70}
              alt={prod.product.title}
            />
            <div className={styles.productDetails}>
              <h4>{prod.product.title}</h4>
              <p className={styles.countText}>{prod.count} ცალი</p>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button onClick={() => handleRemoveOne(prod.product)}>-</button>
            <span>{prod.count}</span>
            <button onClick={() => handleAddOne(prod.product)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
