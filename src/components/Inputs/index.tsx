import { Interface } from "readline";

interface InputsProps {
  type: string;
  typeFunction: string;
  legend: string;
  id: string;
  value: string;
  onValueChange: (value: string) => void;
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
  const regexFormat = /[^0-9]/g;

  const returnValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const rawValue = value.replace(regexFormat, "");
    props.onValueChange(rawValue);
  };

  let displayValue = props.value;
  if (props.typeFunction === "currency" && props.value) {
    displayValue = mtMask({
      value: props.value,
      locale: props.locale,
    });
  }

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
          value={displayValue}
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

  const valueFormat = parseFloat(
    arrVal.join("").slice(0, arrVal.length - 2) +
      "." +
      arrVal.join("").slice(arrVal.length - 2),
  ).toLocaleString(props.locale ?? "en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return valueFormat;
}