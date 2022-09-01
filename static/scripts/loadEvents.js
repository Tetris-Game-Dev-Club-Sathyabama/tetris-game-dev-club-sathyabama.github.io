fetch('/data/events.json').then(resp => resp.json(), { cache: 'no-store' }).then(resp => {
    Object.keys(resp.events).forEach((v, i) => {
        var event = resp.events[v];
        console.log(event.isComplete)
        if (event.isComplete) {
            document.getElementById('eventsContainer').innerHTML += `
            <div class="event-card">
                <img class="event-card-image" src="/data/event_images/`+ event.image + `">
                <div class="event-card-content">
                    <div>
                        <div class="event-card-title">`+ event.title + `</div>
                        <div class="event-card-desc">`+ event.description + `</div>
                    </div>
                </div>
            </div>`;
        } else {
            document.getElementById('eventsContainer').innerHTML += `
            <div class="event-card">
                <img class="event-card-image" src="/data/event_images/`+ event.image + `">
                <div class="event-card-content">
                    <div>
                        <div class="event-card-title">`+ event.title + `</div>
                        <div class="event-card-desc">`+ event.description + `</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <button class="button-main" style="font-size: 1rem;">Register</button>
                    <div>
                </div>
            </div>`;
        }
    })
})