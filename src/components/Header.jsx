import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import './Header.css';
import {connect} from "react-redux";
import Login from "../pages/Login/Login";

const  Header = (props) => {
    // Headerul primeste acum informatiile despre user si functia de signOut de la Firebase.
    // ATENTIE! Aceste prop-uri au fost pasate din App in Home in Layout in Header, ceea ce e ORIBIL.
    // Se numeste prop drilling tehnica asta si nu ne dorim asa ceva. Cum vom scapa de ea?
    // La cursul urmatopr, Redux ne salveaza!
    const {user, signOut,userFromSubmit,numberOfProducts} = props;

    // La click-ul pe butonul de delogare din header se va executa metoda signOut, venita din Firebase,
    // pasata prin props-uri tocmai din App.js.
    const  handleSignOut = () => {
        signOut();
        alert("You have signed out!");
    }


    return (
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    {/* ATENTIE! Daca avem informatii despre user, atunci ii vom afisa un mesaj.
                    Daca userul nu este logat, se va primi null ca valoare, deci nu com afisa nimic.*/}
                    {user
                        ? <p>Hello there, {user.displayName}!<img src={user.photoURL} className="profile-photo ml-2"
                                                                  alt="Profile"/></p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        {/* Daca avem user, afisam textul "delogare", altfel altfel afisam "logare" */}
                        {user
                            // La click pe buton se va apela metoda handleSignOut.
                            ? <p className="logout h5" onClick={handleSignOut}>Delogare</p>
                            : <Link to="/login" className="h5">Logare</Link>
                        }
                        <div className="d-flex flex-row">
                            <Link to="/cart">
                                <ShoppingCart className="ml-2"/>
                            </Link>
                            <p className="text-muted text-center ml-2 w-50 product-item-number">{numberOfProducts}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}



function mapStateToProps(state) {
    return {
        products:state.products,
        numberOfProducts: state.products.length
    }
}

export default connect(mapStateToProps, null)(Header);