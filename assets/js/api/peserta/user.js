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

/* Jumlah event yang diikuti */
if (countCompetition !== null) {
    countCompetition = document.getElementById("count-competition").innerHTML = countCompetition;
}

if (countEvent !== null) {
    countEvent = document.getElementById("count-event").innerHTML = countEvent;
}

if (countTask !== null) {
    countTask = document.getElementById("count-task").innerHTML = countTask;
}

/* Status event yang terdaftar */
if (lomba.length !== 0 && lomba !== null) {
    if (lomba[0].event_id === 1) {
        if (lomba[0].status == "inactive") {
            document.getElementById("status-uiux").innerHTML = "Menunggu pembayaran";
        } else if (lomba[0].status === "paid") {
            document.getElementById("status-uiux").innerHTML = "Menunggu konfirmasi";
        } else if (lomba[0].status === "active") {
            document.getElementById("status-uiux").innerHTML = "Pendaftaran selesai";
        } else {
            document.getElementById("status-uiux").innerHTML = "Pembayaran ditolak. Silakan kirim ulang bukti pembayaran";
        }
    } else {
        document.getElementById("status-uiux").innerHTML = "Belum mendaftar";
    }

    if (lomba[0].event_id === 2) {
        if (lomba[0].status == "inactive") {
            document.getElementById("status-bisnis").innerHTML = "Menunggu pembayaran";
        } else if (lomba[0].status === "paid") {
            document.getElementById("status-bisnis").innerHTML = "Menunggu konfirmasi";
        } else if (lomba[0].status === "active") {
            document.getElementById("status-bisnis").innerHTML = "Pendaftaran selesai";
        } else {
            document.getElementById("status-bisnis").innerHTML = "Pembayaran ditolak. Silakan kirim ulang bukti pembayaran";
        }
    } else {
        document.getElementById("status-bisnis").innerHTML = "Belum mendaftar";
    }

    if (lomba.length === 2) {
        if (lomba[1].event_id === 1) {
            if (lomba[1].status == "inactive") {
                document.getElementById("status-uiux").innerHTML = "Menunggu pembayaran";
            } else if (lomba[1].status === "paid") {
                document.getElementById("status-uiux").innerHTML = "Menunggu konfirmasi";
            } else if (lomba[1].status === "active") {
                document.getElementById("status-uiux").innerHTML = "Pendaftaran selesai";
            } else {
                document.getElementById("status-uiux").innerHTML = "Pembayaran ditolak. Silakan kirim ulang bukti pembayaran";
            }
        } else {
            document.getElementById("status-uiux").innerHTML = "Belum mendaftar";
        }

        if (lomba[1].event_id === 2) {
            if (lomba[1].status == "inactive") {
                document.getElementById("status-bisnis").innerHTML = "Menunggu pembayaran";
            } else if (lomba[1].status === "paid") {
                document.getElementById("status-bisnis").innerHTML = "Menunggu konfirmasi";
            } else if (lomba[1].status === "active") {
                document.getElementById("status-bisnis").innerHTML = "Pendaftaran selesai";
            } else {
                document.getElementById("status-bisnis").innerHTML = "Pembayaran ditolak. Silakan kirim ulang bukti pembayaran";
            }
        } else {
            document.getElementById("status-bisnis").innerHTML = "Belum mendaftar";
        }
    }
} else {
    document.getElementById("status-uiux").innerHTML = "Belum mendaftar";
    document.getElementById("status-bisnis").innerHTML = "Belum mendaftar";
}

if (seminar.length !== 0 && seminar !== null) {
    if (seminar[0].status === "inactive") {
        document.getElementById("status-seminar").innerHTML = "Menunggu pembayaran";
    } else if (seminar[0].status === "paid") {
        document.getElementById("status-seminar").innerHTML = "Menunggu konfirmasi";
    } else if (seminar[0].status === "active") {
        document.getElementById("status-seminar").innerHTML = "Pendaftaran selesai";
    } else {
        document.getElementById("status-seminar").innerHTML = "Pembayaran ditolak. Silakan kirim ulang bukti pembayaran";
    }
} else {
    document.getElementById("status-seminar").innerHTML = "Belum mendaftar";
}

/* Status tugas yang didapat */
if (task.UIUX === null) {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum ada tugas</span>";
} else if (task.UIUX.status === null) {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum ada tugas</span>";
} else if (task.UIUX.status.status === "accept") {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Terkonfirmasi. Silakan menunggu pengumuman</span>";
} else if (task.UIUX.status.status === "sent") {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
} else if (task.UIUX.status.status === "reject") {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Tugas ditolak. Silakan kirim ulang</span>";
} else {
    document.getElementById("task-uiux").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mengumpulkan tugas</span>";
}

if (task.BussinessIT === null) {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum ada tugas</span>";
} else if (task.BussinessIT.status === null) {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum ada tugas</span>";
} else if (task.BussinessIT.status.status === "accept") {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-success mb-1\">Terkonfirmasi. Silakan menunggu pengumuman</span>";
} else if (task.BussinessIT.status.status === "sent") {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-warning mb-1\">Menunggu konfirmasi</span>";
} else if (task.BussinessIT.status.status === "reject") {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-danger mb-1\">Tugas ditolak. Silakan kirim ulang</span>";
} else {
    document.getElementById("task-bisnis").innerHTML = "<span class=\"text-xs font-weight-bold text-secondary mb-1\">Belum mengumpulkan tugas</span>";
}