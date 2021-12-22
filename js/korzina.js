
for(let i = 0; i < localStorage.length; i++) {
    let img = document.createElement("img");
    img.src = localStorage.getItem(`${i}`);
    test.appendChild(img)
}