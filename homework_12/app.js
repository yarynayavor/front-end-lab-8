var rootNode = document.getElementById("root");
let divMain = document.createElement('div');

function getTree(elements, div) {
    let h1 = document.createElement('h1');
    h1.textContent = "Most popular tanks";
    div.classList.add('thumbnails');
    div.appendChild(h1);
    for (let i = 0; i < elements.length; i++) {
        let a = document.createElement('a');
        let imgPreview = document.createElement('img');
        imgPreview.setAttribute("src", `${elements[i].preview}`);
        imgPreview.setAttribute("alt", `${elements[i].model}`);
        imgPreview.classList.add("preview");

        let divTanks = document.createElement('div');
        divTanks.classList.add("tanks-thumbnails");
        let divTankInfo = document.createElement('div');
        divTankInfo.classList.add("tank-model-preview");
        let imgCountry = document.createElement('img');
        imgCountry.setAttribute("src", `${elements[i].country_image}`);
        imgCountry.setAttribute("alt", `${elements[i].country}`);
        imgCountry.classList.add("country");
        imgCountry.setAttribute("title", `${elements[i].country}`);
        let spanLevel = document.createElement('span');
        spanLevel.classList.add("level");
        let spanModel = document.createElement('span');
        spanLevel.textContent = elements[i].level;
        spanModel.textContent = elements[i].model;
        spanModel.classList.add("span-model");
        spanModel.setAttribute("title", `${elements[i].model}`);
        divTankInfo.appendChild(imgCountry);
        divTankInfo.appendChild(spanLevel);
        divTankInfo.appendChild(spanModel);


        divTanks.appendChild(imgPreview);
        divTanks.appendChild(divTankInfo);
        a.appendChild(divTanks);
        a.setAttribute("href", `#${elements[i].model.replace(/\s/g,"-")}`);
        a.setAttribute("title", "Click to details");
        div.appendChild(a);
    }
    return div;
}
let result = getTree(tanks, divMain);
rootNode.appendChild(result);