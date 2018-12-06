/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle("slow");
        //$(".submenu").slideToggle("slow");
    });

    let content = "content1.txt";
    let cString = `${content}`;
    $("#content").load(content);

    let content2 = "content2.txt";
    let cString2 = `${content2}`;

    $("#choose-content").change(function() {
        let content2 = "content2.txt";
        let cString2 = `${content2}`;
        $("#content").load(cString2);
    });