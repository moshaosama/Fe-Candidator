import { ReactNode } from "react";

interface CardDetailsProps {
  Icon: ReactNode;
  Header: string;
  Text: string;
}

export const CardDetails = (props: CardDetailsProps) => {
  return (
    <div className="flex gap-3">
      <div>
        <i>{props.Icon}</i>
      </div>
      <div>
        <h1 className="font-bold text-lg">{props.Header}</h1>
        <p>{props.Text}</p>
      </div>
    </div>
  );
};
