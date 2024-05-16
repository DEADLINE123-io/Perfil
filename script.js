function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* se light estiver ativado ele desativa, se estiver desativado ele ativa */

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto de Mike Brito com oculos")
  } else {
    img.setAttribute("alt", "foto de Mike Brito sem oculos")
  }
}
