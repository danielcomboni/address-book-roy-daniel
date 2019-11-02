// const Swal = require('sweetalert2');

export default class Messages {


    static showToast(position, title, type) {
        const Toast = Swal.mixin({
            toast: true,
            position: position,
            background: `#123`,
            showConfirmButton: false,
            timer: 2000
        });

        Toast.fire({
            title: title,
            type: type
        });

    }

    static decide(funcToExecute, fnParam,  sureMsg){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: sureMsg
        }).then((result) => {
            if (result.value) {

                funcToExecute(fnParam);

            }
        })

    }

}

// module.exports = {
//     Messages
// }