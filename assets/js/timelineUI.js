const timeline = {
    first : {day : "20",
            monthYear : "Mei 2021",
            description : "Pembukaan Pendaftaran"},
    second : {day : "10",
        monthYear : "Agustus 2021",
        description : "Pembukaan Pendaftaran"},
    third : {day : "20",
        monthYear : "Agustus 2021",
        description : "Pembukaan Pendaftaran"},
    fourth : {day : "31",
        monthYear : "Agustus 2021",
        description : "Pembukaan Pendaftaran"},
    fifth : {day : "1",
        monthYear : "September 2021",
        description : "Pembukaan Pendaftaran"},
    sixth : {day : "17",
        monthYear : "September 2021",
        description : "Pembukaan Pendaftaran"},
}
let cardTimeline = document.querySelector(".timelineUI");
cardTimeline.className += " d-flex justify-content-center justify-content-xl-start align-items-center flex-column flex-lg-row gap-3 flex-wrap"

let html = ``;
for (const property in timeline) {
    if (property == "first"){
        html += 
        `<div class="card-timeline active px-3 px-lg-4 py-3">
            <div class="date mb-4">
                <h3 class="day m-0">${timeline[property].day}</h3>
                <h6 class="monthYear">${timeline[property].monthYear}</h6>
            </div>
            <p class="description">${timeline[property].description}</p>
        </div>`;    
    }
    else{
        html += 
        `<div class="card-timeline px-3 px-lg-4 py-3">
            <div class="date mb-4">
                <h3 class="day m-0">${timeline[property].day}</h3>
                <h6 class="monthYear">${timeline[property].monthYear}</h6>
            </div>
            <p class="description">${timeline[property].description}</p>
        </div>`;
    }
}

cardTimeline.innerHTML += html;
