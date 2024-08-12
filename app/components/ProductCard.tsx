import React from "react";
import AddChart from "./AddChart";
import styles from "./ProductCard.module.css";
const ProductCard = () => {
  return (
    // <div className={styles.card}>
    //   <AddChart></AddChart>
    // </div>
    // <div className="p-5 bg-sky-300 my-5 hover:bg-white text-gray-400 text-xl">
    //   <AddChart></AddChart>
    // </div>

    <div>
      <AddChart></AddChart>
    </div>
  );
};

export default ProductCard;
