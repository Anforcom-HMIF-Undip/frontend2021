const timeline = [{
        day: "15",
        monthYear: "Juli 2021",
        description: "Pembukaan Pendaftaran"
    },
    {
        day: "3",
        monthYear: "September 2021",
        description: "Penutupan Pendaftaran"
    },
    {
        day: "3",
        monthYear: "September 2021",
        description: "Pengumpulan Proposal"
    },
    {
        day: "10",
        monthYear: "September 2021",
        description: "Pengumuman Finalis"
    },
    {
        day: "11",
        monthYear: "September 2021",
        description: "Technical Meeting"
    },
    {
        day: "18",
        monthYear: "September 2021",
        description: "Presentasi Lomba (Final)"
    },
    {
        day: "25",
        monthYear: "September 2021",
        description: "Closing dan Seminar"
    },
]
let cardTimeline = document.querySelector(".timelineUI");
cardTimeline.className += " d-flex justify-content-center justify-content-xl-start align-items-center flex-column flex-lg-row gap-3 flex-wrap"
showTimeline(timeline);




function showTimeline(timeline) {
    let html = ``;
    let count = 1;
    for (let i = 0; i < timeline.length; i++) {
        if (timeline[i].monthYear == "Mei 2021") {
            html +=
                `<div 
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-delay=${50*count} 
                class="card-timeline active px-3 px-lg-4 py-3 " >
                <div class="date mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h3 class="day m-0">${timeline[i].day}</h3>
                    <h5 class="monthYear">${timeline[i].monthYear}</h5>
                </div>
                <p class="description wow fadeIn" data-wow-delay="0.2s">${timeline[i].description}</p>
            </div>`;
        } else {
            html +=
                `<div
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-delay=${50*count} 
                class="card-timeline px-3 px-lg-4 py-3 ">
                <div class="date mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h3 class="day m-0">${timeline[i].day}</h3>
                    <h5 class="monthYear">${timeline[i].monthYear}</h5>
                </div>
                <p class="description wow fadeIn" data-wow-delay="0.2s">${timeline[i].description}</p>
            </div>`;
        }
        count++;
    }
    cardTimeline.innerHTML += html;
}