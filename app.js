window.addEventListener('load', function() {
    showMasks(masks);
});


let masks = [
    {   
        name: 'Keaton Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/e/e3/Keaton-Mask-Model.png/100px-Keaton-Mask-Model.png',
        price: 10 + ' rupees', 
    },
    {
        name: 'Skull Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Skull.png',
        price: 20 + ' rupees',
    },
    {
        name: 'Spooky Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Spooky.png',
        price: 30 + ' rupees',
    },
    {
        name: 'Bunny Hood',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/f/fd/Bunny-Hood.png/100px-Bunny-Hood.png',
        price: 50 + ' rupees',
    },
    {
        name: 'Mask of Truth',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/2/29/Mask-of-Truth.png/100px-Mask-of-Truth.png',
        price: 100 + ' rupees',
    },
        {
        name: 'Gerudo Mask',
        image: 'http://www.zeldadungeon.net/Zelda05/Masks/Gerudo.png',
        price: 200 + ' rupees',
    },
        {
        name: 'Goron Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/1/13/Goron-Mask.png/100px-Goron-Mask.png',
        price: 200 + ' rupees',
    },
        {
        name: 'Zora Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/1/19/Zora-Mask.png/100px-Zora-Mask.png',
        price: 200 + ' rupees',
    },
        {
        name: 'Majoras Mask',
        image: 'http://www.zeldadungeon.net/wiki/images/thumb/e/ed/Majora%27sMask-Artwork.png/250px-Majora%27sMask-Artwork.png',
        price: 10000 + ' rupees',
    },

];



function showMasks(masks) {
    let parent = document.querySelector('#masks');
    for (let i = 0; i < masks.length; i++) {
        
        let mask = document.createElement('li');

        mask.innerHTML = Mustache.render(
            document.querySelector('#mask-template').innerHTML,
            { image: masks[i].image,  
              name: masks[i].name,
              price: masks[i].price,
            }
        );
    parent.appendChild(mask);

    let cart = document.querySelector('#cart');
    let addButton = mask.querySelector('.add');
        addButton.addEventListener('click', function() {
            console.log('added ' + masks[i].name + ' to cart');
            
            let cartItem = document.createElement('li');

            cartItem.innerHTML = Mustache.render(
                document.querySelector('#cart-template').innerHTML,
                { name: masks[i].name,
                  price: masks[i].price,  
                }
            );
            cart.appendChild(cartItem);

            let subTotal = document.querySelector('.subtotal');
                subTotal = 'Subtotal: ' + masks[i].price;
                console.log(subTotal);
        });
            
    }
}


