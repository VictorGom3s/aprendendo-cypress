// TODO check if the user is already logged in

function submitForm() {
  const form = document.querySelector("form");
  const tbody = document.querySelector("tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    console.log(name, email);

    tbody.innerHTML += `
      <tr>
        <td>${name}</td>
        <td>${email}</td>
      </tr>`;
  });
}

submitForm();
