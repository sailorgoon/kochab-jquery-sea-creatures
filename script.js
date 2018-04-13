console.log( 'script.js has been loaded' );

let clickCount = 0;

$(document).ready(onReady);

function onReady (){
    console.log( 'jquery has been loaded' );
    $('#addCreatureButton').on('click', clickHandler);
   // $('#counterButton').on('click', addNewCreature);
   //this is also legit ^^^

    
}


// $('button').on('click', function(){
//     console.log('counter button was clicked');
//     clickCount +1;
//     $('#clickCount').text(clickCounter);
// });

function clickHandler() {
    console.log('counter button was clicked');
    clickCount++;
    console.log( clickCount );
    updateDomCount() // this is calling the function.
    //without this, it is not being run.
//    $('#totalCount').text(clickCount);
    addNewCreature();
}
function updateDomCount() {
    $('#totalCount').text(clickCount);

}
 function addNewCreature(){
     console.log('hi')
     $('#creatureList').append(
        '<tr>' +
        '<td>' +$('#newCreatureName').val () + '</td>' +
        '<td>' +$('#newCreatureSize').val() + ' ft' + '</td>' +
        '<td>' +$('#newCreatureType').val() + '</td>' +
        '<td>' +$('#newCreatureSpeed').val() + ' mph' + '</td>' +
        '</tr>'
    );
    //  $('#addCreatureButton').on('click', function(){
    //  console.log('hi');
    //  });
    
 }
