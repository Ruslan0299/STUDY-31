//третє завдання
function getData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let filtered_A = data.filter((obj) => obj.title.startsWith("a"));
      let filtered_AB = filtered_A.filter((obj) => obj.title.startsWith("ab"));

      let user_A = document.querySelector(".user-a");
      let user_AB = document.querySelector(".user-ab");

      user_A.innerHTML = "";
      user_AB.innerHTML = "";

      user_A.innerHTML = filtered_A
        .map((obj) => JSON.stringify(obj))
        .join("<br>");
      user_AB.innerHTML = filtered_AB
        .map((obj) => JSON.stringify(obj))
        .join("<br>");
    })
    .catch((error) => console.log(error));
}
getData("https://jsonplaceholder.typicode.com/todos/");

//четверте завдання
function getData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTPS error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let user_A = document.querySelector(".user-a");
      let user_AB = document.querySelector(".user-ab");

      document.querySelector(".add-a").addEventListener("click", () => {
        let filtered_A = data.filter((obj) => obj.title.startsWith("a"));
        user_AB.style.display = "none";
        user_A.style.display = "block";
        user_A.innerHTML = filtered_A
          .map((obj) => JSON.stringify(obj))
          .join("<br>");
      });

      document.querySelector(".add-ab").addEventListener("click", () => {
        let filtered_AB = data.filter((obj) => obj.title.startsWith("ab"));
        user_A.style.display = "none";
        user_AB.style.display = "block";
        user_AB.innerHTML = filtered_AB
          .map((obj) => JSON.stringify(obj))
          .join("<br>");
      });

      document.querySelector(".add-all").addEventListener("click", () => {
        let filtered_A = data.filter((obj) => obj.title.startsWith("a"));
        let filtered_AB = data.filter((obj) => obj.title.startsWith("ab"));
        user_A.style.display = "block";
        user_AB.style.display = "block";
        user_A.innerHTML = filtered_A
          .map((obj) => JSON.stringify(obj))
          .join("<br>");
        user_AB.innerHTML = filtered_AB
          .map((obj) => JSON.stringify(obj))
          .join("<br>");
      });
    })
    .catch((error) => console.log(error));
}
getData("https://jsonplaceholder.typicode.com/todos/");
