window.onload = function () {
    const submitBtn = document.getElementById('submit-btn');
    const clearBtn = document.getElementById('clear-btn');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
    });

    function clearFields() {
        const formsElements = document.querySelectorAll('input');
        const textArea = document.querySelector('textarea');
        for (let i = 0; i < formsElements.length; i += 1) {
            const userInput = formsElements[i];
            userInput.value = '';
            userInput.checked = false;
        }
        textArea.value = '';
    };
};