var _mtac = {"senseQuery": 1};
(function () {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500719613");
    mta.setAttribute("cid", "500719623");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
    mta.onload = function () {
        var event = new Event('matloaded');
        document.dispatchEvent(event);
    }
})();