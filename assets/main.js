

if (window != null) {
    window.onload = ready;
}

var defaultBG = "#60ff76"
function ready() {
    el(".outdated").style.display = "none";
    el(".mainTable").style.opacity = 1;

    let bgColors = ["#db3a3a", "#3accdb", "rgb(115, 193, 21)", "#1c1c1c","#d7d7d7"];
    var links = [
        "https://www.youtube.com/channel/UChraQeO5cjYneoD221BRHpw",
        "https://twitter.com/g4mingaz",
        "https://gamejolt.com/@GamingasCZ",
        "https://www.deviantart.com/gamingascz",
        "https://github.com/GamingasCZ",
        "https://odysee.com/@GamingasCZ:4",
        "https://www.reddit.com/user/jsemzbrna",
        "https://gamingascz.newgrounds.com/",
        "https://www.twitch.tv/g4mingas",
        "https://soundcloud.com/gamingascz",
    ]

    var sTextEl = Array.from(document.querySelectorAll(".socialText"));
    var sHeadEl = Array.from(document.querySelectorAll(".socialHead"));
    var sImgReal = Array.from(document.querySelectorAll(".socialImg"));

    el(".title").style.transform = "translateY(0px)"

    document.querySelectorAll(".socialText").forEach(element => {
        element.addEventListener("mouseover", () => {
            sImgReal[sTextEl.indexOf(element)].style.transform = "rotate(20deg) scale(1.1)"
            sHeadEl[sTextEl.indexOf(element)].style.transform = "scale(1.1) translateX(1vw)"
            el("body").style.backgroundColor = bgColors[sTextEl.indexOf(element)]
            if (sTextEl.indexOf(element) == 3) {
                document.querySelectorAll("h2").forEach(col => {
                    col.style.color = "white"
                })
                document.querySelectorAll("h3").forEach(col => {
                    col.style.color = "white"
                })
            }

            sTextEl.forEach(el => {
                if (element != el) {
                    el.style.opacity = 0.5
                }
            })
        })
    });

    document.querySelectorAll(".socialText").forEach(element => {
        element.addEventListener("mouseout", () => {
            sImgReal[sTextEl.indexOf(element)].style.transform = "rotate(0deg) scale(1)"
            sHeadEl[sTextEl.indexOf(element)].style.transform = "scale(1) translateX(0)"
            el("body").style.backgroundColor = `#60ff76`
            if (sTextEl.indexOf(element) == 3) {
                document.querySelectorAll("h2").forEach(col => {
                    col.style.color = "rgb(36, 36, 36)";
                })
                document.querySelectorAll("h3").forEach(col => {
                    col.style.color = "rgb(36, 36, 36)";
                })
            }

            sTextEl.forEach(el => {
                if (element != el) {
                    el.style.opacity = 1
                }
            })
        })
    });


    document.querySelectorAll(".socialText").forEach(element => {
        element.addEventListener("click", () => {
            window.open(links[sTextEl.indexOf(element)])
        })
    });

    mobileView()
    window.addEventListener("resize", () => { mobileView() })
}

function mobileView() {
    if (window.innerWidth-220 < window.innerHeight) {
        document.querySelectorAll(".socialText").forEach(element => {
            element.style.flexDirection = "column"
            el(".title").style.fontSize = "17vw"

            document.querySelectorAll(".moreText").forEach(moreText => {
                moreText.style.fontSize = "7vw !important"
            })

            el("#moreSocials").style.flexDirection = "column"

            if (element.children.length == 2) {
                element.children[1].style.fontSize = "6vw"
            }
            
        })
    }
    else {
        document.querySelectorAll(".socialText").forEach(element => {
            element.style.flexDirection = "row";
            el(".title").style.fontSize = "8vw";

            document.querySelectorAll(".moreText").forEach(moreText => {
                moreText.style.fontSize = "1.5vw !important"
            })

            el("#moreSocials").style.flexDirection = "row"

            if (element.children.length == 2) {
                element.children[1].style.fontSize = "2.5vw"
            }
        })
    }
}

function moreSocials() {
    let socials = el("#moreSocials");

    let hidden = toggleVis(socials);
    if (hidden) {
        socials.style.transform = "scaleY(0)"
        el("#more").innerHTML = "Více";
    }
    else {
        socials.style.transform = "scaleY(1)"
        el("#more").innerHTML = "Méně";
    }
}

