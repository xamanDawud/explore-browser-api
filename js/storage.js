let setValueInLS = (btnId, fieldId, key) => {
    document.getElementById(btnId).addEventListener("click", function() {
        let inputField = document.getElementById(fieldId);
        let inputFieldValue = inputField.value;
        localStorage.setItem(key, inputFieldValue);
        // console.log(inputFieldValue);
    });
};

setValueInLS("btn-add", "input-field", "Name");
setValueInLS("btn-add-age", "input-field-age", "Age");

let removeItem = (btnId, inputId) => {
    document.getElementById(btnId).addEventListener("click", function() {
        let inputField = document.getElementById(inputId);
        let inputFieldValue = inputField.value;
        localStorage.removeItem(inputFieldValue);
        // console.log(inputFieldValue);
    });
};
removeItem("btn-remove", "input-field");
removeItem("btn-remove-age", "input-field-age");

document.getElementById("clear-ls-btn").addEventListener("click", function() {
    localStorage.clear();
});