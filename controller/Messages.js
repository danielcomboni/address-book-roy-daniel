const Swal = require('sweetalert2');

class Messages {


    static showToast(position, title, type) {
        const Toast = Swal.mixin({
            toast: true,
            position: position,
            background: `#123`,
            showConfirmButton: false,
            timer: 3000
        });

        Toast.fire({
            title: title,
            type: type
        });

    }

}

module.exports = {
    Messages
}