import React from "react";
import styles from "./ItemList.module.sass";
import Item from "../ListItem/ListItem";

const ItemList = ({ items }) => (
  <div className={styles.ItemList}>
    <ul>
      {items.map((item, index) => {
        return (
          <li className={styles.item} key={item.id}>
            <Item item={item}></Item>
          </li>
        );
      })}
    </ul>
  </div>
);

ItemList.propTypes = {};

ItemList.defaultProps = {};

export default ItemList;
