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

const cardGroup = document.getElementsByClassName("cards-group")[0]
let descriptions = ["coxinha","enroladinho de salsinha","tapioca","hamburguer com batata frita","pizza enrolada"]
let lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore inventore alias aliquid explicabo cupiditate."

for(let i = 0; i<5; i++) {
    const image = `0${i}.jpg`
    const description = descriptions[i]
    const card = createCard(image,description,lorem)
    cardGroup.append(card)
}
