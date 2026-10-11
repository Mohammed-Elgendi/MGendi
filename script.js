
/* =========================================================
   CERTIFICATE LIGHTBOX
========================================================= */

function openCertificate(imagePath) {

    const lightbox = document.getElementById("certificate-lightbox");
    const image = document.getElementById("certificate-image");

    if (!lightbox || !image) return;

    image.src = imagePath;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const lightbox = document.getElementById("certificate-lightbox");
    const image = document.getElementById("certificate-image");

    if (!lightbox || !image) return;

    lightbox.classList.remove("active");

    image.src = "";

    document.body.style.overflow = "";
}


const certificateLightbox =
    document.getElementById("certificate-lightbox");

if (certificateLightbox) {

    certificateLightbox.addEventListener("click", function (event) {

        if (event.target === this) {

            closeCertificate();

        }

    });

}


/* =========================================================
   TASK LIGHTBOX - SHARED FUNCTIONS
========================================================= */

function hideAllTaskViews() {

    const elementsToHide = [

        "relay-gallery",
        "relay-counter",

        "timer-gallery",
        "timer-counter",

        "motor-starting-gallery",
        "motor-starting-counter",

        "timer-task-gallery",
        "timer-task-counter",
        "timer-task-info",

        "contactor-gallery",
        "contactor-counter",

        "star-delta-gallery",
        "star-delta-counter",

        "star-delta-task-gallery",
        "star-delta-task-counter",
        "star-delta-task-info",

        "troubleshooting-gallery",
        "troubleshooting-counter",
        "ats-gallery",
        "ats-counter",
        "ats-task-gallery",
        "ats-task-counter",
        "ups-gallery",
        "ups-counter",

        "powerfactor-gallery",
        "powerfactor-counter"
    ];


    elementsToHide.forEach(function (id) {

        const element = document.getElementById(id);

        if (element) {

            element.style.display = "none";

        }

    });


    const image = document.getElementById("task-image");

    if (image) {

        image.src = "";

        image.style.display = "none";

    }

}


/* =========================================================
   OPEN SINGLE TASK IMAGE
========================================================= */

function openTaskImage(imagePath) {

    const lightbox = document.getElementById("task-lightbox");
    const image = document.getElementById("task-image");

    if (!lightbox || !image) return;

    hideAllTaskViews();

    image.src = imagePath;

    image.style.display = "block";

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE TASK LIGHTBOX
========================================================= */

function closeTaskImage() {

    const lightbox = document.getElementById("task-lightbox");

    if (!lightbox) return;

    lightbox.classList.remove("active");

    hideAllTaskViews();

    document.body.style.overflow = "";

}


/* =========================================================
   CLOSE TASK LIGHTBOX BY CLICKING OUTSIDE
========================================================= */

const taskLightbox =
    document.getElementById("task-lightbox");


if (taskLightbox) {

    taskLightbox.addEventListener("click", function (event) {

        if (event.target === this) {

            closeTaskImage();

        }

    });

}


/* =========================================================
   RELAY IMAGE GALLERY
========================================================= */

const relayImagesList = [

    "../Learning-Images/classic_control/relay-1.png",

    "../Learning-Images/classic_control/relay-2.png"

];


let currentRelayImage = 0;


/* OPEN RELAY GALLERY */

function openRelayImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("relay-gallery");

    const counter =
        document.getElementById("relay-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentRelayImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showRelayImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT RELAY IMAGE */

function showRelayImage() {

    const image =
        document.getElementById("relay-image");

    const counter =
        document.getElementById("relay-counter");


    if (!image || !relayImagesList.length) return;


    image.src =
        relayImagesList[currentRelayImage];


    if (counter) {

        counter.textContent =
            (currentRelayImage + 1) +
            " / " +
            relayImagesList.length;

    }

}


/* PREVIOUS RELAY IMAGE */

function previousRelayImage() {

    currentRelayImage--;


    if (currentRelayImage < 0) {

        currentRelayImage =
            relayImagesList.length - 1;

    }


    showRelayImage();

}


/* NEXT RELAY IMAGE */

function nextRelayImage() {

    currentRelayImage++;


    if (currentRelayImage >= relayImagesList.length) {

        currentRelayImage = 0;

    }


    showRelayImage();

}


/* =========================================================
   TIMERS - LEARNING GALLERY
========================================================= */

const timerImagesList = [

    "../Learning-Images/classic_control/timer/1.png",
    "../Learning-Images/classic_control/timer/2.png",
    "../Learning-Images/classic_control/timer/3.png",
    "../Learning-Images/classic_control/timer/4.png",
    "../Learning-Images/classic_control/timer/5.png",
    "../Learning-Images/classic_control/timer/6.png"

];


let currentTimerImage = 0;


/* OPEN TIMERS LEARNING GALLERY */

function openTimerImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("timer-gallery");

    const counter =
        document.getElementById("timer-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentTimerImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showTimerImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT TIMER IMAGE */

function showTimerImage() {

    const image =
        document.getElementById("timer-image");

    const counter =
        document.getElementById("timer-counter");


    if (!image || !timerImagesList.length) return;


    image.src =
        timerImagesList[currentTimerImage];


    if (counter) {

        counter.textContent =
            (currentTimerImage + 1) +
            " / " +
            timerImagesList.length;

    }

}


/* PREVIOUS TIMER IMAGE */

function previousTimerImage() {

    currentTimerImage--;


    if (currentTimerImage < 0) {

        currentTimerImage =
            timerImagesList.length - 1;

    }


    showTimerImage();

}


/* NEXT TIMER IMAGE */

function nextTimerImage() {

    currentTimerImage++;


    if (currentTimerImage >= timerImagesList.length) {

        currentTimerImage = 0;

    }


    showTimerImage();

}


/* =========================================================
   MOTOR STARTING METHODS - LEARNING GALLERY
========================================================= */

const motorStartingImagesList = [

    "../Learning-Images/classic_control/Starting_Motor/1.png",
    "../Learning-Images/classic_control/Starting_Motor/2.png",
    "../Learning-Images/classic_control/Starting_Motor/3.png",
    "../Learning-Images/classic_control/Starting_Motor/4.png",
    "../Learning-Images/classic_control/Starting_Motor/5.png",
    "../Learning-Images/classic_control/Starting_Motor/6.png"

];


let currentMotorStartingImage = 0;


/* OPEN MOTOR STARTING METHODS GALLERY */

function openMotorStartingImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("motor-starting-gallery");

    const counter =
        document.getElementById("motor-starting-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentMotorStartingImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showMotorStartingImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT MOTOR STARTING IMAGE */

function showMotorStartingImage() {

    const image =
        document.getElementById("motor-starting-image");

    const counter =
        document.getElementById("motor-starting-counter");


    if (!image || !motorStartingImagesList.length) return;


    image.src =
        motorStartingImagesList[currentMotorStartingImage];


    if (counter) {

        counter.textContent =
            (currentMotorStartingImage + 1) +
            " / " +
            motorStartingImagesList.length;

    }

}


/* PREVIOUS MOTOR STARTING IMAGE */

function previousMotorStartingImage() {

    currentMotorStartingImage--;


    if (currentMotorStartingImage < 0) {

        currentMotorStartingImage =
            motorStartingImagesList.length - 1;

    }


    showMotorStartingImage();

}


/* NEXT MOTOR STARTING IMAGE */

function nextMotorStartingImage() {

    currentMotorStartingImage++;


    if (currentMotorStartingImage >= motorStartingImagesList.length) {

        currentMotorStartingImage = 0;

    }


    showMotorStartingImage();

}


/* =========================================================
   TIMER CONTROL TASKS - IMAGES
========================================================= */

const timerTaskImagesList = [

    "../Task-Images/timers/1.png",
    "../Task-Images/timers/2.png",
    "../Task-Images/timers/3.png",
    "../Task-Images/timers/4.png",
    "../Task-Images/timers/5.png",
    "../Task-Images/timers/6.png"

];


/* =========================================================
   TIMER CONTROL TASKS - TITLES & DESCRIPTIONS
========================================================= */

const timerTaskData = [

    {

        title:
            "06. Alternating Motor Control Using Timers",

        description:
            "Automatically alternates between two motors, operating each for a preset time in a continuous repeating cycle."

    },

    {

        title:
            "07. Cyclic Motor Control Using On-Delay Timers",

        description:
            "Automatically operates a motor for 5 seconds and stops it for 2 seconds, repeating the cycle continuously."

    },

    {

        title:
            "08. Automatic Forward-Reverse Motor Control Using Timers",

        description:
            "Automatically alternates the motor's rotation between forward and reverse directions at preset time intervals in a continuous cycle."

    },

    {

        title:
            "09. Motor Start-Stop Delay Control Using Timers",

        description:
            "Delays motor startup by 5 seconds after pressing Start and delays motor shutdown for a preset time after pressing Stop."

    },

    {

        title:
            "10. Sequential Three-Motor Control Using Timers",

        description:
            "Starts Motors 1 and 2 simultaneously, switches off Motor 2 after a preset time, and activates Motor 3 for a timed cycle after Motor 1 stops."

    },

    {

        title:
            "11. Forward-Reverse Motor Control with Timed Intervals",

        description:
            "Automatically runs the motor forward and reverse for preset durations, with a 2-second stop between each direction change."

    }

];


let currentTimerTaskImage = 0;


/* OPEN TIMER CONTROL TASKS */

function openTimerTaskImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("timer-task-gallery");

    const counter =
        document.getElementById("timer-task-counter");

    const info =
        document.getElementById("timer-task-info");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentTimerTaskImage = 0;


    if (info) {

        info.style.display = "block";

    }


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showTimerTaskImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT TIMER CONTROL TASK */

function showTimerTaskImage() {

    const image =
        document.getElementById("timer-task-image");

    const counter =
        document.getElementById("timer-task-counter");

    const title =
        document.getElementById("timer-task-title");

    const description =
        document.getElementById("timer-task-description");


    if (!image || !timerTaskImagesList.length) return;


    image.src =
        timerTaskImagesList[currentTimerTaskImage];


    if (counter) {

        counter.textContent =
            (currentTimerTaskImage + 1) +
            " / " +
            timerTaskImagesList.length;

    }


    const task =
        timerTaskData[currentTimerTaskImage];


    if (task && title) {

        title.textContent =
            task.title;

    }


    if (task && description) {

        description.textContent =
            task.description;

    }

}


/* PREVIOUS TIMER CONTROL TASK */

function previousTimerTaskImage() {

    currentTimerTaskImage--;


    if (currentTimerTaskImage < 0) {

        currentTimerTaskImage =
            timerTaskImagesList.length - 1;

    }


    showTimerTaskImage();

}


/* NEXT TIMER CONTROL TASK */

function nextTimerTaskImage() {

    currentTimerTaskImage++;


    if (currentTimerTaskImage >= timerTaskImagesList.length) {

        currentTimerTaskImage = 0;

    }


    showTimerTaskImage();

}


/* =========================================================
   STAR-DELTA METHOD - LEARNING GALLERY
========================================================= */

const starDeltaImagesList = [

    "../Learning-Images/classic_control/star_delta/1.png",
    "../Learning-Images/classic_control/star_delta/2.png",
    "../Learning-Images/classic_control/star_delta/3.png",
    "../Learning-Images/classic_control/star_delta/4.png",
    "../Learning-Images/classic_control/star_delta/5.png"

];


let currentStarDeltaImage = 0;


/* OPEN STAR-DELTA GALLERY */

function openStarDeltaImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("star-delta-gallery");

    const counter =
        document.getElementById("star-delta-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentStarDeltaImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showStarDeltaImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT STAR-DELTA IMAGE */

function showStarDeltaImage() {

    const image =
        document.getElementById("star-delta-image");

    const counter =
        document.getElementById("star-delta-counter");


    if (!image || !starDeltaImagesList.length) return;


    image.src =
        starDeltaImagesList[currentStarDeltaImage];


    if (counter) {

        counter.textContent =
            (currentStarDeltaImage + 1) +
            " / " +
            starDeltaImagesList.length;

    }

}


/* PREVIOUS STAR-DELTA IMAGE */

function previousStarDeltaImage() {

    currentStarDeltaImage--;


    if (currentStarDeltaImage < 0) {

        currentStarDeltaImage =
            starDeltaImagesList.length - 1;

    }


    showStarDeltaImage();

}


/* NEXT STAR-DELTA IMAGE */

function nextStarDeltaImage() {

    currentStarDeltaImage++;


    if (currentStarDeltaImage >= starDeltaImagesList.length) {

        currentStarDeltaImage = 0;

    }


    showStarDeltaImage();

}


/* =========================================================
   STAR-DELTA STARTER - CONTROL CIRCUIT TASK GALLERY
========================================================= */

const starDeltaTaskImagesList = [

    "../Task-Images/star_delta/1.png",
    "../Task-Images/star_delta/2.png"

];


const starDeltaTaskData = [

    {

        title:
            "13. Star-Delta Starter with Timer",

        description:
            "A motor starts in Star mode, then after 5 seconds, the Star contactor disconnects and the Delta contactor energizes to run the motor at full rated voltage."

    },

    {

        title:
            "14. Star-Delta Starter with Forward and Reverse Operation",

        description:
            "The motor starts in Star mode to reduce starting current, then switches to Delta mode after a preset time. The motor can rotate in both Forward and Reverse directions using interlocked contactors."

    }

];


let currentStarDeltaTaskImage = 0;


/* OPEN STAR-DELTA STARTER TASK GALLERY */

function openStarDeltaTaskImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("star-delta-task-gallery");

    const counter =
        document.getElementById("star-delta-task-counter");

    const info =
        document.getElementById("star-delta-task-info");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentStarDeltaTaskImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    if (info) {

        info.style.display = "block";

    }


    showStarDeltaTaskImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT STAR-DELTA STARTER TASK */

function showStarDeltaTaskImage() {

    const image =
        document.getElementById("star-delta-task-image");

    const counter =
        document.getElementById("star-delta-task-counter");

    const title =
        document.getElementById("star-delta-task-title");

    const description =
        document.getElementById("star-delta-task-description");


    if (!image || !starDeltaTaskImagesList.length) return;


    image.src =
        starDeltaTaskImagesList[currentStarDeltaTaskImage];


    if (counter) {

        counter.textContent =
            (currentStarDeltaTaskImage + 1) +
            " / " +
            starDeltaTaskImagesList.length;

    }


    const task =
        starDeltaTaskData[currentStarDeltaTaskImage];


    if (task && title) {

        title.textContent =
            task.title;

    }


    if (task && description) {

        description.textContent =
            task.description;

    }

}


/* PREVIOUS STAR-DELTA STARTER TASK IMAGE */

function previousStarDeltaTaskImage() {

    currentStarDeltaTaskImage--;


    if (currentStarDeltaTaskImage < 0) {

        currentStarDeltaTaskImage =
            starDeltaTaskImagesList.length - 1;

    }


    showStarDeltaTaskImage();

}


/* NEXT STAR-DELTA STARTER TASK IMAGE */

function nextStarDeltaTaskImage() {

    currentStarDeltaTaskImage++;


    if (currentStarDeltaTaskImage >= starDeltaTaskImagesList.length) {

        currentStarDeltaTaskImage = 0;

    }


    showStarDeltaTaskImage();

}


/* =========================================================
   TROUBLESHOOTING & PROTECTION - LEARNING GALLERY
========================================================= */

const troubleshootingImagesList = [

    "../Learning-Images/classic_control/troubleshooting/1.png",
    "../Learning-Images/classic_control/troubleshooting/2.png",
    "../Learning-Images/classic_control/troubleshooting/3.png",
    "../Learning-Images/classic_control/troubleshooting/4.png",
    "../Learning-Images/classic_control/troubleshooting/5.png",
    "../Learning-Images/classic_control/troubleshooting/6.png",
    "../Learning-Images/classic_control/troubleshooting/7.png",
    "../Learning-Images/classic_control/troubleshooting/8.png",
    "../Learning-Images/classic_control/troubleshooting/9.png",
    "../Learning-Images/classic_control/troubleshooting/10.png",
    "../Learning-Images/classic_control/troubleshooting/11.png",
    "../Learning-Images/classic_control/troubleshooting/12.png"

];

let currentTroubleshootingImage = 0;


/* OPEN TROUBLESHOOTING GALLERY */

function openTroubleshootingImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("troubleshooting-gallery");

    const counter =
        document.getElementById("troubleshooting-counter");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentTroubleshootingImage = 0;

    gallery.style.display = "flex";

    if (counter) {
        counter.style.display = "block";
    }

    showTroubleshootingImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT TROUBLESHOOTING IMAGE */

function showTroubleshootingImage() {

    const image =
        document.getElementById("troubleshooting-image");

    const counter =
        document.getElementById("troubleshooting-counter");

    if (!image || !troubleshootingImagesList.length) return;

    image.src =
        troubleshootingImagesList[currentTroubleshootingImage];

    if (counter) {
        counter.textContent =
            (currentTroubleshootingImage + 1) +
            " / " +
            troubleshootingImagesList.length;
    }
}


/* PREVIOUS TROUBLESHOOTING IMAGE */

function previousTroubleshootingImage() {

    currentTroubleshootingImage--;

    if (currentTroubleshootingImage < 0) {
        currentTroubleshootingImage =
            troubleshootingImagesList.length - 1;
    }

    showTroubleshootingImage();
}


/* NEXT TROUBLESHOOTING IMAGE */

function nextTroubleshootingImage() {

    currentTroubleshootingImage++;

    if (
        currentTroubleshootingImage >=
        troubleshootingImagesList.length
    ) {
        currentTroubleshootingImage = 0;
    }

    showTroubleshootingImage();
}

/* =========================================================
   ATS - LEARNING GALLERY
========================================================= */

const atsImagesList = [

    "../Learning-Images/classic_control/ATS/1.png",
    "../Learning-Images/classic_control/ATS/2.png",
    "../Learning-Images/classic_control/ATS/3.png",
    "../Learning-Images/classic_control/ATS/4.jpeg",
    "../Learning-Images/classic_control/ATS/5.jpeg"

];


let currentATSImage = 0;


/* OPEN ATS GALLERY */

function openATSImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("ats-gallery");

    const counter =
        document.getElementById("ats-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentATSImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showATSImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT ATS IMAGE */

function showATSImage() {

    const image =
        document.getElementById("ats-image");

    const counter =
        document.getElementById("ats-counter");


    if (!image || !atsImagesList.length) return;


    image.src =
        atsImagesList[currentATSImage];


    if (counter) {

        counter.textContent =
            (currentATSImage + 1) +
            " / " +
            atsImagesList.length;

    }

}


/* PREVIOUS ATS IMAGE */

function previousATSImage() {

    currentATSImage--;


    if (currentATSImage < 0) {

        currentATSImage =
            atsImagesList.length - 1;

    }


    showATSImage();

}


/* NEXT ATS IMAGE */

function nextATSImage() {

    currentATSImage++;


    if (currentATSImage >= atsImagesList.length) {

        currentATSImage = 0;

    }


    showATSImage();

}

/* =========================================================
   ATS - ELECTRICAL CONTROL CIRCUITS TASK GALLERY
========================================================= */

const atsTaskImagesList = [

    "../Task-Images/ats/4.jpeg",
    "../Task-Images/ats/5.jpeg"

];

let currentATSTaskImage = 0;


/* OPEN ATS TASK GALLERY */

function openATSTaskImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("ats-task-gallery");

    const counter =
        document.getElementById("ats-task-counter");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentATSTaskImage = 0;

    gallery.style.display = "flex";

    if (counter) {
        counter.style.display = "block";
    }

    showATSTaskImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT ATS TASK IMAGE */

function showATSTaskImage() {

    const image =
        document.getElementById("ats-task-image");

    const counter =
        document.getElementById("ats-task-counter");

    if (!image || !atsTaskImagesList.length) return;

    image.src = atsTaskImagesList[currentATSTaskImage];

    if (counter) {
        counter.textContent =
            (currentATSTaskImage + 1) +
            " / " +
            atsTaskImagesList.length;
    }

}


/* PREVIOUS ATS TASK IMAGE */

function previousATSTaskImage() {

    currentATSTaskImage--;

    if (currentATSTaskImage < 0) {
        currentATSTaskImage =
            atsTaskImagesList.length - 1;
    }

    showATSTaskImage();

}


/* NEXT ATS TASK IMAGE */

function nextATSTaskImage() {

    currentATSTaskImage++;

    if (currentATSTaskImage >= atsTaskImagesList.length) {
        currentATSTaskImage = 0;
    }

    showATSTaskImage();

}

/* =========================================================
   UPS - LEARNING GALLERY
========================================================= */

const upsImagesList = [

    "../Learning-Images/classic_control/UPS/1.png",
    "../Learning-Images/classic_control/UPS/2.png",
    "../Learning-Images/classic_control/UPS/3.png",
    "../Learning-Images/classic_control/UPS/4.png"

];


let currentUPSImage = 0;


/* OPEN UPS GALLERY */

function openUPSImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("ups-gallery");

    const counter =
        document.getElementById("ups-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentUPSImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showUPSImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT UPS IMAGE */

function showUPSImage() {

    const image =
        document.getElementById("ups-image");

    const counter =
        document.getElementById("ups-counter");


    if (!image || !upsImagesList.length) return;


    image.src =
        upsImagesList[currentUPSImage];


    if (counter) {

        counter.textContent =
            (currentUPSImage + 1) +
            " / " +
            upsImagesList.length;

    }

}


/* PREVIOUS UPS IMAGE */

function previousUPSImage() {

    currentUPSImage--;


    if (currentUPSImage < 0) {

        currentUPSImage =
            upsImagesList.length - 1;

    }


    showUPSImage();

}


/* NEXT UPS IMAGE */

function nextUPSImage() {

    currentUPSImage++;


    if (currentUPSImage >= upsImagesList.length) {

        currentUPSImage = 0;

    }


    showUPSImage();

}



/* =========================================================
   POWER FACTOR - LEARNING GALLERY
========================================================= */

const powerFactorImagesList = [

    "../Learning-Images/classic_control/powerfactor/1.png",
    "../Learning-Images/classic_control/powerfactor/2.png",
    "../Learning-Images/classic_control/powerfactor/3.png",
    "../Learning-Images/classic_control/powerfactor/4.png",
    "../Learning-Images/classic_control/powerfactor/5.png"

];

let currentPowerFactorImage = 0;


/* OPEN POWER FACTOR GALLERY */

function openPowerFactorImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    if (!lightbox) return;

    hideAllTaskViews();

    currentPowerFactorImage = 0;

    const oldGallery =
        document.getElementById("powerfactor-gallery");

    const oldCounter =
        document.getElementById("powerfactor-counter");

    if (oldGallery) oldGallery.remove();
    if (oldCounter) oldCounter.remove();

    const gallery = document.createElement("div");

    gallery.id = "powerfactor-gallery";
    gallery.className = "relay-gallery";
    gallery.style.display = "flex";

    gallery.innerHTML = `
        <button
            class="relay-prev"
            onclick="previousPowerFactorImage()"
            aria-label="Previous Power Factor image"
        >
            ❮
        </button>

        <img
            id="powerfactor-image"
            src=""
            alt="Power Factor Image"
        >

        <button
            class="relay-next"
            onclick="nextPowerFactorImage()"
            aria-label="Next Power Factor image"
        >
            ❯
        </button>
    `;

    const counter = document.createElement("div");

    counter.id = "powerfactor-counter";
    counter.className = "relay-counter";
    counter.style.display = "block";

    lightbox.appendChild(gallery);
    lightbox.appendChild(counter);

    showPowerFactorImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT POWER FACTOR IMAGE */

function showPowerFactorImage() {

    const image =
        document.getElementById("powerfactor-image");

    const counter =
        document.getElementById("powerfactor-counter");

    if (!image || !powerFactorImagesList.length) return;

    image.src =
        powerFactorImagesList[currentPowerFactorImage];

    if (counter) {

        counter.textContent =
            (currentPowerFactorImage + 1) +
            " / " +
            powerFactorImagesList.length;

    }

}


/* PREVIOUS POWER FACTOR IMAGE */

function previousPowerFactorImage() {

    currentPowerFactorImage--;

    if (currentPowerFactorImage < 0) {

        currentPowerFactorImage =
            powerFactorImagesList.length - 1;

    }

    showPowerFactorImage();

}


/* NEXT POWER FACTOR IMAGE */

function nextPowerFactorImage() {

    currentPowerFactorImage++;

    if (
        currentPowerFactorImage >=
        powerFactorImagesList.length
    ) {

        currentPowerFactorImage = 0;

    }

    showPowerFactorImage();

}
