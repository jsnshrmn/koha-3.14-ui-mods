    $("#nav-menu-trigger").on("click",function(){
        var mem = $("#navmembers");
        if(mem.is(":hidden")){
            mem.show();
        } else {
            mem.removeAttr("style");
        }
    });
    $(".navModal-trigger").on("click",function(e){
        e.preventDefault();
        $("#navModal").modal("show");
        $("#navmembers").removeAttr("style");
    });
    $("#navModal").on("hide",function(){
        if($("#nav-menu-trigger").is(":hidden")){
            $("#navmembers").removeAttr("style");
        }
    });
