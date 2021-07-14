import config from "../../config/config.js";

const tokenAnforcom = await Cookies.get()["token-anforcom"];
const submitEvent = sessionStorage.getItem('submit-event');
let userName = null;
let teamName = null;

const submission = async () => {
    const task = document.getElementById("upload-task");

    if (task === "") {
        alert("Silakan cantumkan file tugas");
        return false;
    }

    const formData = new FormData();
    formData.append('file', task.files[0]);

    try {
        const response = await axios.post(`${config.local_upload_submission}/${submitEvent}`, formData, {
            headers : {
                Authorization : `Bearer ${tokenAnforcom}`,
                'Content-Type' : 'multipart/form-data'
            }
        });

        if (response.data.status === "SUCESS") {
            alert(response.data.message);
            window.location.replace(config.local_frontend_terdaftar);
        }

        alert(response.data.message);
    } catch(error) {
        alert("Gagal mengirim submission. Silakan hubungi panitia");
        return window.location.href = "submission.html";
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
            userName = response.data.payload[0].user.name;
            teamName = response.data.payload[0].name;
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