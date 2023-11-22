"use strict";
const resetButton = document.createElement("button");
const formContainer = document.getElementById("form-container");
const formButton = document.getElementById("button");

const generateMadLib = function () {
  const restaurantName = document.getElementById("word1").value;
  const adjective = document.getElementById("word2").value;
  const adjective2 = document.getElementById("word3").value;
  const noun = document.getElementById("word4").value;
  const adjective3 = document.getElementById("word5").value;
  const verb = document.getElementById("word6").value;
  const adjective4 = document.getElementById("word7").value;
  const food = document.getElementById("word8").value;
  const bodyPart = document.getElementById("word9").value;
  const adjective5 = document.getElementById("word10").value;
  const clothing = document.getElementById("word11").value;
  const dessert = document.getElementById("word12").value;
  const color = document.getElementById("word13").value;
  const noun2 = document.getElementById("word14").value;
  const adjective6 = document.getElementById("word15").value;

  const madLib = `Last night I went to <span style="color: blue">${restaurantName}</span> for dinner. The food was <span style="color: blue">${adjective}</span> and <span style="color: blue">${adjective2}</span>, but I enjoyed the <span style="color: blue">${noun}</span>. Our waitress was kind of <span style="color: blue">${adjective3}</span> because she kept on <span style="color: blue">${verb}</span> and she got our order <span style="color: blue">${adjective4}</span>. She also dropped <span style="color: blue">${food}</span> on my mom's <span style="color: blue">${bodyPart}</span>. My mom was really <span style="color: blue">${adjective5}</span> because it ruined her <span style="color: blue">${clothing}</span>. For dessert, we got a <span style="color: blue">${dessert}</span> that had <span style="color: blue">${color}</span> frosting. It was pretty good but when I was chewing, I found a <span style="color: blue">${noun2}</span> in the middle. All in all, it was a <span style="color: blue">${adjective6}</span> experience.`;

  formContainer.innerHTML = ` <div class="madlib">${madLib}</div>`;
  formContainer.appendChild(resetButton);

  resetButton.innerHTML = "Reset";
  resetButton.classList.add("reset-button");
};

resetButton.addEventListener("click", function () {
  location.reload();
});

formButton.addEventListener("click", function (e) {
  e.preventDefault();
  generateMadLib();
});
