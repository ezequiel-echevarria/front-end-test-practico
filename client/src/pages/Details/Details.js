import React, { useEffect, useState } from "react";
import styles from "./Details.module.sass";
import { useParams } from "react-router-dom";
import Service from "../../services/ItemServices";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();

  let { id } = useParams();

  const [details, setDetails] = useState({
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
    picture: "",
    condition: "",
    free_shipping: "",
    sold_quantity: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    title: "",
    text: "",
    show: false,
  });

  useEffect(() => {
    if (id && id !== "") {
      Service.GetItemById(id)
        .then((data) => setDetails(data.item))
        .catch((err) => {
          if(err instanceof(Response) && err.status === 404)
            history.push("/notfound")
            
          setErrorMessage({
            title: "Error",
            text: "Se ha producido un error inesperado",
            show: true,
          });
        });
    }
  }, [id,history]);

  const formatDecimals = (number) => {
    if (number) return number < 10 ? `0${number}` : number;
    return "00";
  };

  return (
    <div className="container">
      <section
        className={`section ${styles.detailSection} has-background-white`}
      >
        <div className="columns">
          <div className="column is-two-thirds">
            <figure className={`image ${styles.figure}`}>
              <img src={details.picture} alt="titulo" />
            </figure>
          </div>
          <div className="column">
            <div>
              <span>{details.condition === "new" ? "Nuevo" : "Usado"}</span>
              <span>{` - ${details.sold_quantity} ${
                details.sold_quantity < 1 ? "vendido" : "vendidos"
              }`}</span>
            </div>
            <p className="is-size-4 has-text-weight-bold mt-4">
              {details.title}
            </p>
            <div className="mt-4 is-flex">
              <p className={`${styles.price} has-text-weight-bold`}>
                {`$ ${details.price.amount}`}
              </p>
              <span
                className={`is-size-4 ${styles.decimals}`}
              >{`${formatDecimals(details.price.decimals)}`}</span>
            </div>
            <button
              className={`button is-link is-fullwidth ${styles.btnComprar}`}
            >
              Comprar
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-thirds">
            <p className={`${styles.details} has-text-weight-bold`}>
              Descripción del producto
            </p>
            <p className={styles.description}>{details.description}</p>
          </div>
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

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
