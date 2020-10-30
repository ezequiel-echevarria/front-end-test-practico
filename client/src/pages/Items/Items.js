import React, { useEffect, useState } from "react";
import styles from "./Items.module.sass";
import { useLocation } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { useHistory } from "react-router-dom";
import Service from "../../services/ItemServices";

const Items = ({ onCategoriesChange }) => {
  const [items, setItems] = useState([]);

  const history = useHistory();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryValue = query.get("query");

  const onClickHandler = (item) => history.push(`items/${item.id}`);

  useEffect(() => {
    if (queryValue && queryValue !== "")
      Service.GetByFilter(queryValue).then((data) => {
        setItems(data.items);
        onCategoriesChange(data.categories);
      });
  }, [queryValue]);

  return (
    <>
      <div className="container">
        <section
          className={`section ${styles.itemSection} has-background-white`}
        >
          <div className="container">
            <ItemList items={items} onClick={onClickHandler}></ItemList>
          </div>
        </section>
      </div>
    </>
  );
};

Items.propTypes = {};

Items.defaultProps = {};

export default Items;
