let dropped = false;

function toggleDropdown(id) {
    document.querySelector("#" + id + ' .dropdown-content').classList.toggle("show");
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        const target = event.target;
        if (target.parentElement.classList.contains('dropdown')) {
            toggleDropdown(target.parentElement.id);
        }
    })
}