
setInterval(time,1000);
function time()
    {
        const date = new Date();
        var sec = date.getSeconds();
        var min = date.getMinutes();
        var hour = date.getHours();

        var s = document.getElementById("sec");
        s_rotate = 6*sec - 90;
        s.style.transform = "rotate("+s_rotate+"deg)";
        s.style.transformOrigin = "top left";
    
        var m = document.getElementById("min");
        m_rotate = 6*min - 90;
        m.style.transform = "rotate("+m_rotate+"deg)";
        m.style.transformOrigin = "top left";
    
        var h = document.getElementById("hour");
        var hr = hour%12;
        h_rotate = (30*hr) - 90;
        h.style.transform = "rotate("+h_rotate+"deg)";
        h.style.transformOrigin = "top left";
    }

