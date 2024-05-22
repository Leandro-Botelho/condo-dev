import "react-toastify/dist/ReactToastify.min.css";
import { Bounce, ToastContainer } from "react-toastify";

const ToastifyContainer = () => {
  return (
    <ToastContainer
      transition={Bounce}
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToastifyContainer;
