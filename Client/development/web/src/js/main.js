forge.logging.info("Add JavaScript to js/main.js!");





$(document).ready(function() {

    $("#bilder").click(function(){

        forge.file.getImage({ },
            function(){
               alert("success");
            },
            function(){
                alert("error");
            });

    });


    $("#clickMe").click(function(){

        $.ajax({
            url:"http://localhost:99/helloword",
            dataType:"JSON",
            success:function(response){
                console.log(response);
                $("#result").html(response.msg);
            },
            error:function(e){
                alert(e);
            }
        });
    });




});



