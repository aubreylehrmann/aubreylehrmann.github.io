// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addItem);
      // on click of the button, run the addItem function
  // $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});



// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  // console.log("Yup!")
  var text = window.prompt("Give Kurt a compliment");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<wtf><br>" + text + " " + delete_link + "</wtf>");
  // HTML version of above : <li>Watch Hockey <a href="#" class="link-delete">(Delete)</a>
  var numItems = $("wtf").length;
  // length is a property
  $(".total").html(numItems + " compliments");
  // total is the class




  // Challenge: Differentiate between 1 item vs. more items
  if (numItems===1) {
    //single = is an assignment,
    $(".total").html(numItems + " compliment");
  }
  else {
    $(".total").html(numItems + " compliments")
  }


}




// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();  -- NO GOOD CODE!
  $(event.target).parent().remove();
  $(event.target).parent().fadeOut();

  var numItems = $("wtf").length;
  $(".total").html(numItems + " compliments");
}
