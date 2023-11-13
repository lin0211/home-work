function emailCheck(input) {
  const email = input;
  if (
    email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ) {
    document.getElementById("email-invalid").style.visibility = "hidden";
  } else {
    document.getElementById("email-invalid").style.visibility = "visible";
  }
}

function showPwd() {
  const pwd = document.getElementById("input-password");
  if (pwd.type === "password") {
    pwd.type = "text";
    document.getElementById("show-pwd").style.backgroundImage =
      "url(./images/icon/eye1.svg)";
  } else {
    pwd.type = "password";
    document.getElementById("show-pwd").style.backgroundImage =
      "url(./images/icon/eye2.svg)";
  }
}
