import { Dispatch, SetStateAction } from "react";

export interface CategoryProps {
  id: string;
  image: string;
  title: string;
  link?: string;
};

export interface MovieProps {
  id: string;
  image: string;
  title: string;
  link?: string;
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

export type CarouselProps = {
  data: MovieProps[] & CategoryProps[]
  type:'movies'|'categories'
  title?: string
}