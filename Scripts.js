
(function ($) {


  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-description");
    const descriptionContent = document.getElementById("description-content");

    toggleButton.addEventListener("click", function () {
      if (descriptionContent.style.display === "none") {
        descriptionContent.style.display = "block";
        toggleButton.textContent = " Lees verder";
      } else {
        descriptionContent.style.display = "none";
        toggleButton.textContent = " Lees verder";
      }
    });
  });

  $(document).ready(function () {
    $(".toggle-button").on("click", function () {
      $("#shortext_display").toggle(); // Toggle the visibility of the details div
      // Change button text based on visibility
      //$(this).text($(this).text() === 'Show Details' ? 'Hide Details' : 'Show Details');
    });
  });

  







  
})(jQuery);
