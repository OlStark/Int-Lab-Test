function InputTest() {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }
  const mask = (event) => {
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = event.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    val = def.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (val.length == 2) val = "";
    } else setCursorPosition(val.length);
  };
  console.log(mask);
  return (
    <div>
      <input
        onChange={() => mask()}
        id="phone2"
        type="tel"
        required=""
        // pattern="[+]\d{1}\s[(]\d{3}[)]\s\d{3}[-]\d{2}[-]\d{2}"
        minlength="18"
        maxlength="18"
      />
    </div>
  );
}

export default InputTest;
