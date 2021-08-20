import config from "../../config/config.js";

const tokenAnforcom = await Cookies.get()["token-anforcom"];
const submitEvent = sessionStorage.getItem('submit-event');
let userName = null;
let teamName = null;
const preloader = document.getElementById('preloader-active');
preloader.style.display = 'none';

const submission = async () => {
    const task = document.getElementById("upload-task");

    if (task === "") {
        alert("Silakan cantumkan file tugas");
        return false;
    }

    const formData = new FormData();
    formData.append('file', task.files[0]);

    try {
        preloader.style.display = 'block';
        const response = await axios.post(`${config.local_upload_submission}/${submitEvent}`, formData, {
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
        alert("Gagal mengirim submission. Silakan hubungi panitia");
        window.location.href = "submission.html";
    }
};

const user = async () => {
    try {
        const response = await axios.get(config.local_user, {
            headers: {
                Authorization : `Bearer ${tokenAnforcom}`,
            }
        });

        if (response.data.status === "SUCCESS") {
            userName = response.data.payload.name;
            teamName = null; 
            document.getElementById("team-lead-submission").innerHTML = userName;
            document.getElementById("team-name-submission").innerHTML = teamName;
        }

    } catch(error) {
        return error;
    }
};

await user();

document.getElementById("upload-btn").addEventListener("click", (event) => {
    event.preventDefault();
    submission();
});

if (submitEvent === "uiux") {
    document.getElementById("submit-event-submission").innerHTML = "UI/UX Competition";
} else if (submitEvent === "bussinessit") {
    document.getElementById("submit-event-submission").innerHTML = "Bussiness IT Case Competition";
}