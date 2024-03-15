import { toast } from "react-toastify";


export const successMessage = (message) => {
    toast.success(message, {
        style: {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        },
    })
}

export const errorMessage = (message) => {
    toast.error(message, {
        style: {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        },
    });
} 