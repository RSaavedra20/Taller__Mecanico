$("#correo-valido").hide();
$("#correo-no-valido").hide();
$("#contrasena-no-valida").hide();
$('#correo').on('keyup', function() {
    var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?.[\w]{2,4}/.test(this.value);
    if(!re) {
        $("#correo-no-valido").show().css({color:"red"});
        $("#correo-valido").hide();
    } else {
        $('#correo-no-valido').hide();
        $("#correo-valido").show().css({color:"green"});
    }
});


$("#enviar").click(function(){
    if($("#contrasena").val().length <2){ 
        $("#contrasena-no-valida").show().css({
            color:"red"
        });
        return false;
    } 
});