import React from "react";
import styles from "./Items.module.sass";
import { useLocation } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import useItems from "../../hooks/useItems";

const Items = () => {
  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryValue = query.get("query");
  const { items, errorMessage } = useItems(queryValue);
  const onClickHandler = (item) => history.push(`items/${item.id}`);

  return (
    <div className="container">
      <section className={`section ${styles.itemSection} has-background-white`}>
        <div className="container">
          <ItemList items={items} onClick={onClickHandler}></ItemList>
        </div>
      </section>
      <ErrorMessage
        show={errorMessage.show}
        text={errorMessage.text}
        title={errorMessage.title}
      ></ErrorMessage>
    </div>
  );
};

Items.propTypes = {};

Items.defaultProps = {};

export default Items;
