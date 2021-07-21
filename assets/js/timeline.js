const timelineBusiness = [
  { day: "15", month: "Juli", description: "Pembukaan Pendaftaran" },
  { day: "27", month: "Agustus", description: "Penutupan Pendaftaran" },
  { day: "3", month: "September", description: "Deadline Pengumpulan Proposal dan Video" },
  { day: "10", month: "September", description: "Pengumuman Finalis" },
  { day: "11", month: "September", description: "Technical Meeting" },
  { day: "19", month: "September", description: "Presentasi Babak Final" },
  { day: "25", month: "September", description: "Pengumuman Juara, Closing, dan Seminar" },
];

const timelineUI = [
  { day: "15", month: "Juli", description: "Pembukaan Pendaftaran" },
  { day: "27", month: "Agustus", description: "Penutupan Pendaftaran" },
  { day: "3", month: "September", description: "Deadline Pengumpulan Proposal dan Video " },
  { day: "10", month: "September", description: "Pengumuman Finalis" },
  { day: "11", month: "September", description: "Technical Meeting" },
  { day: "18", month: "September", description: "Presentasi Babak Final" },
  { day: "25", month: "September", description: "Pengumuman Juara, Closing, dan Seminar" },
];

const timelineSeminar = [
  { day: "25", month: "September", description: "Closing dan Seminar" },
];

let cardUI = document.querySelector("#home");
let cardBusiness = document.querySelector("#profile");
let cardSeminar = document.querySelector("#contact");

showTimeline(cardUI, timelineUI, "Pembukaan Pendaftaran");
showTimeline(cardBusiness, timelineBusiness, "Pembukaan Pendaftaran");
showTimeline(cardSeminar, timelineSeminar, "");

function showTimeline(card, timeline, description) {
  let cardTimeline = card;
  let html = ``;
  for (let i = 0; i < timeline.length; i++) {
    if (timeline[i].description == description) {
      html += `<div class="card-timeline active d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center px-3 px-lg-4 py-4 my-3">
                <div class="date mb-3 mb-lg-0">
                    <h3 class="day m-lg-0 fs-2">${timeline[i].day}</h3>
                    <p class="fs-5 month">${timeline[i].month}</p>
                </div>
                <p class="description">${timeline[i].description}</p>
            </div>`;
    } else {
      html += `<div class="card-timeline d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center px-3 px-lg-4 py-4 my-3 ">
                <div class="date mb-3 mb-lg-0">
                    <h3 class="day m-lg-0 fs-2">${timeline[i].day}</h3>
                    <p class="fs-5 month">${timeline[i].month}</p>
                </div>
                <p class="description">${timeline[i].description}</p>
            </div>`;
    }
  }
  cardTimeline.innerHTML += html;
}
