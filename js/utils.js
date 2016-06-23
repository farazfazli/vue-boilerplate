$('.carousel').carousel({
    interval: 3000
})

// Stack menu when collapsed
$('#collapse').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
});

// Unstack menu when not collapsed
$('#collapse').on('hide.bs.collapse', function() {
    $('.nav-pills').removeClass('nav-stacked');
});

// Close open navbar when item tapped
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});