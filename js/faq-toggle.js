const faqContainer = document.querySelector(".faq .list");
const toggleButtonsFaq =
faqContainer.querySelectorAll(".toggle-button");

toggleButtonsFaq.forEach((button) => {
  button.addEventListener("click", function () {
    // if (button.classList.includes("opened")) {
    //   button.textContent = "-";
    // } else {
    //   button.textContent = "+";
    // }
    button.classList.toggle("active");
    const faqItem = button.closest(".faq .list .item");
    faqItem.classList.toggle("active");
  });
});
