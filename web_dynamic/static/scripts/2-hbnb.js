$(document).ready(function() {
  const amenities = [];
  $('.popover input:checkbox').change(function() {
    if($(this).is(':checked')) {
      amenities.push($(this).attr('data-name')); 
    } else {
      const index = amenities.indexOf($(this).attr('data-name'))
      amenities.splice(index, 1);
    }
    $('.amenities h4').text(amenities.join(', '));
  });
  apiStatus();
});

function apiStatus () {
  $.get('http://0.0.0.0:5001/api/v1/status/',
  function (data, textStatus) {
    if (textStatus === 'success') {
      $('#api_status').addClass('available');
      console.log('ok');
    } else {
      $('#api_status').removeClass('available');
      console.log('ko');
    }
  });
}