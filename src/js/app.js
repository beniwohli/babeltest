function logMyArray(name, ...params) {
  var paramsString = params.join(", ");
  console.log(`Logging ${name} with values "${paramsStrin}"`);
}

function printUls() {
  $('ul').each(function() {
    var $ul = $(this);
    var entries = [];
    $('li', $ul).each(function() {
        entries.push($(this).innerText);
      })
      logMyArray($ul.attr('class'), ...entries)
    })
}
