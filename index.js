const tuto = new GGBApplet(
  {
    appName: "2d",
    width: 800,
    height: 600,
    showToolBar: true,
    showAlgebraInput: true,
    showMenuBar: true,
  },
  true
);
window.addEventListener("load", () => {
  tuto.inject("tuto");
});

const graph1 = new GGBApplet(
  {
    appName: "nqr98wxq",
    width: 800,
    height: 600,
    showMenuBar: false,
    showAlgebraInput: false,
    showToolBar: false,
    showToolBarHelp: false,
    showResetIcon: false,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    errorDialogsActive: false,
    useBrowserForJS: true,
    preventFocus: false,
    material_id: "nqr98wxq",
  },
  true
);
window.addEventListener("load", () => {
  graph1.inject("graphique-1");
});

const graph2 = new GGBApplet(
  {
    appName: "n2gbntg2",
    width: 800,
    height: 600,
    showMenuBar: false,
    showAlgebraInput: false,
    showToolBar: false,
    showToolBarHelp: false,
    showResetIcon: false,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    errorDialogsActive: false,
    useBrowserForJS: true,
    preventFocus: false,
    material_id: "n2gbntg2",
  },
  true
);
window.addEventListener("load", () => {
  graph2.inject("graphique-2");
});

const graph3 = new GGBApplet(
  {
    appName: "n2gbntg2",
    width: 800,
    height: 600,
    showMenuBar: false,
    showAlgebraInput: false,
    showToolBar: false,
    showToolBarHelp: false,
    showResetIcon: false,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    errorDialogsActive: false,
    useBrowserForJS: true,
    preventFocus: false,
    material_id: "kfafzmxv",
  },
  true
);
window.addEventListener("load", () => {
  graph3.inject("graphique-3");
});

const graph4 = new GGBApplet(
  {
    appName: "n2gbntg2",
    width: 800,
    height: 600,
    showMenuBar: false,
    showAlgebraInput: false,
    showToolBar: false,
    showToolBarHelp: false,
    showResetIcon: false,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    errorDialogsActive: false,
    useBrowserForJS: true,
    preventFocus: false,
    material_id: "kxsnrrnh",
  },
  true
);
window.addEventListener("load", () => {
  graph4.inject("graphique-4");
});

const graph5 = new GGBApplet(
  {
    appName: "n2gbntg2",
    width: 800,
    height: 600,
    showMenuBar: false,
    showAlgebraInput: false,
    showToolBar: false,
    showToolBarHelp: false,
    showResetIcon: false,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    errorDialogsActive: false,
    useBrowserForJS: true,
    preventFocus: false,
    material_id: "svrdjmwa",
  },
  true
);
window.addEventListener("load", () => {
  graph5.inject("graphique-5");
});

const graph6 = new GGBApplet(
  {
    appName: "n2gbntg2",
    width: 800,
    height: 600,
    showMenuBar: false,
    showAlgebraInput: false,
    showToolBar: false,
    showToolBarHelp: false,
    showResetIcon: false,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    errorDialogsActive: false,
    useBrowserForJS: true,
    preventFocus: false,
    material_id: "wdecy9jp",
  },
  true
);
window.addEventListener("load", () => {
  graph6.inject("graphique-6");
});
//
//

const reponse1 = document.getElementById("reponse1");
const BoutonValider1 = document.getElementById("BoutonValider1");
const couleur1 = document.getElementById("couleur1");
const couleur1bis = document.getElementById("couleur1bis");

const reponse2 = document.getElementById("reponse2");
const BoutonValider2 = document.getElementById("BoutonValider2");
const couleur2 = document.getElementById("couleur2");
const couleur2bis = document.getElementById("couleur2bis");

const reponse3 = document.getElementById("reponse3");
const BoutonValider3 = document.getElementById("BoutonValider3");
const couleur3 = document.getElementById("couleur3");
const couleur3bis = document.getElementById("couleur3bis");

const reponse4 = document.getElementById("reponse4");
const BoutonValider4 = document.getElementById("BoutonValider4");
const couleur4 = document.getElementById("couleur4");
const couleur4bis = document.getElementById("couleur4bis");

const reponse5 = document.getElementById("reponse5");
const BoutonValider5 = document.getElementById("BoutonValider5");
const couleur5 = document.getElementById("couleur5");
const couleur5bis = document.getElementById("couleur5bis");

const reponse6 = document.getElementById("reponse6");
const BoutonValider6 = document.getElementById("BoutonValider6");
const couleur6 = document.getElementById("couleur6");
const couleur6bis = document.getElementById("couleur6bis");

BoutonValider1.addEventListener("click", () => {
  const input = document.getElementById("fonction-entree 1").value;
  if (input == "cos(x)") {
    couleur1.style.background = "green";
    couleur1.style.opacity = "1";
    couleur1bis.style.background = "green";
    couleur1bis.style.opacity = "1";
    reponse1.style.visibility = "visible";
  } else {
    couleur1bis.style.background = "red";
    couleur1bis.style.opacity = "1";
    couleur1.style.background = "red";
    couleur1.style.opacity = "1";
  }
});

BoutonValider2.addEventListener("click", () => {
  const input = document.getElementById("fonction-entree 2").value;
  if (input == "x^x") {
    couleur2.style.background = "green";
    couleur2.style.opacity = "1";
    couleur2bis.style.background = "green";
    couleur2bis.style.opacity = "1";
    reponse2.style.visibility = "visible";
  } else {
    couleur2bis.style.background = "red";
    couleur2bis.style.opacity = "1";
    couleur2.style.background = "red";
    couleur2.style.opacity = "1";
  }
});

BoutonValider3.addEventListener("click", () => {
  const input = document.getElementById("fonction-entree 3").value;
  if (input == "cos(ln(x))") {
    couleur3.style.background = "green";
    couleur3.style.opacity = "1";
    couleur3bis.style.background = "green";
    couleur3bis.style.opacity = "1";
    reponse3.style.visibility = "visible";
  } else {
    couleur3bis.style.background = "red";
    couleur3bis.style.opacity = "1";
    couleur3.style.background = "red";
    couleur3.style.opacity = "1";
  }
});
BoutonValider4.addEventListener("click", () => {
  const input = document.getElementById("fonction-entree 4").value;
  if (input == "x^(-x)" || input == "x^-x") {
    couleur4.style.background = "green";
    couleur4.style.opacity = "1";
    couleur4bis.style.background = "green";
    couleur4bis.style.opacity = "1";
    reponse4.style.visibility = "visible";
  } else {
    couleur4bis.style.background = "red";
    couleur4bis.style.opacity = "1";
    couleur4.style.background = "red";
    couleur4.style.opacity = "1";
  }
});
BoutonValider5.addEventListener("click", () => {
  const input = document.getElementById("fonction-entree 5").value;
  if (input == "cos(pi*sin(x))" || input == "cos(sin(x)*pi)") {
    couleur5.style.background = "green";
    couleur5.style.opacity = "1";
    couleur5bis.style.background = "green";
    couleur5bis.style.opacity = "1";
    reponse5.style.visibility = "visible";
  } else {
    couleur5bis.style.background = "red";
    couleur5bis.style.opacity = "1";
    couleur5.style.background = "red";
    couleur5.style.opacity = "1";
  }
});
BoutonValider6.addEventListener("click", () => {
  const input = document.getElementById("fonction-entree 6").value;
  if (input == "tan(ln(x))") {
    couleur6.style.background = "green";
    couleur6.style.opacity = "1";
    couleur6bis.style.background = "green";
    couleur6bis.style.opacity = "1";
    reponse6.style.visibility = "visible";
  } else {
    couleur6bis.style.background = "red";
    couleur6bis.style.opacity = "1";
    couleur6.style.background = "red";
    couleur6.style.opacity = "1";
  }
});
