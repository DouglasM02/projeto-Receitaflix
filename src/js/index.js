function elementAdd(tag, className="") {
    const element = document.createElement(tag)
    if(className){
        element.classList.add(className)
    }
    return element
}

function createCard(imgUrl,titleContent, paragraphContent) {
    const baseURL = document.URL.split("index.html")[0]
    const card = elementAdd("div","card")
    const img = elementAdd("img")
    img.src = `${baseURL}img/${imgUrl}`
    const title = elementAdd("h3","title")
    title.textContent = titleContent
    const paragraph = elementAdd("p")
    paragraph.textContent = paragraphContent
    const elements = [img, title, paragraph]
    card.append(...elements)
    return card

}

const cardGroupSalgado = document.getElementsByClassName("cards-group")[0]
let descriptions = ["coxinha","enroladinho de salsinha","tapioca","hamburguer com batata frita","pizza enrolada", "arroz doce"]
let lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore inventore alias aliquid explicabo cupiditate."

for(let i = 0; i<descriptions.length; i++) {
    const image = `0${i}.jpg`
    const description = descriptions[i]
    const card = createCard(image,description,lorem)
    cardGroupSalgado.append(card)
}


let cards = document.getElementsByClassName("card")
let cards_page = Math.ceil(cards.length/4)
let index = 0
let movePer = 20
let maxMove = 100
let isPressed = false
let rightMover = () => {
   /*  index = index + movePer
    if(cards == 1) {
        console.log(cards)
        index = 0
        }

    for(const i of cards) {
        if(index > maxMove) {index = index - movePer}
        i.style.left = "-" + index + "%"
    }*/
    index++
    for(let i of cards) {
        if(index == 0) {i.style.left = "0px"}
        if(index == 1) {i.style.left = "-740px"}
        if(index == 2) {i.style.left = "-1480px"}
        if(index == 3) {i.style.left = "-2220px"}
        if(index == 4) {i.style.left = "-2960px"}
        //if(index == 5) {i.style.left = "-3700px"}
        if(index > 4) {index = 4}
    }
}

let leftMover = () => {
   /* index = index - movePer
    if(index <= 0) {index = 0}
    for(const i of cards) {
        if(cards_page > 1){
            i.style.left = "-" + index + "%"
        }

    }*/
    index--
    for(let i of cards) {
        if(index == 0) {i.style.left = "0px"}
        if(index == 1) {i.style.left = "-740px"}
        if(index == 2) {i.style.left = "-1480px"}
        if(index == 3) {i.style.left = "-2220px"}
        if(index == 4) {i.style.left = "-2960px"}
        //if(index == 5) {i.style.left = "-3700px"}
        if(index < 0) {index = 0}
    }
}

cardGroup.addEventListener("mousedown", (e) => {
    isPressed = true
    //console.log("pressed")
    //console.log(e.region)
})

cardGroup.addEventListener("mouseup", (e) => {
    isPressed = false
    //console.log("unpressed")
})

cardGroup.addEventListener("mousemove", (e) => {
    let movementMouseX = e.movementX

    if(isPressed) {
        if(movementMouseX<0) {
            rightMover()
            isPressed = false
        }
        if(movementMouseX>0) {
            leftMover()
            isPressed = false
        }
    }
})
