export function hasAccessToPack() {
  document.body.classList.add("loading-indicator");
  const userChoices = JSON.parse(localStorage.getItem("userChoices"));

  if (userChoices) {
    if (!userChoices.choicesCompleted) {
      window.location.href = "/404";
      return;
    }
  } else {
    window.location.href = "/404";
    return;
  }

  // api here

  document.body.classList.remove("loading-indicator");
}

export function hasAccessToCheckout() {
  document.body.classList.add("loading-indicator");
  const paymentChoices = JSON.parse(localStorage.getItem("paymentChoices"));
  const userChoices = JSON.parse(localStorage.getItem("userChoices"));
  let login = false;

  if (userChoices && paymentChoices) {
    if (!paymentChoices.choicesCompleted || !userChoices.choicesCompleted) {
      window.location.href = "/404";
      return;
    }else if(!login) {
      window.location.href = "/login";
    }
  } else {
    window.location.href = "/404";
    return;
  }

  // api here

  document.body.classList.remove("loading-indicator");
}
