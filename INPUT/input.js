//System 01: Input Field Focus
document.getElementById('input-field').addEventListener('focus', function(){
    console.log('Focus In Input Field');
})
//System 02: Input Field Blur
document.getElementById('input-field').addEventListener('blur', function(){
    console.log('Blur In Input Field Blur');
})
//System 03: Input Field Mouse Move
document.getElementById('input-field').addEventListener('mousemove', function(){
    console.log('Mousemove In Input Field Mousemove');
})
//System 04: Input Field Keydown
document.getElementById('input-field').addEventListener('keydown', function(){
    console.log('Keydown In Input Field');
})
//System 05: Input Field KeyPress
document.getElementById('input-field').addEventListener('keypress', function(){
    console.log('Key Press In Input Field');
})
// System 06: Input Field Keyup
document.getElementById('input-field').addEventListener('keyup', function(){
    console.log(event.target.value);
})


// Button Function
document.getElementById('btn-more').addEventListener('click', function(){
    console.log('Event Triggerd');
})