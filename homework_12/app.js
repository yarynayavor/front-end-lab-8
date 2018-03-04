var rootNode = document.getElementById("root");
let divMain = document.createElement('div');

function clear(item) {
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
    return item;
}

function getDetails(item, div) {
    let h1 = document.createElement('h1');
    clear(div);
    div.classList.remove('thumbnails');
    div.classList.add('tank-details');

    let divTankInfo = document.createElement('div');
    divTankInfo.classList.add("tank-model-details");

    let imgCountry = document.createElement('img');
    imgCountry.setAttribute("src", `${item.country_image}`);
    imgCountry.setAttribute("alt", `${item.country}`);
    imgCountry.classList.add("country-details");
    imgCountry.setAttribute("title", `${item.country}`);

    let spanLevel = document.createElement('span');
    spanLevel.textContent = "(level " + item.level + ")";
    spanLevel.classList.add("level-details");

    let spanModel = document.createElement('span');
    spanModel.textContent = item.model;
    spanModel.classList.add("span-model-details");
    spanModel.setAttribute("title", `${item.model}`);

    divTankInfo.appendChild(imgCountry);
    divTankInfo.appendChild(spanModel);
    divTankInfo.appendChild(spanLevel);

    h1.appendChild(divTankInfo);
    div.appendChild(h1);
    let divDetails = document.createElement('div');
    divDetails.classList.add("div-details");
    let divPreview = document.createElement('div');
    let divCharacter = document.createElement('div');

    let hP = document.createElement('h2');
    let hC = document.createElement('h2');

    hP.textContent = "Preview";
    hC.textContent = "Characteristic";

    divPreview.appendChild(hP);
    divCharacter.appendChild(hC);

    let table = document.createElement('table');
    for (p in item.details) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.textContent = p.replace(/[_]/g, " ");
        td2.textContent = item.details[p];
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    divCharacter.appendChild(table);

    let imgPreview = document.createElement('img');
    imgPreview.setAttribute("src", `${item.preview}`);
    imgPreview.setAttribute("alt", `${item.model}`);
    imgPreview.classList.add("preview-details");
    divPreview.appendChild(imgPreview);

    divDetails.appendChild(divPreview);
    divDetails.appendChild(divCharacter);
    div.appendChild(divDetails);

    let a = document.createElement('a');
    a.setAttribute("href", "#");
    a.setAttribute("id", "backToList");
    a.classList.add("back");
    a.textContent = "Back to list view";

    div.appendChild(a);

    return div;
}

function getPreviewTree(elements, div) {
    let h1 = document.createElement('h1');
    h1.textContent = "Most popular tanks";
    if (div.classList.contains("tank-details")) {
        div.classList.remove('tank-details');
        clear(div);
    }
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
        spanLevel.textContent = elements[i].level;
        spanLevel.classList.add("level");

        let spanModel = document.createElement('span');
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

function hashPlay(rootN) {
    if (location.hash.slice(1) === '') {
        rootN.appendChild(getPreviewTree(tanks, divMain));
    } else {
        tanks.forEach(item => {
            let k = item.model.replace(/\s/g, "-");
            if (k === location.hash.slice(1)) {
                rootN.appendChild(getDetails(item, divMain));
            }
        });

        let back = document.getElementById("backToList");
        back.addEventListener("click", function() {
            window.location.href.split('#')[0];
        });
    }
    return rootN;
}

window.addEventListener('load', function() {
    hashPlay(rootNode);
});

window.addEventListener("hashchange", function() {
    hashPlay(rootNode);
});