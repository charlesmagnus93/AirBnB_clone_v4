$(document).ready(function() {
  const amenities = [];
  $('.popover input:checkbox').change(function() {
    if($(this).is(':checked')) {
      // amenities[$(this).attr('data-id')] = $(this).attr('data-name'); 
      amenities.push($(this).attr('data-name')); 
    } else {
      const index = amenities.indexOf($(this).attr('data-name'))
      amenities.splice(index, 1);
    }
    $('.amenities h4').text(amenities.join(', '));
  });
});