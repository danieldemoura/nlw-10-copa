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
        <figure>
            <img class="bandeira" src="./assets/icon-${play1}.svg" alt="${play1}" onmouseout="ocultarJogador()">
            <figcaption class="name-country">${play1}</figcaption>
        </figure>
        <figure>
            <strong class="hour">${hour}</strong>
            <strong class="stage-group">${group}</strong>
        </figure>
        <figure>
            <img class="bandeira" src="./assets/icon-${play2}.svg" alt="${play2}" onmouseout="ocultarJogador()">
            <figcaption class="name-country">${play2.replace("suica","suiça")}</figcaption>
        </figure>
    </li>   

    `
}

function creatCard(date, day, stage, games) {
    return `

    <div class="card">
        <div>
            <h2>${date} <span>${day}</span></h2>
            <span class="stage">${stage}</span>
            <img id="jogador" alt="">
        </div>
        <ul>             
            ${games}  
        </ul>  
    </div>

    `
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


function addedTime() {
    let time1 = inputTime1.value.toLowerCase()
    let time2 = inputTime2.value.toLowerCase()
    let hour = inputHour.value
    let group = inputGroup.value.toLowerCase()

    document.querySelector(".card:nth-child(2) ul").innerHTML += creatGame(time1, hour, time2, group)
}



const body = document.querySelector("body")

const imgBandeiraJapao = document.querySelectorAll("img[alt=japao]")
const imgBandeiraChina = document.querySelectorAll("img[alt=china]")
const imgBandeiraBrasil = document.querySelectorAll("img[alt=brasil]")
const imgBandeiraUruguai = document.querySelectorAll("img[alt=uruguai]")
const imgBandeiraPortugal = document.querySelectorAll("img[alt=portugal]")
const imgBandeiraCoreiaDoSul = document.querySelectorAll("img[alt=coreia-do-sul]")
const imgBandeiraGana = document.querySelectorAll("img[alt=gana]")
const imgBandeiraSerbia = document.querySelectorAll("img[alt=serbia]")

imgBandeiraJapao.forEach((imgBandeiraJapao) =>  
    imgBandeiraJapao.addEventListener("click", function() {
        body.classList.remove("green", "china", "portugal", "serbia")
        body.classList.add("japao")
        console.log("japao")
    })
)
imgBandeiraChina.forEach((imgBandeiraChina) =>  
    imgBandeiraChina.addEventListener("click", function() {
        body.classList.remove("green", "japao", "portugal", "serbia")
        body.classList.add("china")
    })
)
imgBandeiraBrasil.forEach((imgBandeiraBrasil) =>
    imgBandeiraBrasil.addEventListener("click", function() {
        body.classList.remove("japao", "china", "portugal", "serbia")
        body.classList.add("green") 
    })
)
imgBandeiraPortugal.forEach((imgBandeiraPortugal) =>
    imgBandeiraPortugal.addEventListener("click", function() {
        body.classList.remove("japao", "china", "green", "serbia")
        body.classList.add("portugal") 
    })
)

imgBandeiraSerbia.forEach((imgBandeiraSerbia) =>
    imgBandeiraSerbia.addEventListener("click", function() {
        body.classList.remove("japao", "china", "green", "portugal")
        body.classList.add("serbia") 
    })
)



/* efetito de mostrar jogador ao passar o mouse em cima da bandeira do país */
const imgJogador = document.querySelector("#jogador")
imgBandeiraBrasil.forEach((imgBandeiraBrasil) =>
    imgBandeiraBrasil.addEventListener("mouseover", function() {
        imgJogador.style.display = "inline-block"
        imgJogador.setAttribute("src", "./assets/jogador/brasil-neymar.png")
    })
)

imgBandeiraUruguai.forEach((imgBandeiraUruguai) =>
    imgBandeiraUruguai.addEventListener("mouseover", function() {
        imgJogador.style.display = "inline-block"
        imgJogador.setAttribute("src", "./assets/jogador/uruguai-luis-suarez.png")
    })
)

imgBandeiraCoreiaDoSul.forEach((imgBandeiraCoreiaDoSul) =>
    imgBandeiraCoreiaDoSul.addEventListener("mouseover", function() {
        imgJogador.style.display = "inline-block"
        imgJogador.setAttribute("src", "./assets/jogador/coreia-do-sul-son-heung-min.png")
    })
)

imgBandeiraPortugal.forEach((imgBandeiraPortugal) =>
    imgBandeiraPortugal.addEventListener("mouseover", function() {
        imgJogador.style.display = "inline-block"
        imgJogador.setAttribute("src", "./assets/jogador/portugal-cristiano-ronaldo.png")
    })
)

imgBandeiraGana.forEach((imgBandeiraGana) =>
    imgBandeiraGana.addEventListener("mouseover", function() {
        imgJogador.style.display = "inline-block"
        imgJogador.setAttribute("src", "./assets/jogador/gana-christian-atsu.png")
    })
)

imgBandeiraSerbia.forEach((imgBandeiraSerbia) =>
    imgBandeiraSerbia.addEventListener("mouseover", function() {
        imgJogador.style.display = "inline-block"
        imgJogador.setAttribute("src", "./assets/jogador/serbia-aleksandar-kolarov.png")
    })
)




// function ocultarJogador() {
//     imgJogador.setAttribute("src", "")
// }


const mainCard = document.querySelector("main#cards")   
const divCard = document.querySelectorAll("div.card")
const imgButtonViewList = document.querySelector("#view-list")
const imgButtonViewGrid = document.querySelector("#view-grid")

imgButtonViewList.addEventListener("click", () =>
    divCard.forEach((divCard) => 
        divCard.style.display = "flex",
        mainCard.style.flexFlow = "column"
    )
)
imgButtonViewGrid.addEventListener("click",  () =>
    divCard.forEach((divCard) => 
        divCard.style.display = "block",
        mainCard.style.flexFlow = "row",
        imgJogador.style.display = "none"
    )
)


const openDialog = document.querySelector(".open-dialog")
openDialog.addEventListener("click", () => dialog.showModal())