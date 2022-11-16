const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg', 
            url: 'http://placekitten.com/200/300',
            inventory: 100,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'], 
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            sizes: ['small', 'medium', 'large'],
        }
    }
})
