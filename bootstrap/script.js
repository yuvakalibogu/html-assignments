
document.getElementById('toggleButton').addEventListener('click', (e) => {
   
    if(e.target.value == "YES"){

        document.getElementById("sidebar").classList.remove("d-sm-block")
        document.getElementById("main-menu").classList.remove("col-sm-10")
        e.target.value = "NO"
    }else{
        document.getElementById("sidebar").classList.add("d-sm-block")
        document.getElementById("main-menu").classList.add("col-sm-10")
        e.target.value = "YES"
    }
});

