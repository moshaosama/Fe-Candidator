import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface OpenSidebarFactoryProps {
  Type: string;
  onClick: () => void;
}
const OpenSidebarFactory = ({ Type, onClick }: OpenSidebarFactoryProps) => {
  switch (Type) {
    case "UnActive":
      return (
        <MdKeyboardDoubleArrowRight
          className="cursor-pointer"
          onClick={onClick}
        />
      );
    case "Active":
      return (
        <MdKeyboardDoubleArrowLeft
          className="cursor-pointer"
          onClick={onClick}
        />
      );

    default:
      return (
        <MdKeyboardDoubleArrowRight
          className="cursor-pointer"
          onClick={onClick}
        />
      );
  }
};

export default OpenSidebarFactory;
