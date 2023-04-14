import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Modal from "../Components/Modal";

export const ModalContext = createContext(null);
const Root = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = setModal.bind(this, !modal);
  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      <Header />

      <main>
        <Outlet />
      </main>
      <Modal />
    </ModalContext.Provider>
  );
};

export default Root;
