import "./style.css";
import logo from "./logo.png";

const downloadPack = async () => {
  const res = await fetch("./pack.zip");
  const blob = await res.blob();
  window.open(window.URL.createObjectURL(blob));
};

document.querySelector("#app")!.innerHTML = `
  <img src=${logo} class="logo"/>
  <div>
    <button id="download">Download Pack</button>
    <h4>Install</h4>
    <p>1. Download the Pack <br /> 2. Import to MultiMC or compatible launcher (Prism Launcher, ATLauncher) <br /> 3. Run and enjoy</p>
  </div>
`;


document.querySelector("#download")!.addEventListener("click", downloadPack);
