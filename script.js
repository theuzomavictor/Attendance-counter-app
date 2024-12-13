
let count = 0;
countEl = document.getElementById("count-el");
saveEl = document.getElementById("save-el");

function incrementCount() {
    count += 1;
    countEl.innerText = count;
    console.log(count);

}

function save() {
    let entries = ` ${count} - `;
    saveEl.textContent += entries;
    console.log(count);
    countEl.innerText = 0;
    count = 0;
}
