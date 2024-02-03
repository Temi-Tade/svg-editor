EDITOR.value = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%">\n\n</svg>`

const PARSE_CODE = (code) => {
    CANVAS.innerHTML = code
}

const FETCH_DATA = () => {
    let appData = CHECK_STORAGE()
    if (appData === null) {
        return
    } else {
        if (appData.theme === "dark") {
            LIGHTMODE_CSS.href = ''
        } else {
            LIGHTMODE_CSS.href = './css/lightmode.css'
        }

        if (appData.readonly === "on") {
            EDITOR.setAttribute("readonly", '')
        } else {
            EDITOR.removeAttribute("readonly")
        }

        EDITOR.style.fontSize = `${appData.fontsize}px`
        SHOW_TOAST(`App Data Loaded`)
    }
}

FETCH_DATA()

const DOWNLOAD_SVG = (content, filename, contentType) => {
    let image_link = document.createElement('a')
    let image_file = new Blob([content], {type: contentType})
    image_link.href = URL.createObjectURL(image_file)
    image_link.download = filename
    image_link.click()
    URL.revokeObjectURL(image_link.href)
}