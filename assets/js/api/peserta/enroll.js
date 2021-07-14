import config from "../../config/config.js";

const tokenAnforcom = Cookies.get()["token-anforcom"];
const event = sessionStorage.getItem('event');

if (event === 'uiux') {
    document.getElementById("event-name").innerHTML = "UI/UX Competition";
} else if (event === 'bussinessit') {
    document.getElementById("event-name").innerHTML = "Bussiness IT Case Competition";
} else if (event === "seminar") {
    document.getElementById("event-name").innerHTML = "Seminar";
} else {
    document.getElementById("event-name").innerHTML = "";
}

const enroll = async () => {
    const univ = await document.querySelector("#univ").value;
    const team =await  document.querySelector("#team").value;
    const nim = await document.querySelector("#nim").value;
    const hp = await document.querySelector("#hp").value;
    const ktm = document.getElementById("ktm");

    if (univ === "" || team === "" || nim === "" || hp === "" || ktm.value === "") {
        alert("Informasi Tim dan Ketua Tim wajib diisi!")
        return false;
    }

    const formData = new FormData();
    formData.append('nama_tim', team);
    formData.append('instansi', univ);
    formData.append('nim_ketua', nim);
    formData.append('hp_ketua', hp);
    formData.append('ktm_ketua', ktm.files[0]);

    const namaAnggota1 = await document.querySelector("#name1").value;
    const nimAnggota1 = await document.querySelector("#nim1").value;
    const emailAnggota1 = await document.querySelector("#email1").value;
    const hpAnggota1 = await document.querySelector("#hp1").value;
    const ktmAnggota1 = document.querySelector("#ktm1");

    if (namaAnggota1 !== "" || nimAnggota1 !== "" || emailAnggota1 !== "" || hpAnggota1 !== "" || ktmAnggota1.value !== "") {
        formData.append('nama_anggota1', namaAnggota1);
        formData.append('nim_anggota1', nimAnggota1);
        formData.append('email_anggota1', emailAnggota1);
        formData.append('hp_anggota1', hpAnggota1);
        formData.append('ktm_anggota1', ktmAnggota1.files[0]);
    }
    
    const namaAnggota2 = await document.querySelector("#name2").value;
    const nimAnggota2 = await document.querySelector("#nim2").value;
    const emailAnggota2 = await document.querySelector("#email2").value;
    const hpAnggota2 = await document.querySelector("#hp2").value;
    const ktmAnggota2 = document.querySelector("#ktm2");

    if (namaAnggota2 !== "" || nimAnggota2 !== "" || emailAnggota2 !== "" || hpAnggota2 !== "" || ktmAnggota2.value !== "") {
        formData.append('nama_anggota2', namaAnggota2);
        formData.append('nim_anggota2', nimAnggota2);
        formData.append('email_anggota2', emailAnggota2);
        formData.append('hp_anggota2', hpAnggota2);
        formData.append('ktm_anggota2', ktmAnggota2.files[0]);
    }

    try {
        const response = await axios.post(`${config.local_enroll_lomba}/${event}`, formData, {
            headers : {
                Authorization : `Bearer ${tokenAnforcom}`,
                'Content-Type' : 'multipart/form-data'
            }
        });

        if (response.data.status === "SUCCESS") {
            alert(response.data.message);
            return window.location.replace(config.local_frontend_terdaftar);
        }

        alert(response.data.message);
    } catch(error) {
        alert("Gagal mendaftar event. Silakan ulangi kembali atau hubungi panitia");
        window.location.href = "leader-info.html";
    }
};

document.getElementById("daftar-btn").addEventListener("click", (event) => {
    event.preventDefault();
    enroll();
});

