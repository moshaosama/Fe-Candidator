import { toast } from "react-toastify";
const usetoastify = () => {
  const notifySuccess = (MessageSuccess: string) => {
    toast.success(MessageSuccess);
  };
  const notifyError = (MessageError: string) => {
    toast.error(MessageError);
  };

  return { notifySuccess, notifyError };
};

export default usetoastify;
