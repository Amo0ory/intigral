import { Dispatch, SetStateAction } from "react";

export type CategoryProps = {
  image: string;
  label: string;
};

export type MovieProps = {
  id: string;
  image: string;
  title: string;
  withDetails?: boolean;
  description?: string;
};
export type Movies = MovieProps[];
export interface MovieModalProps extends MovieProps {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>> | undefined
  isFavourite?: boolean;
  rating?: number;
}
export type ButtonProps = {
  type: "primary" | "secondary" | null;
  label: string;
  className?: string;
  onClick?: () => void;
};
