import { ChevronRight } from "lucide-react";
interface IProps {
  onClick?: () => void;
  borderColor?: string;
}
export default function CustomNextArrow({ onClick, borderColor }: IProps) {
  return (
    <div
      style={{ border: borderColor }}
      className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all`}
      onClick={onClick}
    >
      <ChevronRight size={20} strokeWidth={3} />
    </div>
  );
}
