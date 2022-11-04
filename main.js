const inputTime1 = document.querySelector("#time1")
const inputTime2 = document.querySelector("#time2")
const inputGroup = document.querySelector("#group")
const inputHour = document.querySelector("#hour")


const dialog = document.querySelector("dialog")

const closeDialog = document.querySelector("#close-dialog")
closeDialog.addEventListener("click", () => {
    dialog.close()

    inputTime1.value = ""
    inputTime2.value = ""
    inputHour.value = ""
    inputGroup.value = ""
})


function creatGame(play1, hour, play2, group) {
    return `

    <li>
        <div>
            <img class="bandeira" src="./assets/icon-${play1}.svg" alt="${play1}">
            <span class="name-country">${play1}</span>
        </div>
        <div>
            <strong class="hour">${hour}</strong>
            <span class="stage-group">${group}</span>
        </div>
        <div>
            <img class="bandeira" src="./assets/icon-${play2}.svg" alt="${play2}">
            <span class="name-country">${play2.replace("suica","suiça")}</span>
        </div>
    </li>   

    `
}

function creatCard(date, day, stage, games) {
    return `

    <div class="card">
        <div>
            <h2>${date} <span>${day}</span></h2>
            <span class="stage">${stage}</span>
        </div>
        <ul>             
            ${games}  
        </ul>  
    </div>

    `
}

function addedTime() {
    let time1 = inputTime1.value.toLowerCase()
    let time2 = inputTime2.value.toLowerCase()
    let hour = inputHour.value
    let group = inputGroup.value.toLowerCase()

    console.log(time1 + " " + hour + " " + time2)

    document.querySelector(".card:nth-child(2) ul").innerHTML += creatGame(time1, hour, time2, group)
}

document.querySelector("#cards").innerHTML = 
    creatCard("24/11", "Quinta", "FASE 5",
    creatGame("uruguai", "10:00", "coreia-do-sul", "GRUPO H") + 
    creatGame("portugal", "13:00", "gana", "GRUPO H") +
    creatGame("brasil", "23:00", "serbia","GRUPO G")
    ) +
    creatCard("27/11", "Domingo", "FASE 6",
    creatGame("japao", "7:00", "china", "GRUPO E")
    ) +
    creatCard("28/11", "Segunda", "FASE 7",
    creatGame("coreia-do-sul", "10:00", "gana", "GRUPO H") +
    creatGame("brasil", "13:00", "suica","GRUPO G") +
    creatGame("portugal", "23:00", "uruguai", "GRUPO H")
    )

const body = document.querySelector("body")

const imgBandeiraJapao = document.querySelectorAll("img[alt=japao]")
imgBandeiraJapao.forEach((imgBandeiraJapao) =>  
    imgBandeiraJapao.addEventListener("click", function() {
        body.classList.remove("green", "china")
        body.classList.add("japao")
    })
)
const imgBandeiraChina = document.querySelectorAll("img[alt=china]")
imgBandeiraChina.forEach((imgBandeiraChina) =>  
    imgBandeiraChina.addEventListener("click", function() {
        body.classList.remove("green", "japao")
        body.classList.add("china")
    })
)
const imgBandeiraBrasil = document.querySelectorAll("img[alt=brasil]")
imgBandeiraBrasil.forEach((imgBandeiraBrasil) =>
    imgBandeiraBrasil.addEventListener("click", function() {
        body.classList.remove("japao", "china")
        body.classList.add("green") 
    })
)

/* Preciso arrumar */
const mainCard = document.querySelector("main#cards")   
const divCard = document.querySelector("div.card")

const imgButtonViewList = document.querySelector("#view-list")
const imgButtonViewGrid = document.querySelector("#view-grid")


imgButtonViewList.onclick = function() {
    divCard.style.display = "flex"
    mainCard.style.flexFlow = "column"
}
imgButtonViewGrid.onclick = function() {
    divCard.style.display = "block"
    mainCard.style.flexFlow = "row"
}


const openDialog = document.querySelector(".open-dialog")
openDialog.addEventListener("click", () => dialog.showModal())