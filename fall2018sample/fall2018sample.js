/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle("slow");
        //$(".submenu").slideToggle("slow");
    });

    let content = "content1.txt";
    $("#content").load(content);