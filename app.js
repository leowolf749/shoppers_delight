
let masks = [
    {   
        name: 'Keaton Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/e/e3/Keaton-Mask-Model.png/100px-Keaton-Mask-Model.png',
        price: 10, 
    },
    {
        name: 'Skull Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Skull.png',
        price: 20,
    },
    {
        name: 'Spooky Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Spooky.png',
        price: 30,
    },
    {
        name: 'Bunny Hood',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/f/fd/Bunny-Hood.png/100px-Bunny-Hood.png',
        price: 50,
    },
    {
        name: 'Mask of Truth',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/2/29/Mask-of-Truth.png/100px-Mask-of-Truth.png',
        price: 100,
    },
        {
        name: 'Gerudo Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Gerudo.png',
        price: 200,
    },
        {
        name: 'Goron Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/1/13/Goron-Mask.png/100px-Goron-Mask.png',
        price: 200,
    },
        {
        name: 'Zora Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/1/19/Zora-Mask.png/100px-Zora-Mask.png',
        price: 200,
    },
        {
        name: 'Majoras Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/e/ed/Majora%27sMask-Artwork.png/250px-Majora%27sMask-Artwork.png',
        price: 10000,
    },

];

let cart = [];

window.addEventListener('load', function() {
    for (let i = 0; i < masks.length; i++) {
        showMasks(masks[i]);
    }
});



function showMasks(masks) {
    let parent = document.querySelector('#masks');   
    let mask = document.createElement('li');
    let maskTemplate = document.querySelector('#mask-template');

    mask.innerHTML = Mustache.render(maskTemplate.innerHTML, {
        image: masks.image,  
        name: masks.name,
        price: masks.price,
    });
    
    let addButton = mask.querySelector('.add');
    addButton.addEventListener('click', function() {
        console.log('added ' + masks.name + ' to cart');
        cart.push(masks);
        showCart();

    });

    parent.appendChild(mask);
}

function showCart() {
    let cartList = document.querySelector('#cart ul');
    cartList.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        showCartItem(cart[i]);
    }

    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal = subtotal + cart[i].price;
    }
    
    document.querySelector('#subtotal').textContent = subtotal;
    document.querySelector('#tax').textContent = subtotal * 0.1;
    document.querySelector('#total').textContent = subtotal + (subtotal * 0.1);
}

function showCartItem(item) {
    let parent = document.querySelector('#cart ul');   
    let mask = document.createElement('li');
    let cartTemplate = document.querySelector('#cart-template');

    mask.innerHTML = Mustache.render(cartTemplate.innerHTML, {
        name: item.name,
        price: item.price,
    });
    parent.appendChild(mask);
}


