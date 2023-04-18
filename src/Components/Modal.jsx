import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../Pages/Root";

const Modal = () => {
  const { modal, toggleModal } = useContext(ModalContext);

  const overlayRef = useRef();

  const close = (e) => {
    if (e.target === overlayRef.current) {
      toggleModal();
    }
  };

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    message: "",
    product_id: 1,
    email:""
  });

  const [prod, setProd] = useState([]);

  const fetchProds = async () => {
    const r = await fetch("https://api.avavion.ru/api/products");

    const data = await r.json();
    setProd(data.data);
  };

  useEffect(() => {
    fetchProds();
  }, []);

  const onSubmitHandle = (event) => {
    event.preventDefault();
  };

  const onChangeForm = (e) => {
    setForm((prev) => {
      prev = { ...prev };

      prev[e.target.name] = e.target.value.trim();

      console.log(prev);
      return prev;
    });
  };

  const sendRequest = async (body) => {
    const response = await fetch(
      "https://api.avavion.ru/api/applications/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (data.status === true) {
        return <div className="success">Ваш заявка успешно отправлена</div>
      }
  };

  const onClickHandle = (e) => {
    e.preventDefault();

    sendRequest(form);
  };

  const onChangeSelectForm = (e) => {
    setForm((prev) => {
      prev = { ...prev };

      prev[e.target.name] = e.target.options[e.target.selectedIndex].value;

      console.log(prev);
      return prev;
    });
  };

  return (
    <section
      onClick={(e) => close(e)}
      ref={overlayRef}
      className={`overlay ${modal ? "active" : ""}`}
    >
      <div className="modal">
        <div className="modal-body">
          <form onSubmit={onSubmitHandle.bind(this)}>
          
            <input
              type="text"
              value={form.first_name}
              onChange={onChangeForm.bind(this)}
              name="first_name"
              id="first_name"
              placeholder="Имя"
            />

            <input
              type="text"
              value={form.last_name}
              onChange={onChangeForm.bind(this)}
              name="last_name"
              id="last_name"
              placeholder="Фамилия"
            />

            <textarea
              placeholder="Ваше сообщение"
              onChange={onChangeForm.bind(this)}
              name="message"
              id="message"
            >
              {form.message}
            </textarea>

            <select
              onChange={onChangeSelectForm.bind(this)}
              name="product"
              id="product"
            >
              {prod.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <input
              type="email"
              value={form.email}
              onChange={onChangeForm.bind(this)}
              name="email"
              id="email"
              placeholder="email"
            />

            <button onClick={onClickHandle.bind(this)} className="sendButton" >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Modal;
