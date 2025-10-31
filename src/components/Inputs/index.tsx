import { useState } from "react";
import { Interface } from "readline";

interface InputsProps {
  type: string;
  typeFunction: string;
  legend: string;
  id: string;
  locale?: string;
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

  // apenas números
  const regexFormat = /[^0-9]/g;

  const returnValue = (event: any): void => {
    const value = event.target.value;

    if (props.typeFunction === "currency" || props.typeFunction === "int") {
      setInputValue(
        mtMask({
          value: value.replace(regexFormat, ""),
          locale: props.locale,
        })
      );
    } else {
      setInputValue(value);
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
          maxLength={19}
        />
      </div>
    </>
  );
};

interface MtMask {
  value: string;
  locale: string | undefined;
}

function mtMask(props: MtMask): string {
  let arrVal: string[] = props.value.split("");

  // Adiciona ou remove zeros à esquerda dependendo do tamanho do array
  switch (arrVal.length) {
    case 0:
      arrVal.unshift("0");
      arrVal.unshift("0");
      arrVal.unshift("0");
      break;

    case 1:
      arrVal.unshift("0");
      arrVal.unshift("0");
      break;

    case 2:
      arrVal.unshift("0");
      break;
  }

  // formata a string para virar float e depois formata novamente para virar toLocaleString
  const valueFormat = parseFloat(
    arrVal.join("").slice(0, arrVal.length - 2) +
      "." +
      arrVal.join("").slice(arrVal.length - 2)
  ).toLocaleString(props.locale ?? "en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return valueFormat;
}
