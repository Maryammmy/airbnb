export interface ISelectOption {
  value: string;
  label: string;
}
export interface IButton {
  id: number;
  label: string;
}
export interface ResponsiveSetting {
  breakpoint: number;
  settings: {
    slidesToShow: number;
  };
}
