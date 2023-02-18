const colorArray = [
  "Tomato",
  "Orange",
  "DodgerBlue",
  "MediumSeaGreen",
  "Gray",
  "SlateBlue",
  "Violet",
  "LightGray",
];

document.getElementById("card1").addEventListener("mouseover", function () {
  let num = Math.floor(Math.random() * 8);
  document.getElementById("card1").style.backgroundColor = colorArray[num];
});

document.getElementById("card2").addEventListener("mouseover", function () {
  let num = Math.floor(Math.random() * 8);
  document.getElementById("card2").style.backgroundColor = colorArray[num];
});

document.getElementById("card3").addEventListener("mouseover", function () {
  let num = Math.floor(Math.random() * 8);
  document.getElementById("card3").style.backgroundColor = colorArray[num];
});

document.getElementById("card4").addEventListener("mouseover", function () {
  let num = Math.floor(Math.random() * 8);
  document.getElementById("card4").style.backgroundColor = colorArray[num];
});

document.getElementById("card5").addEventListener("mouseover", function () {
  let num = Math.floor(Math.random() * 8);
  document.getElementById("card5").style.backgroundColor = colorArray[num];
});

document.getElementById("card6").addEventListener("mouseover", function () {
  let num = Math.floor(Math.random() * 8);
  document.getElementById("card6").style.backgroundColor = colorArray[num];
});

document.getElementById("btn-triangle").addEventListener("click", function () {
  const b = parseFloat(document.getElementById("input-b").value);
  const h = parseFloat(document.getElementById("input-h").value);

  if (isNaN(b) || isNaN(h)) {
    alert("Please Enter Correct Input");
  } else if (b < 0 || h < 0) {
    alert("Input Value Should be Greater than 1");
  } else {
    const area = 0.5 * b * h;

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));

    td1.innerHTML = "Triangle";
    td2.innerHTML = area;
    document.getElementById("area-table").appendChild(tr);
  }
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const w = parseFloat(document.getElementById("input-w").value);
  const l = parseFloat(document.getElementById("input-l").value);

  if (isNaN(w) || isNaN(l)) {
    alert("Please Enter Correct Input");
  } else if (w < 0 || l < 0) {
    alert("Input Value Should be Greater than 1");
  } else {
    const area = w * l;

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));

    td1.innerHTML = "Rectangle";
    td2.innerHTML = area;
    document.getElementById("area-table").appendChild(tr);
  }
});
