
 document.querySelectorAll('.button-group').forEach(group => {
    group.addEventListener('click', (e) => {
        if (e.target.classList.contains('option-button')) {
            // For JS and Sports, allow multiple selections
            if (group.classList.contains('js-framework') || group.classList.contains('sports')) {
                e.target.classList.toggle('active');
            } 
            // For CSS framework, only one selection
            else if (group.classList.contains('css-framework')) {
                group.querySelectorAll('.option-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
            }
        }
    });
});


document.getElementById('toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});