import { ISelectOption } from "../../interfaces";

interface IProps {
  options: ISelectOption[];
}
function Select({ options }: IProps) {
  return (
    <select className="w-full border border-gray-300 rounded-lg p-2">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
