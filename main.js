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
            <img class="bandeira" src="./assets/icon-${play1}.svg" alt="${play1}">
            <figcaption class="name-country">${play1}</figcaption>
        </figure>
        <figure>
            <strong class="hour">${hour}</strong>
            <strong class="stage-group">${group}</strong>
        </figure>
        <figure>
            <img class="bandeira" src="./assets/icon-${play2}.svg" alt="${play2}">
            <figcaption class="name-country">${play2.replace("suica","suiça")}</figcaption>
        </figure>
    </li>   

    `
}


function creatCard(card, jogadorCard, date, day, stage, games) {

    return `

    <div class="card ${card}">
        <div>
            <h2>${date} <span>${day}</span></h2>
            <span class="stage">${stage}</span>
            <img id="${jogadorCard}" class="jogador" src="./assets/jogador/padrao.svg">
        </div>
        <ul>             
            ${games}  
        </ul>  
    </div>

    `
}


document.querySelector("#cards").innerHTML = 
    creatCard("card1", "jogadorCard1", "24/11", "Quinta", "FASE 5",
    creatGame("uruguai", "10:00", "coreia-do-sul", "GRUPO H") + 
    creatGame("portugal", "13:00", "gana", "GRUPO H") +
    creatGame("brasil", "23:00", "serbia","GRUPO G")
    ) +
    creatCard("card2", "jogadorCard2", "27/11", "Domingo", "FASE 6",
    creatGame("japao", "7:00", "costa-rica", "GRUPO E")
    ) +
    creatCard("card3", "jogadorCard3", "28/11", "Segunda", "FASE 7",
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
const imgBandeiraBrasil = document.querySelectorAll("img[alt=brasil]")
const imgBandeiraUruguai = document.querySelectorAll("img[alt=uruguai]")
const imgBandeiraPortugal = document.querySelectorAll("img[alt=portugal]")
const imgBandeiraCoreiaDoSul = document.querySelectorAll("img[alt=coreia-do-sul]")
const imgBandeiraGana = document.querySelectorAll("img[alt=gana]")
const imgBandeiraSerbia = document.querySelectorAll("img[alt=serbia]")

const styleFlagOfCountries = ["uruguai", "coreia-do-sul", "portugal", "gana", "brasil", "serbia", "japao"]
function removeStyleFlagOfCountry(elementHtml) {
    styleFlagOfCountries.forEach( (currentCountryFlag) => {
        elementHtml.classList.remove(currentCountryFlag)
    })
}

function addedStyleFlagOfCountry(elementHtml, country) {
    let index = styleFlagOfCountries.indexOf(country)
    elementHtml.classList.add(styleFlagOfCountries[index])
}

imgBandeiraJapao.forEach((imgBandeiraJapao) =>  
    imgBandeiraJapao.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "japao")
    })
)

imgBandeiraBrasil.forEach((imgBandeiraBrasil) =>
    imgBandeiraBrasil.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "brasil")
    })
)
imgBandeiraPortugal.forEach((imgBandeiraPortugal) =>
    imgBandeiraPortugal.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "portugal")
    })
)

imgBandeiraSerbia.forEach((imgBandeiraSerbia) =>
    imgBandeiraSerbia.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "serbia")
    })
)

imgBandeiraCoreiaDoSul.forEach((imgBandeiraCoreiaDoSul) =>
    imgBandeiraCoreiaDoSul.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "coreia-do-sul")
    })
)

imgBandeiraUruguai.forEach((imgBandeiraUruguai) =>
    imgBandeiraUruguai.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "uruguai")
    })
)

imgBandeiraGana.forEach((imgBandeiraGana) =>
    imgBandeiraGana.addEventListener("click", function() {
        removeStyleFlagOfCountry(body)
        addedStyleFlagOfCountry(body, "gana")
    })
)


const imgJogador = document.querySelector(".jogador")
const divCardNumber1 = document.querySelector(".card1")
const divCardNumber2 = document.querySelector(".card2")
const divCardNumber3 = document.querySelector(".card3")

const imageJogadorCardNumber1 = document.querySelector("img#jogadorCard1")
const imageJogadorCardNumber3 = document.querySelector("img#jogadorCard3")


function mostrarJogador(country, elementImgJogador) {
    switch(country) {
        case "Uruguai": 
            elementImgJogador.style.display = "inline-block"
            elementImgJogador.setAttribute("src", "./assets/jogador/uruguai-luis-suarez.png")
        break
        case "Coreia do Sul":
            elementImgJogador.style.display = "inline-block"
            elementImgJogador.setAttribute("src", "./assets/jogador/coreia-do-sul-son-heung-min.png")
        break
        case "Portugal":
            elementImgJogador.style.display = "inline-block"
            elementImgJogador.setAttribute("src", "./assets/jogador/portugal-cristiano-ronaldo.png")
        break
        case "Gana":
            elementImgJogador.style.display = "inline-block"
            elementImgJogador.setAttribute("src", "./assets/jogador/gana-christian-atsu.png")
        break
        case "Brasil":
            elementImgJogador.style.display = "inline-block"
            elementImgJogador.setAttribute("src", "./assets/jogador/brasil-neymar.png")
        break 
        case "Serbia":
            elementImgJogador.style.display = "inline-block"
            elementImgJogador.setAttribute("src", "./assets/jogador/serbia-aleksandar-kolarov.png")
        break
    }
}

divCardNumber1.addEventListener("mouseover", function() {

    imgBandeiraUruguai.forEach((imgBandeiraUruguai) =>
        imgBandeiraUruguai.addEventListener("mouseover", function() {
            mostrarJogador("Uruguai", imageJogadorCardNumber1)
        })
    )

    imgBandeiraCoreiaDoSul.forEach((imgBandeiraCoreiaDoSul) =>
        imgBandeiraCoreiaDoSul.addEventListener("mouseover", function() {
            mostrarJogador("Coreia do Sul", imageJogadorCardNumber1)
        })
    )

    imgBandeiraPortugal.forEach((imgBandeiraPortugal) =>
        imgBandeiraPortugal.addEventListener("mouseover", function() {
            mostrarJogador("Portugal", imageJogadorCardNumber1)
        })
    )

    imgBandeiraGana.forEach((imgBandeiraGana) =>
        imgBandeiraGana.addEventListener("mouseover", function() {
            mostrarJogador("Gana", imageJogadorCardNumber1)
        })
    )

    imgBandeiraBrasil.forEach((imgBandeiraBrasil) =>
        imgBandeiraBrasil.addEventListener("mouseover", function() {
            mostrarJogador("Brasil", imageJogadorCardNumber1)
        }) 
    )

    imgBandeiraSerbia.forEach((imgBandeiraSerbia) =>
        imgBandeiraSerbia.addEventListener("mouseover", function() {
            mostrarJogador("Serbia", imageJogadorCardNumber1)
        })
    )

})

divCardNumber3.addEventListener("mouseover", function() {

    imgBandeiraCoreiaDoSul.forEach((imgBandeiraCoreiaDoSul) =>
        imgBandeiraCoreiaDoSul.addEventListener("mouseover", function() {
            mostrarJogador("Coreia do Sul", imageJogadorCardNumber3)
        })
    )

    imgBandeiraGana.forEach((imgBandeiraGana) =>
        imgBandeiraGana.addEventListener("mouseover", function() {
            mostrarJogador("Gana", imageJogadorCardNumber3)
        })
    )

    imgBandeiraBrasil.forEach((imgBandeiraBrasil) =>
        imgBandeiraBrasil.addEventListener("mouseover", function() {
            mostrarJogador("Brasil", imageJogadorCardNumber3)
        }) 
    )

    imgBandeiraPortugal.forEach((imgBandeiraPortugal) =>
        imgBandeiraPortugal.addEventListener("mouseover", function() {
            mostrarJogador("Portugal", imageJogadorCardNumber3)
        })
    )

    imgBandeiraUruguai.forEach((imgBandeiraUruguai) =>
        imgBandeiraUruguai.addEventListener("mouseover", function() {
            mostrarJogador("Uruguai", imageJogadorCardNumber3)
        })
    )

})

// const imageJogadores = document.querySelectorAll(".bandeira")
// imageJogadores.forEach((imageJogadores) => 
// imageJogadores.addEventListener("mouseout", function() {
//         mostrarJogador("padrao", imageJogadorCardNumber1)
//         mostrarJogador("padrao", imageJogadorCardNumber3)
//     })
// )

const mainCard = document.querySelector("main#cards")   
const divCard = document.querySelectorAll("div.card")
const imgButtonViewList = document.querySelector("#view-list")
const imgButtonViewGrid = document.querySelector("#view-grid")
const imgJogadorPadrao = document.querySelectorAll(".jogador")


function modeloJogadorPadrao(display) {
    imgJogadorPadrao.forEach((imgJogadorPadrao) => 
        imgJogadorPadrao.style.display = display,
        imgJogador.setAttribute("src", "./assets/jogador/padrao.svg")
    )
}

imgButtonViewList.addEventListener("click", function() {
        divCard.forEach((divCard) => 
            divCard.style.display = "flex",
            mainCard.style.flexFlow = "column",
            modeloJogadorPadrao("inline-block"),
        )
    }
)

imgButtonViewGrid.addEventListener("click", function() {
        divCard.forEach((divCard) => 
            divCard.style.display = "block",
            mainCard.style.flexFlow = "row",
            modeloJogadorPadrao("none"),
        )
    }
)

const openDialog = document.querySelector(".open-dialog")
openDialog.addEventListener("click", () => dialog.showModal())