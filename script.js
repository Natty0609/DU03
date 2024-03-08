const updateSkill = (id, level) => {
    const dovednosti = document.querySelector(`#${id} .skill__progress`);
    const hodnota = document.querySelector(`#${id} .skill__value`);
    hodnota.textContent = `${level} / 100`;
    dovednosti.style.width = `${level}%`;
};

const dovednostiHTML = prompt("Jake jsou váše dovednosti z 0-100 v HTML");
const dovednostiCSS = prompt("Jake jsou váše dovednosti z 0-100 v CSS");
const dovednostiJS = prompt("Jake jsou váše dovednosti z 0-100 v Javascript");

updateSkill('skill1', dovednostiHTML);
updateSkill('skill2', dovednostiCSS);
updateSkill('skill3', dovednostiJS);