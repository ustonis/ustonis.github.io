function rules() {
    window.location.href = "rules.html";
}

function backToMain() {
    window.location.href = "main.html";
}

function changeGame() {
    window.location.href = "change.html";
}


document.getElementById('all').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const isChecked = this.checked;
    
    checkboxes.forEach(checkbox => {
        if (checkbox !== this) {
            checkbox.checked = isChecked;
        }
    });
});


function returnToMain() {
    localStorage.setItem('difGame', null);
    window.location.href = "index.html"
}





