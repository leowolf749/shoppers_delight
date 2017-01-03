
let masks = [
    {   
        name: 'Keaton Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/e/e3/Keaton-Mask-Model.png/100px-Keaton-Mask-Model.png',
        price: 10 + ' Rupees', 
    },
    {
        name: 'Skull Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Skull.png',
        price: 20 + ' Rupees',
    },
    {
        name: 'Spooky Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Spooky.png',
        price: 30 + ' Rupees',
    },
    {
        name: 'Bunny Hood',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/f/fd/Bunny-Hood.png/100px-Bunny-Hood.png',
        price: 50 + ' Rupees',
    },
    {
        name: 'Mask of Truth',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/2/29/Mask-of-Truth.png/100px-Mask-of-Truth.png',
        price: 100 + ' Rupees',
    },
        {
        name: 'Gerudo Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Gerudo.png',
        price: 200 + ' Rupees',
    },
        {
        name: 'Goron Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/1/13/Goron-Mask.png/100px-Goron-Mask.png',
        price: 200 + ' Rupees',
    },
        {
        name: 'Zora Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/1/19/Zora-Mask.png/100px-Zora-Mask.png',
        price: 200 + ' Rupees',
    },
        {
        name: 'Majoras Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/e/ed/Majora%27sMask-Artwork.png/250px-Majora%27sMask-Artwork.png',
        price: 10000 + ' Rupees',
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

        mask.innerHTML = Mustache.render(maskTemplate.innerHTML,
            { image: masks.image,  
              name: masks.name,
              price: masks.price,
            }
        );
    parent.appendChild(mask);

    let cart = document.querySelector('#cart');
    let addButton = mask.querySelector('.add');
        addButton.addEventListener('click', function() {
            console.log('added ' + masks.name + ' to cart');
            
            let cartItem = document.createElement('li');

            cartItem.innerHTML = Mustache.render(
                document.querySelector('#cart-template').innerHTML,
                { name: masks.name,
                  price: masks.price,  
                }
            );
            cart.appendChild(cartItem);

            let subTotal = document.querySelector('.subtotal');
                subTotal = 'Subtotal: ' + masks.price;
                console.log(subTotal);
        });
            
    
}


