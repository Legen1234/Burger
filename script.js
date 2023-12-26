const food = {
    plainBurger: {
        name:"GAMBURGER",
        price:10000,
        amount:0,
        kcall:500,
        get calcSum(){
            return this.amount * this.price
        },
        get kcallSum(){
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name:"GAMBURGER FRESH",
        price:20500,
        amount:0,
        kcall:700,
        get calcSum(){
            return this.amount * this.price
        },
        get kcallSum(){
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name:"FRESH COMBO",
        price:31900,
        amount:0,
        kcall:800,
        get calcSum(){
            return this.amount * this.price
        },
        get kcallSum(){
            return this.amount * this.kcall
        },
    },
}
const btn =[...document.querySelectorAll('.main__product-btn')]
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function(){
        prepare(this)
    })
    
}


function prepare(item){
    const parent = item.closest(".main__product") 
    const parentId = parent.getAttribute('id')
    const price = parent.querySelector('.main__product-price span')
    const num = parent.querySelector('.main__product-num')
    const kcall = parent.querySelector('.main__product-kcall span')
    const sym = item.getAttribute('data-symbol')
    // console.log(sym);

    let count = food[parentId].amount
    // console.log(count)

    if (sym == "+") {
        count++
    }
    else if(sym == '-' && count > 0){
        count--
    }
    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcSum
    kcall.innerHTML = food[parentId].kcallSum
}
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')
const receiptWindowBtn = document.querySelector('.receipt__window-btn')
const addCart = document.querySelector('.addCart')
addCart.addEventListener('click',function(){
    receipt.style.display = 'block'
    receiptWindow.style.top = '20%'
    setTimeout(()=>{
        receipt.style.opacity = 1
    },100)

    let menu = "Sizning chekingiz: \n\n";
    let totalPrice = 0;
    let totalKcall = 0;
    for (const key in food) {
        menu = menu + `${food[key].name} ${food[key].amount} x ${food[key].price} = ${food[key].calcSum}\n\n`
        totalPrice = totalPrice + food[key].calcSum
        totalKcall = totalKcall + food[key].kcallSum
    }
    receiptWindowOut.innerHTML = `${menu} \n Total price: ${totalPrice} \n Total kcall: ${totalKcall}`

})
receiptWindowBtn.addEventListener('click',function(e){
    location.reload();
    if (e.target) {
        receiptWindow.style.top = '-100%'
        setTimeout(() => {
          receipt.style.display = "none"
          receipt.style.opacity = "0"  
        },200);
    }
})
const view = document.querySelector('.view')
const mainProductInfo = [...document.querySelectorAll('.main__product-info')]
const viewClose = document.querySelector('.view__close')

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener('click',function (){
        view.classList.add('active')
    })
}
viewClose.addEventListener('click',function () {
    view.classList.remove('active')     
})
// inmplikttyp
const headerTimer = document.querySelector('.header__timer span')

let lvl = headerTimer.innerHTML = 0
function str(lvl = 0) {
    lvl++

    if (lvl <= 50) {
        setTimeout(() => {
            str(lvl)
            console.log(lvl)
            headerTimer.innerHTML = 0 + lvl
        }, 1);
    } else if (lvl <= 70) {
        setTimeout(() => {
            str(lvl)
            console.log(lvl)
            headerTimer.innerHTML = 0 + lvl
        }, 10);
    } else if (lvl <= 90) {
        setTimeout(() => {
            str(lvl)
            console.log(lvl)
            headerTimer.innerHTML = 0 + lvl
        }, 100);
    } else if (lvl <= 100) {
        setTimeout(() => {
            str(lvl)
            console.log(lvl)
            headerTimer.innerHTML = 0 + lvl
        }, 1000);
    }
}
str()
