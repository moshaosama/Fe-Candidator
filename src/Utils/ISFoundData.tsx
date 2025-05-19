import NoData from "../Components/NoData";

export const ISFoundData = (Component: any, Title: string) => {
  return (props: any) => {
    const data = props.Data;

    if (data[Title].result?.length === 0) {
      return <NoData Title={Title} />;
    }

    return <Component {...props} />;
  };
};
