window.addEventListener("keypress", (e) => {
    if(EDITOR === document.activeElement){
        return
    }else{
        switch (e.key.toUpperCase()) {
            case "S":
                OPEN_MODAL()
                break;
            case "R":
                if (CHECK_STORAGE().readonly === "off") {
                    SET_READONLY("on")
                } else {
                    SET_READONLY("off")
                }
            case "D":
                DOWNLOAD_SVG(CANVAS.innerHTML, 'image.svg', 'image/svg+xml')
            default:
                break;
        }
    }
})