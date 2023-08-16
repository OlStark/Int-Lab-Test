import "./style.scss";

function Button({ text, name, phone, check }) {
  return (
    <button
      className="button"
      disabled={!check === true ? true : false}
      type="submit"
      onClick={() => alert("Заявка отправлена")}>
      <h5>{text}</h5>
    </button>
  );
}

export default Button;
