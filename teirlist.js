function hi() {
    console.log("hi")
}

function play_now() {
    const theme_el = document.getElementById("theme");
    theme_el.play()
}

function audio_play_onload() {
    const theme_el = document.getElementById("theme");
    theme_el.volume = 1;
}

function audio_play_pause(x) {
    const theme_el = document.getElementById("theme");
    if (theme_el.volume == 1) {
        theme_el.volume = 0;
        const icon = document.getElementById("icon")
        icon.classList.toggle("fa-volume-xmark")
    }
    else {
        theme_el.volume = 1;
        icon.classList.toggle("fa-volume-xmark")
    }
}

function icon_change() {
    const icon = document.getElementById("icon")
    icon.classList.toggle("fa-volume-xmark")
}

