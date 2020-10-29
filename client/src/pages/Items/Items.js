import React, { useEffect, useState } from "react";
import styles from "./Items.module.sass";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CajaBusqueda from "../../components/CajaBusqueda/CajaBusqueda";
import ItemList from "../../components/ItemList/ItemList";
import { useHistory } from "react-router-dom";

const Items = () => {
  const _URLBase = process.env.REACT_APP_URL_API_BASE;

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const history = useHistory();
  const onSubmitHandler = (value) => history.push(`items?query=${value}`);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryValue = query.get("query");

  const onClickHandler = (item) => history.push(`items/${item.id}`);

  useEffect(() => {
    if (queryValue && queryValue !== "")
      getItemsByFilter(queryValue).then((data) => {
        setItems(data.items);
        setCategories(data.categories);
      });
  }, [queryValue]);

  const getItemsByFilter = (filter) =>
    fetch(`${_URLBase}items?q=${filter}`, {
      method: "GET",
    }).then((response) => {
      if (response.ok) return response.json();
    });

  return (
    <>
      <CajaBusqueda
        query={queryValue}
        onSubmit={onSubmitHandler}
      ></CajaBusqueda>
      <div className="container">
        <Breadcrumb categories={categories}></Breadcrumb>
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