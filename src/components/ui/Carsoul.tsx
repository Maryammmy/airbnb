import Slider from "react-slick";
import { ResponsiveSetting } from "../../interfaces";
import CustomNextArrow from "./CustomNextArrow";
import CustomPrevArrow from "./CustomPrevArrow";
import { useState } from "react";
import CustomDots from "./CustomDots";

interface IProps {
  children: React.ReactNode;
  slidesToShow?: number;
  responsive?: ResponsiveSetting[];
  borderColor?: string;
  showDot?: boolean;
}

function Carsoul({
  children,
  slidesToShow = 1,
  responsive,
  borderColor,
  showDot,
}: IProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex); // Update the current slide when it changes
  };

  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: showDot,
    nextArrow: <CustomNextArrow borderColor={borderColor} />,
    prevArrow: <CustomPrevArrow borderColor={borderColor} />,
    responsive: responsive,
    customPaging: (i: number) => (
      <CustomDots
        key={i}
        active={i === currentSlide} // Check if the dot is active
        onClick={() => {}}
      />
    ),
    beforeChange: handleBeforeChange, // Update current slide before change
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carsoul;
