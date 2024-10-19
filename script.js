/*filters tabs*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      /*tc = tabcontent*/
      tc.classList.remove("filtersActive");
    });
    target.classList.add("filtersActive");

    tabs.forEach((t) => {
      /*t = tab*/
      t.classList.remove("filterTabActive");
    });
    tab.classList.add("filterTabActive");
  });
});

/*dark light theme*/
const themeButton = document.getElementById('themeButton')
const darkTheme = 'darkTheme'
const iconTheme = 'ri-sun-line'

/*previously selected topic (if user selected)*/
const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')

/*we obtain the current theme that the interface has by validating the dark-theme class*/
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

/*we validate if the user previously chose a topic*/
if (selectedTheme) {
    /*if the validation is fulfilled, we ask */
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

/*Activate / deactivate the theme manually with the button*/
themeButton.addEventListener('click', () => {
    /*Add or remove the dark / icon theme*/
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    /*Add or remove the dark / icon theme*/
    localStorage.setItem('selectedTheme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
})

/*scroll reveal animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profileBorder`)
sr.reveal(`.profileName`, {delay: 500})
sr.reveal(`.profileProfession`, {delay: 600})
sr.reveal(`.profileSocial`, {delay: 700})
sr.reveal(`.profileInfoGroup`, {interval:100, delay: 800})
sr.reveal(`.profileButtons`, {delay: 800})
sr.reveal(`.filtersContent`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})
