$(function() {
  var $a1 = $('#a1'),
    $a2 = $('#a2'),
    $a3 = $('#a3'),
    $b = $('#b'),
    a = {};

  $b.on('click', function() {
    a = {
        data: $a1.val()+','+ $a2.val()+','+$a3.val(),
        sheetUrl: 'https://docs.google.com/spreadsheets/d/18R3zHLh7szsJYwnqrWdm4MDWTK6ncYLl6Apb6FNnHu4/edit#gid=0',
        sheetTag: 'ipinfo'
    };
    console.log(a);
    $.get('https://script.google.com/macros/s/AKfycbzvYY_nEei79_UfUm_rXzLoVBRcUaRjZ_IvmNRiOKNxN1smm-cP/exec', a);
  });
});