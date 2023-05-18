const addparamBtn = document.getElementById("addparambtn");
const delparamBtn = document.getElementById("removeparambtn");
const inputbox = document.querySelector(".inputbox");

addparamBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  // document.write("되고있긴한거");
  const newparam = document.createElement("label");
  newparam.class = "inputwhat";
  document.body.appendChild(newparam);

  const newlabel = document.createElement("a");
  newlabel.id = "param";
  newlabel.innerHTML =
    "parameter " + (inputbox.querySelectorAll("#param").length + 1);
  inputbox.appendChild(newlabel);

  const newinput = document.createElement("input");
  newinput.type = "text";
  newinput.className = "input";
  newinput.placeholder = "값을 입력하세요";
  inputbox.appendChild(newinput);
});

delparamBtn.addEventListener("click", () => {
  const existparam = Array.from(inputbox.querySelectorAll(".input"));
  const existlabel = Array.from(inputbox.querySelectorAll("#param"));
  if (existparam.length > 0) {
    let index = existparam.length - 1;
    const lastparam = existparam[index];
    const lastlabel = existlabel[index];
    lastparam.remove();
    lastlabel.remove();
  }
});
