// Any future JavaScript functions or scripts can be added here
// For now, no additional scripts are necessary for the stripe effect since it's handled via CSS.
$(document).ready(function() {
    $('#toggleMoreInfo').click(function() {
        $('#moreInfo').slideToggle();
        $(this).text($(this).text() === 'Show More' ? 'Show Less' : 'Show More');
    });
});


// Smooth scroll for navigation links
$(document).ready(function(){
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
