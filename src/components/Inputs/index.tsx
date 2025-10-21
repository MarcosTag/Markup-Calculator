import { useState } from "react";

interface InputsProps {
  type: string;
  typeFunction: string;
  legend: string;
  id: string;
  prefix?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Inputs = (props: InputsProps) => {
  const [inputValue, setInputValue] = useState("");

  const regexText = /[^\d]/g;
  const regexNumber = /[^\d]/g;

  const returnValue = (event: any) => {
    let value = event.target.value;

    if (props.type === "text") {
      setInputValue(value.replace(regexNumber, ""));
    } else {
      setInputValue(value.replace(regexText, ""));
    }
  };

  return (
    <>
      <label htmlFor={props.id} className="inline-block mt-4">
        {props.legend}
      </label>

      <div className="border-1 border-gray-300 w-max flex">
        {props.prefix && (
          <label htmlFor={props.id} className="w-10 p-2 text-center">
            {props.prefix}
          </label>
        )}

        <input
          type={props.type}
          className="p-2"
          name=""
          id={props.id}
          value={inputValue}
          onChange={returnValue}
        />
      </div>
    </>
  );
};
