import React from "react";
import styles from "./ListItem.module.sass";
import freeShippingIco from "../../assets/ic_shipping.png";

const ListItem = ({ item }) => {
  const freeShipping = (item) => {
    if (item.free_shipping)
      return (
        <img
          src={freeShippingIco}
          className={`${styles.freeShipping}`}
          alt="Free Shipping"
        />
      );
  };

  return (
    <div className="level is-align-items-flex-start is-clickable">
      <div className="level-left is-align-items-flex-start">
        <div className="level-item">
          <figure className={`image is-180x180`}>
            <img
              src={item.picture}
              alt={item.title}
              className={`${styles.imgItem}`}
            />
          </figure>
        </div>
        <div className={`level-item`}>
          <div className={`${styles.details}`}>
            <h1 className={`${styles.price}`}>
              ${item.price.amount}
              {freeShipping(item)}
            </h1>
            <p className={`${styles.title}`}>{item.title}</p>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className={`level-item ${styles.address}`}>{item.address}</div>
      </div>
    </div>
  );
};

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
