var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
/*
// Set chosen colour and call cell colour function
function setColour(colour){
  $('#chosen-colour').css('background-color', colour);
  $( '#artboard td' ).click(function() {
    colourCell($(this), colour);
  });
};

// Set cell colour
function colourCell(cell, colour){
  cell.css("background-color", colour);
};

// When a cell on the colour table is clicked
$('.colourtable td').click(function(){
  $( '.colourtable td' ).css('border-color', '#e5e5e5');
  $(this).css('border-color', '#000000');
  theColour = $(this).css('background-color');
  setColour(theColour);
});

// When a colour is picked on the colour picker
$('#colour-picker').on('change', function(){
  theColour = $(this).val();
  setColour(theColour);
});

// Clear all cells
$( '#clear' ).click(function() {
  $('#artboard td').css('background-color', 'transparent');
});
