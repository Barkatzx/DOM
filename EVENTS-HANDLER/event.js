// Option Number One (Same Function Two Method)
function handlerOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled By Function Attached On Onclick Attribute';
}
// Option Number Two (Same Function Two Method)
document.getElementById('handler-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text Updated By Add Event Listener';
})
// Option Two Recap For Update Text Input Button (Input Field Fill Up)
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '';
})