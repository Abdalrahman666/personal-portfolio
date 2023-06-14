/* instead of bringing the nav bar to each page, i decided to do it the fancy way and bring the pages to the nav bar in the main html page index.html ... i could've used jquery to load the nav into a nav contianer in each page but i didn't... just to show that i can use async await and fetch api
 */

let homeLoad = async () => {
  let homeResponse = await fetch("pages/home.html");
  let home = await homeResponse.text();
  let mainElement = document.querySelector("main");
  mainElement.innerHTML = await home;

  return home;
};

homeLoad();

let linkButtons = document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", async (e) => {
    let element = e.target.name;
    let mainElement = document.querySelector("main");
    let homeElement = homeLoad();

    let aboutResponse = await fetch("pages/about.html");
    let contactResponse = await fetch("pages/contact.html");
    let projectsResponse = await fetch("pages/projects.html");

    let about = await aboutResponse.text();
    let contact = await contactResponse.text();
    let projects = await projectsResponse.text();

    switch (element) {
      case "home":
        mainElement.innerHTML = await homeElement;
        break;
      case "about":
        mainElement.innerHTML = await about;
        break;
      case "contact":
        mainElement.innerHTML = await contact;
        break;
      case "projects":
        mainElement.innerHTML = await projects;
        break;
    }
  });
});

// dark mode

let darkModeButton = document.querySelector(".dark-mode-button");
darkModeButton.addEventListener("click", (e) => {
  let body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    e.target.innerHTML = "light mode";
  } else {
    e.target.innerHTML = "dark mode";
  }
});

//loader

$(document).ready(() => {
  $(".loader").css("display", "flex").delay(3000).fadeOut(200);
});
