import "./style.scss";

function Input({ props }) {
  return (
    <div className="text-field">
      <label className="text-field__label" for="input"></label>
      <input
        className="text-field__input"
        type="text"
        name="input"
        id="input"
        placeholder={props}></input>
    </div>
  );
}

export default Input;
