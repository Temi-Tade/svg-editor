const SET_THEME = (status) => {
    let appData = CHECK_STORAGE()
    if (status === "dark") {
        LIGHTMODE_CSS.href = ''
        appData.theme = "dark"
        UPDATE_STORAGE(appData)
        SHOW_TOAST(`Dark mode enabled`)
    } else {
        LIGHTMODE_CSS.href = './css/lightmode.css'
        appData.theme = 'light'
        UPDATE_STORAGE(appData)
        SHOW_TOAST(`Light mode enabled`)
    }
}

const SET_FONT_SIZE = (val) => {
    let appData = CHECK_STORAGE()
    EDITOR.style.fontSize = `${val}px`
    appData.fontsize = val
    UPDATE_STORAGE(appData)
}

const SET_READONLY = (val) => {
    let appData = CHECK_STORAGE()
    if (val === "on") {
        EDITOR.setAttribute("readonly", '')
        document.querySelector("#readonly_on").checked = true
        appData.readonly = "on"
        UPDATE_STORAGE(appData)
        SHOW_TOAST(`Readonly mode enabled`)
    } else {
        EDITOR.removeAttribute("readonly")
        document.querySelector("#readonly_off").checked = true
        appData.readonly = "off"
        UPDATE_STORAGE(appData)
        SHOW_TOAST(`Readonly mode disabled`)
    }
}

// text color
// autocomplete
// width snd height of output