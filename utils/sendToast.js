import toast from "react-hot-toast";

export const sendCustomToast = ({ message, bgColor }) =>
  toast(message, {
    style: {
      backgroundColor: bgColor,
      fontWeight: "bold",
      padding: "16px",
      color: "#fff",
    },
  });
