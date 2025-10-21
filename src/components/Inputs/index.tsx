interface InputsProps {
  type: string;
  legend: string;
  id: string;
  prefix?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Inputs = (props: InputsProps) => {
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
          onChange={props.onChange}
        />
      </div>
    </>
  );
};
