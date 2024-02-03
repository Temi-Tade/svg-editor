console.warn("Please note that errors that may be thrown by the browser console are not as a result of bugs.")
const CANVAS = document.querySelector("output")
const EDITOR = document.querySelector("#code")
const SETTINGS_BTN = document.querySelector("#settings")
const CLOSE_MODAL_BTN = document.querySelector("#close_modal_btn")
const MODAL = document.querySelector("#modal_bg")
const TOAST = document.querySelector("#toast_text")
const COORDS = document.querySelector("#coords")
const LIGHTMODE_CSS = document.querySelector("#lightmode")

const SHOW_TOAST = (text) => {
    TOAST.innerHTML = text
    TOAST.parentElement.style.top = "0"
    setTimeout(() => {
        TOAST.parentElement.style.top = "-7rem"
    }, 4000);
}

const OPEN_MODAL = () => {
    MODAL.animate({
        opacity: [0,1]
    },
    duration = 500
    )
    MODAL.style.display = "block"

    let appData = CHECK_STORAGE()
    if (appData.theme === "dark") {
        document.querySelector("#dark_theme").checked = true
    } else {
        document.querySelector("#light_theme").checked = true
    }

    if (appData.readonly === "on") {
        document.querySelector("#readonly_on").checked = true
    } else {
        document.querySelector("#readonly_off").checked = true
    }

    document.querySelector("#font_size").value = appData.fontsize

    CLOSE_MODAL_BTN.onclick = () => {
        MODAL.style.display = "none"
    }
}

const SHOW_COORDS = (e, y) => {
    COORDS.style.display = "block"
    COORDS.innerHTML = `X: ${e.offsetX}<br>Y: ${e.offsetY}`
    COORDS.style.top = `${e.offsetY - 25}px`
    COORDS.style.left = `${e.offsetX - 60}px`

    y.parentElement.onmouseout = () => {
        COORDS.style.display = 'none'
    }
}

EDITOR.onclick = () => {
    if (CHECK_STORAGE().readonly === "on") {
        SHOW_TOAST(`Editor is in Readonly mode, go to settings to change this.`)
    } else {
        return
    }
}