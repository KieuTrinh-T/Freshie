'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(100).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
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
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
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
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
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

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;

    var timerdate = "2022/2/1"

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Ngày</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Giờ</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Phút</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Giây</p> </div>"));
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
    
    //Add to cart
    var cartQuan = 0
    const cartCountInfo = document.getElementById('cart-count-info');
    const btn = document.querySelectorAll('.add-cart')
    const btnAdd = document.querySelectorAll('.primary-btn')
    btnAdd.forEach(function(a, index){
        a.addEventListener("click", function(event){
            var btnItem = event.target
            var product = btnItem.parentElement.parentElement
            var productImage = product.querySelector(".ProductImage").src
            var productName = product.querySelector("H4").innerText
            var productPrice = product.querySelector("H3").innerText
            var addtr = document.createElement("tr")
            var addtrCheckout = document.createElement("tr")
            var cartItem = document.querySelectorAll('.item')
            var cartCount = parseInt(cartCountInfo.innerText) + 1
            localStorage.setItem('productCount', cartCount)
            cartCountInfo.textContent = localStorage.getItem('productCount')
            for (var i = 0; i<cartItem.length; i++){
                var productT = document.querySelectorAll(".title")
                if(productT[i].innerHTML == productName){
                    alert("Sản phẩm đã tồn tại trong giỏ hàng!")
                    return
                }
            }

            var Checkout = '<tr class="checkout_item"><td><div style="float: left; width: 150px;"><img src="'+productImage+'" alt=""></div></td><td><div style="margin-left: 30px; width: 350px;"><p>Tên sản phẩm: <strong>'+productName+'</strong></p><p>Số lượng: <strong>1</strong></p><p>Giá: <strong class="checkout_price">'+productPrice+'</strong></p></div></td></tr>'
            addtrCheckout.innerHTML = Checkout
            let htmlsCheckout = '<tr>' + Checkout +'</tr>'
            if (localStorage.getItem('productCheckout')!=null){
                var current = localStorage.getItem('productCheckout');
                htmlsCheckout = current + htmlsCheckout;
            }
            localStorage.setItem('productCheckout',htmlsCheckout)

            var trContent = '<tr class="item"><td class="product__cart__item"><div class="product__cart__item__pic"><img src="'+productImage+'" alt=""></div><div class="product__cart__item__text"><h6 class="title">'+productName+'</h6><h5 class="productTotal">'+productPrice+'</h5></div></td><td class="quantity__item"><div class="quantity"><div class="pro-qty-2"><span onclick="DeCrease(this)" class="fa fa-angle-left dec qtybtn"></span><input class="qty-input" type="text" value="1"><span onclick="InCrease(this)" class="fa fa-angle-right inc qtybtn"></span></div></div></td><td class="cart__price">'+productPrice+'</td><td class="cart__close"><i class="fa fa-close"></i></td></tr>'
            addtr.innerHTML = trContent
            let htmls = '<tr>' + trContent +'</tr>'
            if (localStorage.getItem('product')!=null){
                var current = localStorage.getItem('product');
                htmls = current + htmls;
            }
            localStorage.setItem('product',htmls)
            console.log(localStorage.getItem('product')) 
            console.log(localStorage.getItem('productCheckout'))
            alert("Đã thêm sản phẩm vào giỏ hàng")
            cartTotal()
        })
    })
    btn.forEach(function(a, index){ 
        a.addEventListener("click", function(event){
            var btnItem = event.target
            var product = btnItem.parentElement.parentElement
            var productImage = product.querySelector('img').src
            var productName = product.querySelector("H6").innerText
            var productPrice = product.querySelector("H5").innerText
            var addtr = document.createElement("tr")
            var addtrCheckout = document.createElement("tr")
            var cartItem = document.querySelectorAll('.item')
            var cartCount = parseInt(cartCountInfo.innerText) + 1
            localStorage.setItem('productCount', cartCount)
            cartCountInfo.textContent = localStorage.getItem('productCount')
            for (var i = 0; i<cartItem.length; i++){
                var productT = document.querySelectorAll(".title")
                if(productT[i].innerHTML == productName){
                    alert("Sản phẩm đã tồn tại trong giỏ hàng!")
                    return
                }
            }

            var Checkout = '<tr class="checkout_item"><td><div style="float: left; width: 150px;"><img src="'+productImage+'" alt=""></div></td><td><div style="margin-left: 30px; width: 350px;"><p>Tên sản phẩm: <strong>'+productName+'</strong></p><p>Số lượng: <strong>1</strong></p><p>Giá: <strong class="checkout_price">'+productPrice+'</strong></p></div></td></tr>'
            addtrCheckout.innerHTML = Checkout
            let htmlsCheckout = '<tr>' + Checkout +'</tr>'
            if (localStorage.getItem('productCheckout')!=null){
                var current = localStorage.getItem('productCheckout');
                htmlsCheckout = current + htmlsCheckout;
            }
            localStorage.setItem('productCheckout',htmlsCheckout)

            var trContent = '<tr class="item"><td class="product__cart__item"><div class="product__cart__item__pic"><img src="'+productImage+'" alt=""></div><div class="product__cart__item__text"><h6 class="title">'+productName+'</h6><h5 class="productTotal">'+productPrice+'</h5></div></td><td class="quantity__item"><div class="quantity"><div class="pro-qty-2"><span onclick="DeCrease(this)" class="fa fa-angle-left dec qtybtn"></span><input class="qty-input" type="text" value="1"><span onclick="InCrease(this)" class="fa fa-angle-right inc qtybtn"></span></div></div></td><td class="cart__price">'+productPrice+'</td><td class="cart__close"><i class="fa fa-close"></i></td></tr>'
            addtr.innerHTML = trContent
            let htmls = '<tr>' + trContent +'</tr>'
            if (localStorage.getItem('product')!=null){
                var current = localStorage.getItem('product');
                htmls = current + htmls;
            }
            localStorage.setItem('product',htmls)
            console.log(localStorage.getItem('product')) 
            console.log(localStorage.getItem('productCheckout'))
            alert("Đã thêm sản phẩm vào giỏ hàng")
            cartTotal()
        })
    })

    function cartTotal(){
        var cartItem = document.querySelectorAll('.item')
        var totalCart = 0
        var total
        for (var i = 0; i<cartItem.length; i++){
            var inputValue = cartItem[i].querySelector('.pro-qty-2 input').value
            var productPrice = cartItem[i].querySelector('.cart__price').innerHTML
            total = inputValue * parseFloat(productPrice)
            totalCart = totalCart + total
            console.log(totalCart)
        }
        var cartTotalSet = document.querySelector('.cart__total_price')
        console.log(cartTotalSet)
        cartTotalSet.innerHTML = totalCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
        var cartTotalSet1 = document.querySelector('.cart__total_price_ship')
        cartTotalSet1.innerHTML = totalCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
    }
    
    
    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);