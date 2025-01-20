import image1 from "../assets/iamges/home1.avif";
import image2 from "../assets/iamges/home2.avif";
import image3 from "../assets/iamges/home3.webp";
import image4 from "../assets/iamges/home4.avif";
import { IButton, ISelectOption } from "../interfaces";

export const images: string[] = [image1, image2, image3, image4];
export const countryOptions: ISelectOption[] = [
  { value: "eg", label: "Egypt (+20)" },
  { value: "us", label: "USA (+1)" },
  { value: "uk", label: "UK (+44)" },
];
export const buttons: IButton[] = [
  { id: 1, label: "Continue with Google" },
  { id: 2, label: "Continue with Apple" },
  { id: 3, label: "Continue with Email" },
  { id: 4, label: "Continue with Facebook" },
];
export const menuItems: string[] = [
  "Sign up",
  "Log in",
  "Gift cards",
  "Airbnb your home",
  "Host an experience",
  "Help Center",
];
