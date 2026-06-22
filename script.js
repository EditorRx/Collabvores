/*=================================
MEMEVORES COLLAB HUB
SCRIPT.JS PART 1
=================================*/

const intro = document.getElementById("intro");
const website = document.getElementById("website");

const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

const copyBtn = document.getElementById("copyBtn");
const copyText = document.getElementById("copyText");

const searchInput = document.getElementById("searchInput");

const latestName = document.getElementById("latestName");
const latestVideo = document.getElementById("latestVideo");

/*========================
ENTER WEBSITE
========================*/

enterBtn.addEventListener("click", () => {

    music.play();

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        website.style.display = "block";

    },700);

});

/*========================
MUSIC TOGGLE
========================*/

let musicOn = true;

musicToggle.addEventListener("click",()=>{

    if(musicOn){

        music.pause();

        musicToggle.innerHTML="🔇";

    }

    else{

        music.play();

        musicToggle.innerHTML="🔊";

    }

    musicOn=!musicOn;

});

/*========================
POPUP
========================*/

openPopup.addEventListener("click",()=>{

    popup.style.display="flex";

});

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

/*========================
COPY BUTTON
========================*/

copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(copyText.value);

    copyBtn.innerHTML="✅ Copied!";

    setTimeout(()=>{

        copyBtn.innerHTML="📋 Copy Message";

    },1800);

});

/*========================
SEARCH
========================*/

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const rows=document.querySelectorAll("#collabTable tbody tr");

rows.forEach(row=>{

const text=row.innerText.toLowerCase();

if(text.includes(value))

row.style.display="";

else

row.style.display="none";

});

});
/*=================================
MEMEVORES COLLAB HUB
SCRIPT.JS PART 2
=================================*/

/*========================
LATEST COLLABORATION
========================*/

const collabRows = document.querySelectorAll("#collabTable tbody tr");

function updateLatestCollab(){

    const rows = document.querySelectorAll("#collabTable tbody tr");

    let latestRow = null;

    rows.forEach(row=>{

        const name = row.children[1].innerText.trim();

        if(name !== "Coming Soon..."){

            latestRow = row;

        }

    });

    if(!latestRow) return;

    latestName.innerText = latestRow.children[1].innerText;

    const videoLink = latestRow.children[3].querySelector("a");

    if(videoLink){

        latestVideo.href = videoLink.href;

    }

}

updateLatestCollab();

/*========================
FADE IN WEBSITE
========================*/

website.style.opacity = "0";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        website.style.transition =
        "opacity .8s ease";

        website.style.opacity = "1";

    },200);

});

/*========================
SMOOTH SCROLL ANIMATION
========================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".hero,.latest-card,.table-section,.request-section,footer"
).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s ease";

observer.observe(el);

});

/*========================
COLLAB DATA
(For future use)
========================*/

const collaborators=[

{
number:"1",
name:"Creator One",
channel:"#",
video:"#"
},

{
number:"2",
name:"Creator Two",
channel:"#",
video:"#"
}

];

/*========================
CONSOLE MESSAGE
========================*/

console.log(
"%cMemevores Collab Hub",
"font-size:22px;color:#8b5cf6;font-weight:bold;"
);

console.log(
"%cCreated by Memevores ⚔️",
"font-size:14px;color:#06b6d4;"
);

/*========================
READY
========================*/

document.body.classList.add("loaded");

const rulesPopup=document.getElementById("rulesPopup");

const rulesBtn=document.getElementById("rulesBtn");

const closeRules=document.getElementById("closeRules");

const agreeRules=document.getElementById("agreeRules");

const telegramBtn=document.getElementById("telegramBtn");

rulesBtn.onclick=()=>{

rulesPopup.style.display="flex";

};

closeRules.onclick=()=>{

rulesPopup.style.display="none";

};

agreeRules.onchange=()=>{

if(agreeRules.checked){

rulesPopup.style.display="none";

popup.style.display="flex";

copyBtn.disabled=false;

telegramBtn.classList.remove("disabled");

}

};
