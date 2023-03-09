document.querySelector("#btnOne").addEventListener("click", showWindow1);
document.querySelector("#btnTwo").addEventListener("click", showWindow2);
document.querySelector("#btnThree").addEventListener("click", showWindow3);

function showWindow1() {
  document.querySelector("#content1").classList.remove("hidden");
  document.querySelector("#content2").classList.add("hidden");
  document.querySelector("#content3").classList.add("hidden");
}

function showWindow2() {
  document.querySelector("#content1").classList.add("hidden");
  document.querySelector("#content2").classList.remove("hidden");
  document.querySelector("#content3").classList.add("hidden");
}

function showWindow3() {
  document.querySelector("#content1").classList.add("hidden");
  document.querySelector("#content2").classList.add("hidden");
  document.querySelector("#content3").classList.remove("hidden");
}
