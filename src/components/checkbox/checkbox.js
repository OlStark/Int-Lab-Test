import "./style.scss";

function Checkbox({ check, setCheck }) {
  console.log(check);
  return (
    <div className="checkbox">
      <input
        onClick={() => setCheck(!check)}
        type="checkbox"
        class="custom-checkbox"
        id="agree"
        name="agree"
      />
      <label className="label" for="agree">
        Я соглашаюсь
      </label>
    </div>
  );
}

export default Checkbox;
