const btn = document.querySelectorAll(".addCart");

btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h1").innerText;
        var productPrice = product.querySelector("span").innerText;
        addcart(productPrice, productImg, productName);
    });
});

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title");
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        }
    }
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt=""><span class="title">' + productName +
        '</span></td><td><p><span class="prices">' + productPrice +
        '</span></p></td><td><input style="width: 40px;outline: none;" type="number" value="1" min="1" max="10"></td><td style="cursor: pointer;"><span class="deletecart">Xóa</span></td></tr>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    carttotal();
    deleteCart();
    inputChange()
}

document.querySelectorAll('.showDetails').forEach(button => {
    button.addEventListener('click', function(event) {
        const productItem = event.target.closest('.product-item');
        const details = productItem.querySelector('.product-details');

        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            button.textContent = 'Ẩn chi tiết';
        } else {
            details.style.display = 'none';
            button.textContent = 'Xem chi tiết';
        }
    });
});


function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        console.log(inputValue);

        var productPrice = cartItem[i].querySelector(".prices").innerHTML;
        productPrice = productPrice.replace(/[^0-9.-]+/g, "");
        productPrice = parseFloat(productPrice);
        console.log(productPrice);

        var totalA = inputValue * productPrice;
        console.log(totalA);

        totalC += totalA;
        console.log(totalC);
    }

    var cartTotalA = document.querySelector(".price-total span");
    console.log(cartTotalA);
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
}

function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = cartItem[i].querySelector(".deletecart");
        productT.addEventListener("click", function(event) {
            var cart_delete = event.target;
            var cart_Item = cart_delete.parentElement.parentElement;
            cart_Item.remove();
            carttotal();
        });
    }
}

function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("click", function(event) {
            carttotal();
        });
    }
}

const btncart = document.querySelector(".close img")
const btnshowcart = document.querySelector("#GioHang")

btnshowcart.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})

btncart.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})

document.getElementById('checkoutButton').addEventListener('click', function() {
    document.getElementById('customerForm').style.display = 'block';
});

document.querySelector('#customerForm form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thông tin khách hàng đã được gửi.');
    document.getElementById('customerForm').style.display = 'none';
});

