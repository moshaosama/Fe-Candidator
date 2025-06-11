import { ReactNode } from "react";

export interface ModelProps {
  Header: string;
  children: ReactNode;
  isExit?: boolean;
  onCLickExit?: () => void;
}
