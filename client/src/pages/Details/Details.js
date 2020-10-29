import React, { useEffect, useState } from "react";
import styles from "./Details.module.sass";
import { useParams } from "react-router-dom";

const Details = () => {
  const _URLBase = process.env.REACT_APP_URL_API_BASE;

  let { id } = useParams();

  const [details, setDetails] = useState({
    id: "",
    title: "",
    price: {
      currency: "",
      amount: null,
      decimals: null,
    },
    picture: "",
    condition: "",
    free_shipping: null,
    sold_quantity: null,
    description: "",
  });

  useEffect(() => {
    if (id && id !== "") {
      getItemById(id).then((i) => {
        setDetails(i.item);
      });
    }
  }, [id]);

  const getItemById = (id) =>
    fetch(`${_URLBase}items/${id}`, {
      method: "GET",
    }).then((response) => {
      if (response.ok) return response.json();
    });

  return (
    <div className="container">
      <section
        className={`section ${styles.detailSection} has-background-white`}
      >
        <div className="columns">
          <div className="column is-three-quarters">
            <figure className={`image ${styles.img}`}>
              <img src={details.picture} alt="titulo" className={styles.img} />
            </figure>
          </div>
          <div class="column">
            <p>{details.condition === "new" ? "Nuevo" : "Usado"}</p>
            <p>{`${details.sold_quantity} vendidos`}</p>
            <p>{details.title}</p>
            <button className="button is-link is-fullwidth">Comprar</button>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p>{details.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
