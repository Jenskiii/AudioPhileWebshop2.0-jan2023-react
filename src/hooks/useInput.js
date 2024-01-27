import { useState } from "react";

export function useInput(initialValue, name, placeHolder,type = "text") {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    id: name,
    name: name,
    value: value,
    placeholder: placeHolder,
    type,
    onChange: (e) => setValue(e.target.value),
  };
}
