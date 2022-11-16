import toast from "react-hot-toast";

const makeToast = (props) => {
  // Success toast
  if (props.type === "success") {
    toast.success(props.message);
  }
  // Error toast
  else if (props.type === "error") {
    toast.error(props.message);
  }
  // Loading toast
  else if (props.type === "loading") {
    toast.loading(props.message);
  }
  // Default toast
  else {
    toast(props.message);
  }
};

export default makeToast;
