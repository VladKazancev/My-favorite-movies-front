export function checkUserData(email, password) {
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.email === email);
  if (!user) return "unknownUser";
  if (user.password !== password) return "wrongPassword";
}

export function htmlLocalization(t) {
  document.title = t("title");
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", t("content"));
  document.querySelector("noscript").textContent = t("noscript");
}

export function addUsers() {
  if (!localStorage.getItem("users"))
    localStorage.setItem(
      "users",
      JSON.stringify([
        { email: "Kazancev@yandex.ru", password: "password" },
        { email: "Database@mail.ru", password: "password1" },
      ])
    );
}
