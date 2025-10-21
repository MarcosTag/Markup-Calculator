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
    let value: string = event.target.value;
    const startLength: number = 0;
    const breakLength: number = value.length - 2;
    const breakSimbol: string = ',';


    if (props.type === "text") {

      let newVal: string | undefined = mtMask({
          paramValue: value,
          startLength: startLength,
          breakLength: breakLength,
          breakSimbol: breakSimbol,
      });

      setInputValue(value.replace(regexNumber, ""));

      console.log(newVal);
      if(newVal) {
        newVal = newVal.replace(',', '.');
        const newValNumber = parseFloat(newVal);
        newVal = newValNumber.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        console.log(newVal)
      }

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

interface MtMask {
  paramValue: string;
  startLength: number;
  breakLength: number;
  breakSimbol: string;
}

  function mtMask(params: MtMask) {

    if (params.paramValue.length >= params.breakLength + 1) {

      return params.paramValue.substring(params.startLength, params.breakLength) + params.breakSimbol + params.paramValue.substring(params.breakLength, params.paramValue.length)
      
    }
  }
