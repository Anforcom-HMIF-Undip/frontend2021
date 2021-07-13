import config from "../../config/config.js";

const tokenAnforcom = await Cookies.get()["token-anforcom"];
const event = sessionStorage.getItem('event');

const submission = async () => {
    const task = document.getElementById("upload-task");

    if (task === "") {
        alert("Silakan cantumkan file tugas");
        return false;
    }

    const formData = new FormData();
    formData.append('file', task.files[0]);

    try {
        const response = await axios.post(`${config.local_upload_submission}/${event}`, formData, { // TODO: ${event} error, cari tahu konek linknya
            headers : {
                Authorization : `Bearer ${tokenAnforcom}`,
                'Content-Type' : 'multipart/form-data'
            }
        });

        if (response.data.status === "SUCESS") {
            return window.location.replace(config.local_frontend_terdaftar);
        }

        alert(response.data.message);
    } catch(error) {
        alert("Gagal mengirim submission");
        return window.location.href = "submission.html";
    }
};

document.getElementById("upload-btn").addEventListener("click", (event) => {
    event.preventDefault();
    submission();
});