document.addEventListener("DOMContentLoaded", function(){
    var regex = /(\d+)/g;
    var table = document.getElementById("tr-back");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            // col.innerHTML = "PRUEBA";
            // .match(regex)

        }  
    }
});
