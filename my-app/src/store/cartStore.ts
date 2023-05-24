import { observable, action } from 'mobx';

const cartStore = observable({
    finalPrice: 0,
    cartCount: 0,
    cartList: [
        {id: 0,
        url: '',
        type: '',
        brand: '',
        title: '',
        price: '',
        count: 1
    }],

    update: action(() => {
        if (localStorage['cart']) {
            cartStore.cartList = JSON.parse(localStorage['cart'])
        }
    }),

    setCart: action((itm: object) => {
        let fill: boolean = false
        if (localStorage['cart']) {
            cartStore.cartList = JSON.parse(localStorage['cart'])
        }
        cartStore.cartList.forEach(item => {
            if (item.id === JSON.parse(JSON.stringify(itm)).id) {
                fill = true
                item.count++
                cartStore.cartCount += 1;
            }
        })
        if (!fill) {
            cartStore.cartList.push({...JSON.parse(JSON.stringify(itm)), count: 1})
            cartStore.cartCount += 1;
        }
        cartStore.finallyPrice()
    }),

    deleteCart: action((itm: object) => {
        cartStore.cartList = cartStore.cartList.filter((item) => item.id !== JSON.parse(JSON.stringify(itm)).id)
        cartStore.cartCount -= JSON.parse(JSON.stringify(itm)).count;
    }),

    increaseCount: action((itm: object) => {
        cartStore.cartList.map((item) => {if (item.id === JSON.parse(JSON.stringify(itm)).id) item.count++})
        cartStore.cartCount += 1;
        cartStore.finallyPrice()
    }),
    decreaseCount: action((itm: object) => {
        cartStore.cartList.map((item) => {if (item.id === JSON.parse(JSON.stringify(itm)).id) item.count--})
        cartStore.cartCount -= 1;
        cartStore.finallyPrice()
    }),

    finallyPrice: action(() => {
        cartStore.finalPrice = 0
        cartStore.cartList.forEach((item) => cartStore.finalPrice += Math.trunc(item.count * Number(item.price.replace(' ', ''))))
    }),
})

export default cartStore;