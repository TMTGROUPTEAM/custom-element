class Popup extends HTMLElement {

    _container

    _title

    _yesButton
    _noButton

    constructor() {
        super();

        this.style.display = "none"
        this._createStyle()
        this._createContainer()
    }

    _createStyle = () => {
        this.style.position = "fixed"
        this.style.left = "0"
        this.style.top = "0"
        this.style.width = "100%"
        this.style.height = "100vh"
        this.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        this.style.justifyContent = "center"
        this.style.alignItems = "center"
    }


    _createContainer = () => {
        this._container = document.createElement("div")

        this._container.style.width = "300px"
        this._container.style.height = "200px"
        this._container.style.backgroundColor = "#fff"
        this._container.style.borderRadius = "8px"
        this._container.style.padding = "16px"
        this._container.style.boxSizing = "border-box"
        this._container.style.display = "flex"
        this._container.style.flexDirection = "column"
        this._container.style.alignItems = "center"

        this._createTitle()

        this.appendChild(this._container)
    }

    _createTitle = () => {
        this._title = document.createElement("h2")
        this._title.innerText = this.getAttribute("question")

        this._container.appendChild(this._title)

    }


    _createButtons = () => {
        let wrapper = document.createElement("div")
        this._container.appendChild(wrapper)

        this._yesButton = document.createElement("button")
        this._yesButton.innerText = "Да"

        this._noButton = document.createElement("button")
        this._noButton.innerText = "Нет"
        wrapper.appendChild(this._yesButton)
        wrapper.appendChild(this._noButton)


        this._noButton.onclick = this._closePopup

        this._yesButton.onclick = this._action
    }

    _action = () => {
        // console.log(true)
    }

    showPopup = (action) => {
        this._action = action
        this.style.display = "flex"
        this._createButtons()
    }

    _closePopup = () => {
        this.style.display = "none"
    }
}


customElements.define("custom-popup", Popup)



document.getElementById("delete").addEventListener("click", () => {

    document.getElementById("popup").showPopup(() => {
        console.log(".... delete")
    })
})