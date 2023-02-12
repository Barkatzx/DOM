document.getElementById('btn-delete').addEventListener('click', function(){
    const secretInfo = document.getElementById('secret-info');
    secretInfo.style.display = 'none';
})

document.getElementById('text-field').addEventListener('keyup', function(event){
   const text = event.target.value;
   const deleteButton = document.getElementById('btn-delete');
   if(text === 'DELETE'){
    deleteButton.removeAttribute('disabled');
   }
   else{
    deleteButton.setAttribute('disabled', true);
   }
   deleteButton.value = '';
})