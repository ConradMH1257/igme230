$(".menu").click(function () {
    $(this).next(".items").slideToggle("slow");
        //$(".submenu").slideToggle("slow");
    });

        let article0 = ("article0.txt");  //this is the default article
        let article1 = ("article1.txt"); //second article
        let article2 = ("article2.txt") //thrid article

        let articleString = `${article0}`; //places the first article into a string

        $("article").val(articleString); // take the users pick
        $("article").load(articleString);

       

        