const panels = document.querySelectorAll('.panel');
 
panels.forEach( (panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})
setTimeout(function() { alert("Rotate to LANDSCAPE Mode"); }, 6000);

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
