function rain() {
    document.getElementsByClassName("content")[0].innerHTML += ' <div class="area"><ul class="circles"></ul></div>'
    rainlist = document.getElementsByClassName("circles")[0];

    // append paths to rainlist and animate them
    for (i = 0; i < 2; i++) {
        var li = document.createElement("li");
        // Create two unique ids
        var id = "rain" + i;
        var id2 = "rain" + i + "b";
        paths = '<svg id="v" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"> <g transform="translate(154.7257710754555 146.5416250589939)"> <path id="' + id + '"d="M57 -60C70.7 -43.4 76.4 -21.7 78.7 2.4C81.1 26.4 80.1 52.8 66.5 68.6C52.8 84.5 26.4 89.7 -4.5 94.2C-35.4 98.7 -70.7 102.4 -83.2 86.5C-95.7 70.7 -85.4 35.4 -80.9 4.5C-76.4 -26.4 -77.8 -52.8 -65.3 -69.5C-52.8 -86.1 -26.4 -93.1 -2.4 -90.7C21.7 -88.4 43.4 -76.7 57 -60"fill="#d9534f"></path> </g> <g transform="translate(135.23844720183288 143.4022440231402)" style="visibility: hidden;"> <path id="' + id2 + '" d="M58.1 -85.2C80.8 -75.7 108.6 -69 119.9 -52.4C131.2 -35.8 126 -9.2 112.7 9.4C99.4 27.9 78 38.5 64.4 57.5C50.7 76.6 44.6 104 30 113.6C15.3 123.1 -8 114.8 -32.4 108.5C-56.9 102.2 -82.5 97.9 -91.8 82.3C-101.1 66.6 -94.1 39.6 -93.2 16.1C-92.3 -7.3 -97.6 -27.1 -90.3 -40.6C-83.1 -54 -63.5 -61.1 -46.3 -73.1C-29.2 -85.1 -14.6 -102 1.5 -104.4C17.7 -106.8 35.3 -94.6 58.1 -85.2"fill="#d9534f"></path></g></svg>'
        li.innerHTML += paths;
        rainlist.appendChild(li);

        KUTE.fromTo('#' + id, { path: '#' + id }, { path: '#' + id2 }, { repeat: 999, duration: 500, yoyo: true }).start();


    }

}