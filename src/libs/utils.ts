import Swal from 'sweetalert2';


type AlertType = 'success' | 'error';

export const showToastAlert = (
  type: AlertType,
  title: string,
  message: string,
  timer: number = 3000
) => {
  Swal.fire({
    icon: type,
    title,
    text: message,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer,
    timerProgressBar: true
  });
};