import { useEffect, useState } from "react";
import Button from "../buttons/button";
import Checkbox from "../checkbox/checkbox";
import "./formInput.scss";
import InputMask from "react-input-mask";

const Form = () => {
  const [focusOnName, setFocusOnName] = useState(false);
  const [focusOnPhone, setFocusOnPhone] = useState(false);
  const [check, setCheck] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [isLengthError, setIsLengthError] = useState(false);
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "isLength":
            value.length < validations[validation]
              ? setIsLengthError(true)
              : setIsLengthError(false);
            break;
          case "isEmpty":
            value ? setEmpty(false) : setEmpty(true);
            break;
        }
      }
    }, [value, check]);
    useEffect(() => {
      if (isEmpty || isLengthError || check) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    }, [isEmpty, isLengthError, check]);
    return {
      isEmpty,
      isLengthError,
      inputValid,
    };
  };

  const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = (e) => {
      setIsDirty(true);
    };

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid,
    };
  };

  const name = useInput("", { isEmpty: true, isLength: 3 });
  const phone = useInput("", { isLength: 11, isEmpty: true });
  return (
    <div className="form">
      <h2>Отправить форму</h2>
      <form className="form__container">
        <div
          className={focusOnName === true ? "input__name-active" : "input"}
          onFocus={() => setFocusOnName(true)}
          onBlur={() => setFocusOnName(false)}>
          <label>Имя</label>
          <input
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
            value={name.value}
            name="name"
            type="text"
            placeholder="Имя"
          />
          {name.isDirty && name.isEmpty && (
            <p className="name-error">Поле имя не может быть пустым!</p>
          )}
        </div>

        <div
          className={
            focusOnPhone === true
              ? "input__phone-active"
              : "input__phone-disactive"
          }
          onFocus={() => setFocusOnPhone(true)}
          onBlur={() => setFocusOnPhone(false)}>
          <label>Телефон</label>
          <InputMask
            mask={"+7 (999) - 999 - 999"}
            onChange={(e) => phone.onChange(e)}
            onBlur={(e) => phone.onBlur(e)}>
            {() => <input type="tel" placeholder="tel" />}
          </InputMask>
          {phone.isDirty && phone.isLengthError && (
            <>
              <p style={{ color: "red" }} className="phone-error-text">
                Некорректный номер телефона
              </p>
              <div className="error-phone-icon"></div>
            </>
          )}
        </div>

        <Checkbox check={check} setCheck={setCheck} />
        <Button
          name={name.isEmpty}
          phone={phone.isLengthError}
          check={check}
          text={"Отправить"}
        />
      </form>
    </div>
  );
};

export default Form;
