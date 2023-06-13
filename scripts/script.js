/* instead of bringing the nav bar to each page, i decided to do it the fancy way and bring the pages to the nav bar in the main html page index.html ... i could've used jquery to load the nav into a nav contianer in each page but i didn't... just to show of i can use async await and fetch api
 */

let linkButtons = document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", async (e) => {
    let element = e.target.name;
    let mainElement = document.querySelector("main");

    let homeResponse = await fetch("pages/home.html");
    let aboutResponse = await fetch("pages/about.html");
    let contactResponse = await fetch("pages/contact.html");
    let projectsResponse = await fetch("pages/projects.html");

    let home = await homeResponse.text();
    console.log(home);
    let about = await aboutResponse.text();
    let contact = await contactResponse.text();
    let projects = await projectsResponse.text();

    switch (element) {
      case "home":
        mainElement.innerHTML = await home;
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
