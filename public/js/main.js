'use strict';

(function($) {

    $('#preloder').load('src/preloader.html');

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function() {

        $(".loader").visible = false;
        $("#preloder").fadeOut();


        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function() {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });
    // carousel autoplay
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        // items change number for slider display on desktop

        loop: true,
        // margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });



    // Fixed header
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };

    // Get the header
    var header = document.getElementById("header");
    header.classList.add("sticky");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function() {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function() {
        $('.search-model').fadeOut(400, function() {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function() {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function() {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function() {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;

    var timerdate = "2022/12/25"

    $("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Ng??y</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Gi???</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Ph??t</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Gi??y</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */

    // Add to cart
    var cartQuan = 0
    const cartCountInfo = document.getElementById('cart-count-info');
    const btn = document.querySelectorAll('.add-cart')
    const btnAdd = document.querySelectorAll('.primary-btn')
    btnAdd.forEach(function(a, index) {

        a.addEventListener("click", function(event) {
            var product = JSON.parse(localStorage.getItem('data'))
                // var btnItem = event.target
                // var product = btnItem.parentElement.parentElement
                // var productImage = product.querySelector(".ProductImage").src
                // var productName = product.querySelector("H4").innerText
                // var productPrice = product.querySelector("H3").innerText
                // var addtr = document.createElement("tr")
                // var addtrCheckout = document.createElement("tr")
                // var cartItem = document.querySelectorAll('.item')
                // var cartCount = parseInt(cartCountInfo.innerText) + 1
            var productImage = product.prImage
            var productName = product.prName
            var productPrice = product.prPrice

            var addtr = document.createElement("tr")
            var addtrCheckout = document.createElement("tr")
            var cartItem = document.querySelectorAll('.item')
            let newItems = {
                prImage: product.prImage,
                prName: product.prName,
                prPrice: product.prPrice,
                quty: 1
            }
            var cart = JSON.parse(localStorage.getItem('cart'))
            if (cart == null) {
                cart = []
            }
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].prName === product.prName) {
                    cart[i].quty += 1
                    alert("S???n ph???m ???? t???n t???i trong gi??? h??ng!")

                } else { cart.push(newItems) }
                localStorage.setItem('cart', JSON.stringify(cart))

                return
            }
            cart.push(newItems)
            localStorage.setItem('cart', JSON.stringify(cart))
            document.getElementById('cart-count-info').innerText = JSON.parse(localStorage.getItem('cart')).length


            // localStorage.setItem('productCount', parseInt(document.getElementById('cart-count-info').innerText) + 1)

            // for (var i = 0; i < cartItem.length; i++) {
            //     var productT = document.querySelectorAll(".title")
            //     if (productT[i].innerHTML == productName) {
            //         alert("S???n ph???m ???? t???n t???i trong gi??? h??ng!")
            //         return
            //     }
            // }

            // var Checkout = '<tr class="checkout_item"><td><div style="float: left; width: 150px;"><img src="../img/product/' + productImage + '" alt=""></div></td><td><div style="margin-left: 30px; width: 350px;"><p>T??n s???n ph???m: <strong>' + productName + '</strong></p><p>S??? l?????ng: <strong>1</strong></p><p>Gi??: <strong class="checkout_price">' + productPrice + '</strong></p></div></td></tr>'
            // addtrCheckout.innerHTML = Checkout
            // let htmlsCheckout = '<tr>' + Checkout + '</tr>'
            // if (localStorage.getItem('productCheckout') != null) {
            //     var current = localStorage.getItem('productCheckout');
            //     htmlsCheckout = current + htmlsCheckout;
            // }
            // localStorage.setItem('productCheckout', htmlsCheckout)

            // var trContent = '<tr class="item"><td class="product__cart__item"><div class="product__cart__item__pic"><img src="../img/product/' + productImage + '" alt=""></div><div class="product__cart__item__text"><h6 class="title">' + productName + '</h6><h5 class="productTotal">' + productPrice + '</h5></div></td><td class="quantity__item"><div class="quantity"><div class="pro-qty-2"><span onclick="DeCrease(this)" class="fa fa-angle-left dec qtybtn"></span><input class="qty-input" type="text" value="1"><span onclick="InCrease(this)" class="fa fa-angle-right inc qtybtn"></span></div></div></td><td class="cart__price">' + productPrice + '</td><td class="cart__close"><i class="fa fa-close"></i></td></tr>'
            // addtr.innerHTML = trContent
            // let htmls = '<tr>' + trContent + '</tr>'
            // if (localStorage.getItem('product') != null) {
            //     var current = localStorage.getItem('product');
            //     htmls = current + htmls;
            // }
            // localStorage.setItem('product', htmls)
            // console.log(localStorage.getItem('product'))
            // console.log(localStorage.getItem('productCheckout'))
            // alert("???? th??m s???n ph???m v??o gi??? h??ng")
            cartTotal()
        })
    })
    btn.forEach(function(a, index) {
        a.addEventListener("click", function(event) {
            // var btnItem = event.target
            // var product = btnItem.parentElement.parentElement
            // var productImage = product.querySelector('img').src
            // var productName = product.querySelector("H6").innerText
            // var productPrice = product.querySelector("H5").innerText
            // var addtr = document.createElement("tr")
            // var addtrCheckout = document.createElement("tr")
            // var cartItem = document.querySelectorAll('.item')
            // var cartCount = parseInt(cartCountInfo.innerText) + 1
            // localStorage.setItem('productCount', cartCount)
            // cartCountInfo.textContent = localStorage.getItem('productCount')
            // for (var i = 0; i < cartItem.length; i++) {
            //     var productT = document.querySelectorAll(".title")
            //     if (productT[i].innerHTML == productName) {
            //         alert("S???n ph???m ???? t???n t???i trong gi??? h??ng!")
            //         return
            //     }
            // }

            var btnItem = event.target
            var product = btnItem.parentElement.parentElement
            var productImage = product.querySelector('img').src.split('/').pop()
            var productName = product.querySelector("H6").innerText
            var productPrice = product.querySelector("H5").innerText

            var addtr = document.createElement("tr")
            var addtrCheckout = document.createElement("tr")
            var cartItem = document.querySelectorAll('.item')
            let newItems = {
                prImage: productImage,
                prName: productName,
                prPrice: productPrice,
                quty: 1
            }
            var cart = JSON.parse(localStorage.getItem('cart'))
            if (cart == null) {
                cart = []
            }
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].prName === product.prName) {
                    cart[i].quty += 1
                    alert("S???n ph???m ???? t???n t???i trong gi??? h??ng!")

                } else { cart.push(newItems) }
                localStorage.setItem('cart', JSON.stringify(cart))

                return
            }
            cart.push(newItems)
            localStorage.setItem('cart', JSON.stringify(cart))
            document.getElementById('cart-count-info').innerText = JSON.parse(localStorage.getItem('cart')).length


            // localStorage.setItem('productCount', parseInt(document.getElementById('cart-count-info').innerText) + 1)

            // var Checkout = '<tr class="checkout_item"><td><div style="float: left; width: 150px;"><img src="' + productImage + '" alt=""></div></td><td><div style="margin-left: 30px; width: 350px;"><p>T??n s???n ph???m: <strong>' + productName + '</strong></p><p>S??? l?????ng: <strong>1</strong></p><p>Gi??: <strong class="checkout_price">' + productPrice + '</strong></p></div></td></tr>'
            // addtrCheckout.innerHTML = Checkout
            // let htmlsCheckout = '<tr>' + Checkout + '</tr>'
            // if (localStorage.getItem('productCheckout') != null) {
            //     var current = localStorage.getItem('productCheckout');
            //     htmlsCheckout = current + htmlsCheckout;
            // }
            // localStorage.setItem('productCheckout', htmlsCheckout)

            // var trContent = '<tr class="item"><td class="product__cart__item"><div class="product__cart__item__pic"><img src="../img/product/' + productImage + '" alt=""></div><div class="product__cart__item__text"><h6 class="title">' + productName + '</h6><h5 class="productTotal">' + productPrice + '</h5></div></td><td class="quantity__item"><div class="quantity"><div class="pro-qty-2"><span onclick="DeCrease(this)" class="fa fa-angle-left dec qtybtn"></span><input class="qty-input" type="text" value="1"><span onclick="InCrease(this)" class="fa fa-angle-right inc qtybtn"></span></div></div></td><td class="cart__price">' + productPrice + '</td><td class="cart__close"><i class="fa fa-close"></i></td></tr>'
            // addtr.innerHTML = trContent
            // let htmls = '<tr>' + trContent + '</tr>'
            // if (localStorage.getItem('product') != null) {
            //     var current = localStorage.getItem('product');
            //     htmls = current + htmls;
            // }
            // localStorage.setItem('product', htmls)
            // console.log(localStorage.getItem('product'))
            // console.log(localStorage.getItem('productCheckout'))
            // alert("???? th??m s???n ph???m v??o gi??? h??ng")
            cartTotal()
        })
    })

    function cartTotal() {
        var cartItem = document.querySelectorAll('.item')
        var totalCart = 0
        var total
        for (var i = 0; i < cartItem.length; i++) {
            var inputValue = cartItem[i].querySelector('.pro-qty-2 input').value
            var productPrice = cartItem[i].querySelector('.cart__price').innerHTML
            total = inputValue * parseFloat(productPrice)
            totalCart = totalCart + total
            console.log(totalCart)
        }
        var cartTotalSet = document.querySelector('.cart__total_price')
        console.log(cartTotalSet)
        cartTotalSet.innerHTML = totalCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "???";
        var cartTotalSet1 = document.querySelector('.cart__total_price_ship')
        cartTotalSet1.innerHTML = totalCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "???";
    }


    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);