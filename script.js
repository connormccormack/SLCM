'use strict';
function main() {
  // function to add new list item
  $('#js-shopping-list-form').submit( event => {
    event.preventDefault();
    let input = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  $('#shopping-list-entry').val('');
  });

  // function to check or uncheck a list item (use toggleClass)
  
  $('.shopping-list').on( 'click', '.shopping-item-toggle', event => {
    console.log('check function working');
    $(event.target).closest('li')
      .find('.shopping-item')
      .toggleClass('shopping-item__checked');
  }); 
  

  // function to permanently remove items from list
  
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    console.log($(this));
    $(event.target).closest('li').remove()});
  
}

// main();
$(main);