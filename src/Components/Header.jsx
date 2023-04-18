import { NavLink } from "react-router-dom"
import { ModalContext } from "../Pages/Root";
import { useContext } from "react";

const Header = () =>{

    const {toggleModal} = useContext(ModalContext);
    return (
        <header className="header">
            <div className="header-wrapper">
                <NavLink to={'/'} className="logo">
                    <img src="src/img/logo.png" alt="logo" />
                </NavLink>


                <ul className="header-nav">
                    <NavLink to={'/'}>Главная</NavLink>

                    <li onClick={toggleModal}>Заявка</li>
                    <li>Корзина</li>
                </ul>
            </div>
        </header>
    )
}

export default Header