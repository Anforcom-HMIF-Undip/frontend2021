import config from "../../config/config.js";

const tokenAnforcom = await Cookies.get()["token-anforcom"];
const bayarEvent = sessionStorage.getItem('bayar-event');
const preloader = document.getElementById('preloader-active');
preloader.style.display = 'none';

const payment = async () => {
    const bukti = document.getElementById("upload-payment");

    if (bukti === "") {
        alert("Silakan cantumkan bukti pembayaran");
        return false;
    }

    const formData = new FormData();
    formData.append('file', bukti.files[0]);

    try {
        preloader.style.display = 'block';
        const response = await axios.post(`${config.local_upload_transfer}/${bayarEvent}`, formData, {
            headers : {
                Authorization : `Bearer ${tokenAnforcom}`,
                'Content-Type' : 'multipart/form-data'
            }
        });

        if (response.data.status === "SUCESS") {
            preloader.style.display = 'none';
            alert(response.data.message);
            window.location.href = "terdaftar.html";
        }

        preloader.style.display = 'none';
        alert(response.data.message);
    } catch(error) {
        preloader.style.display = 'none';
        alert("Gagal mengirim bukti transfer. Silakan hubungi panitia");
        window.location.href = "pembayaran.html";
    }
};

document.getElementById("transfer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    payment();
});