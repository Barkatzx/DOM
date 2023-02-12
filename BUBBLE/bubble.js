// Body Click Function
document.getElementById('body').addEventListener('click', function(){
    console.log('Body Clicked');
})
// Section Container Click Function
document.getElementById('list-container').addEventListener('click', function(){
    console.log('Section Container Clicked');
})
// UL Item Click Function
document.getElementById('list-ul').addEventListener('click', function(){
    console.log('Ul Clicked');
})
// List Item Click Function
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item 2 Click')
    // Stop Propagation In Event Bubble
    event.stopPropagation();
})
