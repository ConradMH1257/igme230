$(".menu").click(function () {//Calls the nav menu header
    $(this).next(".items").slideToggle("slow");//checks to see if there is anything below the nav header
    });