const JsonFile = "user.json";
const container = document.querySelector("#container");
const Secondary_education = document.querySelector("#Secondary_education");
const High_education = document.querySelector("#High_education");
const All = document.querySelector("#All");
const input = document.querySelector("#input");
fetch(JsonFile)
  .then((response) => response.json())
  .then((data) => critecard(data));

function critecard(arr) {
  arr.forEach((element) => {
    if (element.user && element.user.id) {
      const card = document.createElement("div");
      const id = document.createElement("h1");
      const FullName = document.createElement("h2");
      const Gender = document.createElement("p");
      const Date_of_birth = document.createElement("p");
      const City = document.createElement("p");
      const Work = document.createElement("p");
      const Education = document.createElement("p");
      const Telephone = document.createElement("p");
      const G_mail = document.createElement("p");

      id.innerText = element.user.id;
      FullName.innerText = element.user.FullName;
      Gender.innerText = element.user.Gender;
      Date_of_birth.innerText = element.user.Date_of_birth;
      City.innerText = element.user.City;
      Work.innerText = element.user.Work;
      Education.innerText = element.user.Education;
      Telephone.innerText = element.user.Telephone;
      G_mail.innerText = element.user.G_mail;
      card.classList.add("card");
      card.append(
        id,
        FullName,
        Gender,
        Date_of_birth,
        City,
        Work,
        Education,
        Telephone,
        G_mail
      );
      container.appendChild(card);
    }
  });
}
All.addEventListener("click", () => {
  const card = document.querySelectorAll(".card");
  card.forEach((elem) => {
    elem.style.display = "flex";
  });
});

High_education.addEventListener("click", () => {
  const card = document.querySelectorAll(".card");
  card.forEach((elem) => {
    if (elem.children[6].innerText.includes("Ali")) {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  });
});
Secondary_education.addEventListener("click", () => {
  const card = document.querySelectorAll(".card");
  card.forEach((elem) => {
    if (elem.children[6].innerText.includes("Orta")) {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  });
});
