const CHECK_STORAGE = () => {
    if (localStorage.getItem("svg_editor_app_data") === null) {
        const APP_DATA = {
            theme: "dark",
            readonly: "off",
            fontsize: "12",
        }
        localStorage.setItem("svg_editor_app_data", JSON.stringify(APP_DATA))
        return null
    } else {
        return JSON.parse(localStorage.getItem("svg_editor_app_data"))
    }
}

const UPDATE_STORAGE = (val) => {
    localStorage.setItem("svg_editor_app_data", JSON.stringify(val))
}

CHECK_STORAGE()