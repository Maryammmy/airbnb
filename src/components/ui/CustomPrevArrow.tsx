import { ChevronLeft } from "lucide-react";
interface IProps {
  onClick?: () => void;
  borderColor?: string;
}
export default function CustomPrevArrow({ onClick, borderColor }: IProps) {
  return (
    <div
      style={{ border: borderColor }}
      className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all`}
      onClick={onClick}
    >
      <ChevronLeft size={20} strokeWidth={3} />
    </div>
  );
}
