import config from "../../config/config.js";

const tokenAnforcom = await Cookies.get()["token-anforcom"];
let userName = null;
let countCompetition = null;
let countEvent = null;
let countTask = null;
let lomba = null;
let seminar = null;
let task = null;

const user = async () => {
    try {
        const response = await axios.get(config.local_user, {
            headers: {
                Authorization : `Bearer ${tokenAnforcom}`,
            }
        });

        if (response.data.status === "SUCCESS") {
            userName = response.data.payload.name;
        }

    } catch(error) {
        return error;
    }
};

const events = async () => {
    try {
        const response = await axios.get(config.local_events, {
            headers: {
                Authorization : `Bearer ${tokenAnforcom}`,
            }
        });

        if (response.data.status === "SUCCESS") {
            countCompetition = response.data.payload.JumLomba;
            countEvent = response.data.payload.JumSeminar;
            countTask = response.data.payload.JumTask;
            lomba = response.data.payload.Lomba;
            seminar = response.data.payload.Seminar;
            task = response.data.payload.Task;
        }

    } catch(error) {
        return error;
    }
};

await user();
await events();

userName = document.getElementById("uname").innerHTML = userName;

/* Tombol bayar dan daftar */
document.getElementById("bayar-uiux").addEventListener("click", (event) => {
    event.preventDefault();
    sessionStorage.setItem('bayar-event', 'uiux');
    window.location.assign(config.local_frontend_pembayaran);
});

document.getElementById("bayar-bisnis").addEventListener("click", (event) => {
    event.preventDefault();
    sessionStorage.setItem('bayar-event', 'bussinessit');
    window.location.assign(config.local_frontend_pembayaran);
});

document.getElementById("bayar-seminar").addEventListener("click", (event) => {
    event.preventDefault();
    sessionStorage.setItem('bayar-event', 'seminar');
    window.location.assign(config.local_frontend_pembayaran);
});

/* Tombol submit tugas */
document.getElementById("submit-uiux").addEventListener("click", (event) => {
    event.preventDefault();
    sessionStorage.setItem('submit-event', 'uiux');
    window.location.assign(config.local_frontend_submission);
});

document.getElementById("submit-bisnis").addEventListener("click", (event) => {
    event.preventDefault();
    sessionStorage.setItem('submit-event', 'bussinessit');
    window.location.assign(config.local_frontend_submission);
});

/* Jumlah event yang diikuti */
if (countCompetition !== null) {
    countCompetition = document.getElementById("count-competition").innerHTML = `<p class="h5 font-weight-bold text-gray-800">${countCompetition}</p>`;
}

if (countEvent !== null) {
    countEvent = document.getElementById("count-event").innerHTML = `<p class="h5 font-weight-bold text-gray-800">${countEvent}</p>`;
}

if (countTask !== null) {
    countTask = document.getElementById("count-task").innerHTML = `<p class="h5 font-weight-bold text-gray-800">${countTask}</p>`;
}

/* Status event yang terdaftar */
if (lomba!==null && lomba.length !== 0) {
    if (lomba[0].event_id === 1) {
        if (lomba[0].status === "inactive") {
            document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-primary mb-1\">Menunggu pembayaran</span>";
        } else if (lomba[0].status === "paid") {
            document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
        } else if (lomba[0].status === "active") {
            document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Pembayaran terkonfirmasi</span>";
        } else {
            document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Pembayaran ditolak. Silakan kirim ulang bukti pembayaran</span>";
        }
    } else {
        document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mendaftar</span>";
    }

    if (lomba[0].event_id === 2) {
        if (lomba[0].status === "inactive") {
            document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-primary mb-1\">Menunggu pembayaran</span>";
        } else if (lomba[0].status === "paid") {
            document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
        } else if (lomba[0].status === "active") {
            document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Pembayaran terkonfirmasi</span>";
        } else {
            document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Pembayaran ditolak. Silakan kirim ulang bukti pembayaran</span>";
        }
    } else {
        document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mendaftar</span>";
    }

    if (lomba.length === 2) {
        if (lomba[1].event_id === 1) {
            if (lomba[1].status === "inactive") {
                document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-primary mb-1\">Menunggu pembayaran</span>";
            } else if (lomba[1].status === "paid") {
                document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
            } else if (lomba[1].status === "active") {
                document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Pembayaran terkonfirmasi</span>";
            } else {
                document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Pembayaran ditolak. Silakan kirim ulang bukti pembayaran</span>";
            }
        } // NOTE: check over here!

        if (lomba[1].event_id === 2) {
            if (lomba[1].status === "inactive") {
                document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-primary mb-1\">Menunggu pembayaran</span>";
            } else if (lomba[1].status === "paid") {
                document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
            } else if (lomba[1].status === "active") {
                document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Pembayaran terkonfirmasi</span>";
            } else {
                document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Pembayaran ditolak. Silakan kirim ulang bukti pembayaran</span>";
            }
        } else {
            document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mendaftar</span>";
        }
    }
} else {
    document.getElementById("status-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mendaftar</span>";
    document.getElementById("status-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mendaftar</span>";
}

if (seminar !== null && seminar.length !== 0) {
    if (seminar[0].status === "inactive") {
        document.getElementById("status-seminar").innerHTML = "<span class=\"text-xs font-weight-bold text-primary mb-1\">Menunggu pembayaran</span>";
    } else if (seminar[0].status === "paid") {
        document.getElementById("status-seminar").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
    } else if (seminar[0].status === "active") {
        document.getElementById("status-seminar").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Pembayaran terkonfirmasi</span>";
    } else {
        document.getElementById("status-seminar").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Pembayaran ditolak. Silakan kirim ulang bukti pembayaran</span>";
    }
} else {
    document.getElementById("status-seminar").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mendaftar</span>";
}

/* Status tugas yang didapat */
if (task.UIUX === null) {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum ada tugas</span>";
} else if (task.UIUX.status === null) {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mengumpulkan tugas</span>";
} else if (task.UIUX.status.status === "accept") {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Terkonfirmasi. Silakan menunggu pengumuman</span>";
} else if (task.UIUX.status.status === "sent") {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
} else if (task.UIUX.status.status === "reject") {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Tugas ditolak. Silakan kirim ulang</span>";
} else if (task.UIUX.status.status === "nope"){
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mengumpulkan tugas</span>";
}

if (task.BussinessIT === null) {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum ada tugas</span>";
} else if (task.BussinessIT.status === null) {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mengumpulkan tugas</span>";
} else if (task.BussinessIT.status.status === "accept") {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Terkonfirmasi. Silakan menunggu pengumuman</span>";
} else if (task.BussinessIT.status.status === "sent") {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
} else if (task.BussinessIT.status.status === "reject") {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Tugas ditolak. Silakan kirim ulang</span>";
} else if (task.BussinessIT.status.status === "nope"){
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mengumpulkan tugas</span>";
}