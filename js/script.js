$(document).ready(() => {
  let number = parseInt($("#test").text(), 10) || 0; // Get the number from paragraph

  // Called the function in each second
  let interval = setInterval(() => {
    $("#test").text(number++); // Update the value in paragraph

    return number > 1000 && clearInterval(interval); // If exceeded 1000 clear interval
  }, 1000); // Run for each second
});
