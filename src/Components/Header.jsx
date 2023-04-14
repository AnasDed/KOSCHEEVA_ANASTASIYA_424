import { NavLink } from "react-router-dom"
import { ModalContext } from "../Pages/Root";
import { useContext } from "react";

const Header = () =>{

    const {toggleModal} = useContext(ModalContext);
    return (
        <header className="header">
            <div className="header-wrapper">
                <NavLink to={'/'} className="logo">
                    WeAreBuilding
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