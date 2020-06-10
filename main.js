$(document).ready(function(){

  $.ajax({
      // qui parte la chiamata ajax
      'url': 'https://157.230.17.132:4020/sales',
      'method': 'GET',
      'success': function(data) {


      },
      'error': function() {
            console.log('errore');
        }
  })

}
