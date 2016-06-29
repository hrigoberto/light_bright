$(document).ready(function(){
var container = $('.container');
var numOfRows = $('#Rows')
var numOfCols = $('#Columns')
var submit = $('#submit')

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
    var colorClasses = ['white', 'red', 'green', 'blue'];
    var colorCycle = Math.round(Math.random() * colorClasses.length);
    console.log(colorCycle);
    var color = colorClasses[colorCycle];
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(color);
    colorCycle += 1;
  }
  // function addClickHandlers(){
  //   var cells = $('.cell');
  //   for(var counter = 0; counter < cells.length; counter += 1){
  //     var cell = cells[counter];
  //     $(cell).on('click', changeColor);
  //   }
  // }
  function initGrid(){
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
