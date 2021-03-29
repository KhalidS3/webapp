/**
 * main.js
 */
"use strict";

(function MAIN_IIFE() {
    let rootfElement = document.getElementById("root");

    let mainContainer = document.createElement("main");

    mainContainer.className = "container";

    let navigation = document.createElement("nav");

    navigation.className = "bottom-nav";

    let showHome = function() {
        mainContainer.innerHTML = "";

        let title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Khalid Safi";

        let greeting = document.createElement("p");
        let timeOfDayGreeting = "Hej";
        let now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", jag heter Khalid Safi och är student i kursen webapp.";

        let image = document.createElement("img");

        image.src = "khalid.jpg";
        image.alt = "Khalid Safi";

        mainContainer.appendChild(title);
        mainContainer.appendChild(greeting);
        mainContainer.appendChild(image);

        rootfElement.appendChild(mainContainer);

        showMenu("home");
    };

    let showMenu = function(selected) {
        navigation.innerHTML = "";

        let navElements = [
            { name: "Me", class: "home", nav: showHome },
            { name: "Om", class: "free_breakfast", nav: showAbout },
            { name: "Github", class: "folder", nav: ShowGithub }
        ];

        navElements.forEach(function(element) {
            let navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            let icon = document.createElement("i");

            icon.className = "material-icon";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            let text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            navigation.appendChild(navElement);
        });
        rootfElement.appendChild(navigation);
    };
    let githubRequest = new XMLHttpRequest();

    githubRequest.addEventListener("load", renderGithubRepos);

    showHome();
})();
