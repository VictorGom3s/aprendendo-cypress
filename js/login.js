const login = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "admin" && password === "admin") {
      localStorage.setItem("logged_in", true);
      window.location.href = "/";
    } else {
      document.querySelector(".notification").style.display = "block";
      document.querySelector("#username").classList.add("is-danger");
      document.querySelector("#password").classList.add("is-danger");
    }
  });
};

login();
