// I create the object panels, which contains all the elements with the class ‘panel’.
const panels = document.querySelectorAll(".panel");

// Function to add the word ‘active’ to classList, so that it applies the corresponding css formatting, generating the desired effect.
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    // console.log("panels", panels);
  });
});

// Function to remove the word "active" of class panel.
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
