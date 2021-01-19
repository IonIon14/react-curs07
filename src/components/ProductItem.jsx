import React from 'react';
import {connect} from "react-redux";
// Atentie! avem si un fisier css
import './ProductItem.css';
import {addToCart} from "../redux/actions/cart";

const ProductItem = (props) => {
    // extragem props-urile de interes
    const {id, name, price, currency, image, description} = props;

    return (
        // Momentan, preview-ul produsului contine imagine, nume si pret
        <div className="product-item col-4 d-flex flex-column align-items-center mt-4">
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{name}</p>
            <p className="text-center">{price + currency}</p>
            <p className="text-center w-75"><strong>{description}</strong></p>
            <button className="btn btn-outline-dark" onClick={() => props.addToCart({
                product: {
                    id,
                    name,
                    price,
                    currency,
                    image,
                    description
                }
            })}>
                Adauga in cos
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    };
};

export default connect(null, mapDispatchToProps)(ProductItem);