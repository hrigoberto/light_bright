$(document).ready(function(){
var container = $('.container');
var numOfRows = $('#Rows')
var numOfCols = $('#Columns')
var submit = $('#submit')
var colorClasses = ['red', 'green', 'blue', 'white'];
var colorCycle = colorClasses.length-4;
var previousCell;


  submit.on('click', initGrid);
  // addClickHandlers();
  submit.on('click', addClickHandlers2);
  submit.on('click', testFunction);

  function addClickHandlers2(){
      var cells = $('.cell');
      cells.on('click', changeColor);
  }

  function testFunction(){
    console.log(numOfRows);
    console.log(numOfCols);

  }

  function changeColor(){
  if(previousCell === this){
      // var color = ['white', 'red', 'green', 'blue'];
      var color = colorClasses[colorCycle];
      if(colorCycle > 3){
        colorCycle = 0
      } else {
      $(this).removeClass(colorClasses.join(' '));
      $(this).addClass(color);
      colorCycle += 1;
      console.log(colorCycle);
    }
  }else {
    colorCycle = 0;
    previousCell = this;
  }
};
  // function addClickHandlers(){
  //   var cells = $('.cell');
  //   for(var counter = 0; counter < cells.length; counter += 1){
  //     var cell = cells[counter];
  //     $(cell).on('click', changeColor);
  //   }
  // }
  function initGrid(){
      $('.container').empty();
      // submit.addClass('disabled');
      // submit.attr('disabled', true);
      for(var i = 0; i < numOfRows.val(); i += 1){
        var row = $('<div></div>');
        row.addClass('row');
        for(var j = 0; j < numOfCols.val(); j += 1){
          var cell = $('<div></div>');
          cell.addClass('cell border');
          row.append(cell);
        }
        container.append(row);
      }
  }
});
