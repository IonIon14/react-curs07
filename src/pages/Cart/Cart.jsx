import React from 'react';
import Layout from "../../components/Layout";
import './Cart.css'
import {connect} from "react-redux";
import {ReactComponent as Close} from "../../assets/icons/close.svg";
import {removeFromCart} from "../../redux/actions/cart";
import {Link} from "react-router-dom";

const Cart = (props) => {
    const {id, name, price, currency, image, description} = props;
    let totalSum = 0;
    return (
        <Layout>
            <div className="container-fluid container-min-max-width d-flex justify-content-center">
                { props.products && props.products.length ?
                    <div className="w-50">
                        {/* Numele coloanelor ce vor fi afisate. */}
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                            <p className="w-25">Eliminare</p>
                        </div>
                        {props.products.map((product) => {
                            return <div className="d-flex justify-content-between align-items-center text-center"
                                        key={product.id}>
                                <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                    <img src={product.image} alt="Produs" className="w-100"/>
                                    <p>{product.name}</p>
                                </div>
                                <p className="w-25">{product.price} {product.currency}</p>
                                <p className="w-25">{product.quantity}</p>
                                <div className="w-25 d-flex justify-content-center">
                                    <p className="mr-2">{product.price * product.quantity} {product.currency}</p>
                                </div>
                                <button onClick={() => {
                                    console.log("Am intrat in event");
                                    props.removeFromCart({
                                        product: {
                                            id,
                                            name,
                                            price,
                                            currency,
                                            image,
                                            description
                                        }
                                    })
                                }} className="w-25 remove-button">
                                    <Close className="w-25"/>
                                </button>
                            </div>
                        })
                        }
                        <h2 className="mt-3">Total:{
                            props.products.reduce((totalSum, product) => totalSum + product.quantity * product.price, 0)
                        } LEI</h2>
                    </div>
                    :
                    <div className="d-flex flex-column empty-cart justify-content-center">
                        <h1>Ne pare rau,dar nu exista produse in acest moment!</h1>
                        <Link to="/">
                            <div className="d-flex flex-row justify-content-center mt-5 ">
                                <button className="btn btn-outline-dark">
                                    Intoarcere la pagina principala!
                                </button>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </Layout>
    );

};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        numberOfProducts: state.products.length
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch(removeFromCart(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);