import React from 'react';
import {Link} from 'react-router-dom';
// importam componente noi
import Logo from '../../assets/images/logo.png';
import {ReactComponent as Google} from '../../assets/icons/google.svg';
import {ReactComponent as Facebook} from "../../assets/icons/iconfacebook.svg";
import './Login.css'
// ATENTIE! Cu toate ca Login are constante si functii, nu e nevoie sa fie declarata
// drept class, pentru ca nu are un state propriu.
const Login = (props) => {
    // Daca nu suntem siguri ce props-uri vin, le dam console.log.
    console.log(props);
    // Facem destructuring la props-urile de care avem nevoie.
    // signInWithGoogle vine de la Firebase, history de la componenta Route.
    const {signInWithGoogle, history, signInWithFacebook,userFromSubmit} = props;
    // Functia va fi apelata la click-ul pe butonul de logare cu Google.
    function handleGoogleLogin() {
        // Apelul functiei signInWithGoogle intoarce un PROMISE.
        const googleLoginRespone = signInWithGoogle();
        // In caz de succes, Promise-ul va intra pe metoda .then.
        // ATENTIE, .then se executa cand Promise-ul a fost rezolvat(a iesit din starea PENDING).
        // Daca logarea ar esua, nu s-ar intra pe .then, ci pe .catch.
        googleLoginRespone.then(() => {
            // Abia DUPA ce s-a terminat logarea trebuie sa fim redirectati catre Home.
            // Cu history.push schimbam ruta.
            history.push('/');
        });
    }

    function handleFacebookLogin() {
        // Apelul functiei signInWithGoogle intoarce un PROMISE.
        const facebookLoginRespone = signInWithFacebook();
        // In caz de succes, Promise-ul va intra pe metoda .then.
        // ATENTIE, .then se executa cand Promise-ul a fost rezolvat(a iesit din starea PENDING).
        // Daca logarea ar esua, nu s-ar intra pe .then, ci pe .catch.
        facebookLoginRespone.then(() => {
            // Abia DUPA ce s-a terminat logarea trebuie sa fim redirectati catre Home.
            // Cu history.push schimbam ruta.
            history.push('/');
        });
    }


    function handleSubmit(e) {

        history.push('/');
    }

    function handleInputChange(e) {

    }

    return (
        <div className="login-page">
            {/* Logo-ul va duce catre Home. */}
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            {/* Butonul de login cu Google, la pachet cu  */}
            <button
                // Clasele sunt de Bootstrap, din nou, daca nu le stiti, cautati-le!
                className="btn btn-outline-dark d-flex align-items-center"
                // La click apelam functia handleGoogleLogin
                onClick={handleGoogleLogin}
            >
                <Google className="w-50 mr-3"/>
                {/* text-nowrap nu lasa textul sa se intinda pe mai multe randuri */}
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>

            <button
                // Clasele sunt de Bootstrap, din nou, daca nu le stiti, cautati-le!
                className="btn btn-outline-dark d-flex align-items-center mt-4 facebook-button"
                // La click apelam functia handleGoogleLogin
                onClick={handleFacebookLogin}
            >
                <Facebook className="w-50 mr-3"/>
                {/* text-nowrap nu lasa textul sa se intinda pe mai multe randuri */}
                <span className="text-nowrap">Loghează-te cu Facebook</span>
            </button>
            <p className="text-muted align-items-center mt-4">or</p>
            <form onSubmit={handleSubmit}>
                <h3>Sign In using personal email</h3>
                <div className="mt-4">
                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" className="form-control" placeholder="Enter full name"
                               onChange={handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right mt-3">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;