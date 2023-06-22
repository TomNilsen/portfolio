const main = document.querySelector("main");

const project1 = {
  name: "Kreativ programmering",
  img: "/images/Clocks.png",
  alt: "Clocks",
  desc: "Under kursen Kreativ programmering arbetade jag med det externa Javascript biblioteket p5.js. P5 låter programmeraren skapa unika visuella animationer, infoga musik och ljudeffekter samt skapa enkla spel med Javascript kod. Animationen föreställande flera klockor som börjar ticka när användaren klickar på skärmen. Animationen och formerna är helt skapade i kod.",
  demo: "https://tomnilsen.github.io/clocks/",
  github: "https://github.com/TomNilsen/clocks",
};

const project2 = {
  name: "Praktik för Södertörns högskola externa relationer",
  img: "/images/SHUB.png",
  alt: "SHUB",
  desc: "Under praktik perioden arbetade jag med att skapa en prototyp av ett tidigare examensprojekt som två tidigare elever skapat. Examensarbetet gick ut på att skapa en databas där studenter kunde komma i kontakt med uppdragsgivare för praktik och andra projekt. Examensarbetet var skapat i Adobe XD och det var min uppgift att skapa en prototyp i HTML, CSS, Javascript, PHP, SQL och jQuery kod. Jag har alltså inte gjort några av dem grafiska designvalen utan endast översatt Adobe XD projektet till kod.",
  demo: "",
  github: "",
};

const project3 = {
  name: "Examensarbete för It, medier & design",
  img: "/images/HBTQsocial.png",
  alt: "HBTQ-social",
  desc: "Som sista moment på utbildningen It, medier och design arbetade jag på ett enskilt examensprojekt under 10 veckor. Under perioden skapade jag en social medieplattform för HBTQIA+-personer där användarna kan skapa och delta på varandras evenemang. På hemsidan kan användaren skapa ett konto som närsomhelst går att ändra eller radera, samt skapa evenemang som närsomhelst kan ändras eller raderas. Hemsidan är uppbyggd med HTML, CSS, Javascript, jQuery, PHP och SQL kod, de grafiska elementen är skapade i adobe Illustrator. Idén till projektet och alla dess delar är helt skapade av mig, jag har även utfört användartester på personer från relevant målgrupp för att förbättra hemsidan.",
  demo: "",
  github: "",
};

const project4 = {
  name: "Dynamiska webbaplikationer CSS upgift",
  img: "/images/Surf.png",
  alt: "LOREM IPSUM SURF CO",
  desc: "Under kursen Dynamiska webbapplikationer fick vi skapa CSS koden för en hemsida med färdig HTML kod. Hemsidan är skapad för ett fiktivt företag och innehåller ett formulär där användaren kan skriva upp sig för nyhetsbrev och en tabell med olika lektioner och priser. Jag använde en CSS-reset fil och kunde därför helt välja stil, färger och bakgrund. Hemsidan är även anpassad för mobil och surfplatta.",
  demo: "https://tomnilsen.github.io/surf/",
  github: "https://github.com/TomNilsen/surf",
};

const projects = [project4, project3, project2, project1];

for (let i = 0; i < projects.length; i++) {
  createCard(projects[i]);
}

function createCard(project) {
  const card = document.createElement("article");
  card.className = "card";
  main.appendChild(card);

  const h3 = document.createElement("h3");
  h3.innerText = project.name;
  card.appendChild(h3);

  const div1 = document.createElement("div");
  card.appendChild(div1);

  const img = document.createElement("img");
  img.src = project.img;
  img.alt = project.alt;
  div1.appendChild(img);

  const div2 = document.createElement("div");
  div1.appendChild(div2);

  const p = document.createElement("p");
  p.innerText = project.desc;
  div2.appendChild(p);

  const linkContainer = document.createElement("div");
  linkContainer.className = "link-container";
  div2.appendChild(linkContainer);

  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-laptop-code";
  if (project.demo === "") {
    const deadLink1 = document.createElement("p");
    deadLink1.appendChild(icon1);
    const deadLinkText1 = document.createElement("span");
    deadLinkText1.innerText = " Live demo unavialable";
    deadLink1.appendChild(deadLinkText1);
    linkContainer.appendChild(deadLink1);
  } else {
    const link1 = document.createElement("a");
    link1.href = project.demo;
    link1.className = "demo";
    link1.appendChild(icon1);
    const linkText1 = document.createElement("span");
    linkText1.innerHTML = " Live demo";
    link1.appendChild(linkText1);
    linkContainer.appendChild(link1);
  }

  const icon2 = document.createElement("i");
  icon2.className = "fa-brands fa-github";
  if (project.github === "") {
    const deadLink2 = document.createElement("p");
    deadLink2.appendChild(icon2);
    const deadLinkText2 = document.createElement("span");
    deadLinkText2.innerText = " Github unavialable";
    deadLink2.appendChild(deadLinkText2);
    linkContainer.appendChild(deadLink2);
  } else {
    const link2 = document.createElement("a");
    link2.href = project.github;
    link2.className = "github";
    link2.appendChild(icon2);
    const linkText2 = document.createElement("span");
    linkText2.innerHTML = " Github";
    link2.appendChild(linkText2);
    linkContainer.appendChild(link2);
  }
}
