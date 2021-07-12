import config from "../../config/config.js";

const tokenAnforcom = await Cookies.get()["token-anforcom"];
const event = sessionStorage.getItem('event');

const payment = async () => {
    const bukti = document.getElementById("upload-payment");

    if (bukti === "") {
        alert("Silakan cantumkan bukti pembayaran");
        return false;
    }

    const formData = new FormData();
    formData.append('file', bukti.files[0]);

    try {
        const response = await axios.post(`${config.local_upload_transfer}/${event}`, formData, { // TODO: ${event} error, cari tahu konek linknya
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
        return window.location.href = "pembayaran.html";
    }
};

document.getElementById("transfer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    payment();
});