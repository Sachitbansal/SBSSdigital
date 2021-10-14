!function () {
    "use strict";
    var l = (e, t) => (e = e.trim(), t ? [...document.querySelectorAll(e)] : document.querySelector(e)),
        o = (t, e, i, o) => {
            let a = l(e, o);
            a && (o ? a.forEach(e => e.addEventListener(t, i)) : a.addEventListener(t, i))
        }, e = (e, t) => {
            e.addEventListener("scroll", t)
        };
    let t = l("#navbar .scrollto", !0);
    var i = () => {
        var i = window.scrollY + 200;
        t.forEach(e => {
            var t;
            !e.hash || (t = l(e.hash)) && (i >= t.offsetTop && i <= t.offsetTop + t.offsetHeight ? e.classList.add("active") : e.classList.remove("active"))
        })
    };
    window.addEventListener("load", i), e(document, i);
    var a, s = e => {
        var t = l("#header").offsetHeight, e = l(e).offsetTop;
        window.scrollTo({top: e - t, behavior: "smooth"})
    };
    let n = l("#header");
    n && (a = () => {
        100 < window.scrollY ? n.classList.add("header-scrolled") : n.classList.remove("header-scrolled")
    }, window.addEventListener("load", a), e(document, a));
    let r = l(".back-to-top");
    r && (a = () => {
        100 < window.scrollY ? r.classList.add("active") : r.classList.remove("active")
    }, window.addEventListener("load", a), e(document, a)), o("click", ".mobile-nav-toggle", function (e) {
        l("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x")
    }), o("click", ".navbar .dropdown > a", function (e) {
        l("#navbar").classList.contains("navbar-mobile") && (e.preventDefault(), this.nextElementSibling.classList.toggle("dropdown-active"))
    }, !0), o("click", ".scrollto", function (e) {
        if (l(this.hash)) {
            e.preventDefault();
            let t = l("#navbar");
            if (t.classList.contains("navbar-mobile")) {
                t.classList.remove("navbar-mobile");
                let e = l(".mobile-nav-toggle");
                e.classList.toggle("bi-list"), e.classList.toggle("bi-x")
            }
            s(this.hash)
        }
    }, !0), window.addEventListener("load", () => {
        window.location.hash && l(window.location.hash) && s(window.location.hash)
    });
    let d = l("#preloader");
    d && window.addEventListener("load", () => {
        d.remove()
    }), new Swiper(".clients-slider", {
        speed: 400,
        loop: !0,
        autoplay: {delay: 5e3, disableOnInteraction: !1},
        slidesPerView: "auto",
        pagination: {el: ".swiper-pagination", type: "bullets", clickable: !0},
        breakpoints: {
            320: {slidesPerView: 2, spaceBetween: 40},
            480: {slidesPerView: 3, spaceBetween: 60},
            640: {slidesPerView: 4, spaceBetween: 80},
            992: {slidesPerView: 6, spaceBetween: 120}
        }
    }), window.addEventListener("load", () => {
        var e = l(".portfolio-container");
        if (e) {
            let t = new Isotope(e, {itemSelector: ".portfolio-item"}), i = l("#portfolio-flters li", !0);
            o("click", "#portfolio-flters li", function (e) {
                e.preventDefault(), i.forEach(function (e) {
                    e.classList.remove("filter-active")
                }), this.classList.add("filter-active"), t.arrange({filter: this.getAttribute("data-filter")}), t.on("arrangeComplete", function () {
                    AOS.refresh()
                })
            }, !0)
        }
    }), GLightbox({selector: ".portfolio-lightbox"}), new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: !0,
        autoplay: {delay: 5e3, disableOnInteraction: !1},
        pagination: {el: ".swiper-pagination", type: "bullets", clickable: !0}
    }), new Swiper(".testimonials-slider", {
        speed: 600,
        loop: !0,
        autoplay: {delay: 5e3, disableOnInteraction: !1},
        slidesPerView: "auto",
        pagination: {el: ".swiper-pagination", type: "bullets", clickable: !0}
    }), window.addEventListener("load", () => {
        AOS.init({duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1})
    })
}();



