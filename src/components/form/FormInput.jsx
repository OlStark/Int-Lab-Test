import React from "react";

const FormInput = (props) => {
  return (
    <div className="formInput">
      <input name={props.name} placeholder={props.text} type={props.type} />
    </div>
  );
};

export default FormInput;
