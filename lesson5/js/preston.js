function menu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function park() {
    var mydate = new Date();

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    var park = document.getElementById("parkBanner").value
    
      if (daym = "Friday") {
        var parkDisplay = print("park");
      }

      document.getElementById("parkBanner").innerHTMl = parkDisplay;
  }

window.addEventListener('load', (event)=> {
    const lu = document.querySelector("#lastupdated");
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
})