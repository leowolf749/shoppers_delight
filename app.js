window.addEventListener('load', function() {
    showMasks(masks);
});


let masks = [
    {   
        name: 'Keaton Mask',
        price: '10 rupees', 
    },
    {
        name: 'Skull Mask',
        price: '20 rupees',
    },
    {
        name: 'Spooky Mask',
        price: '30 rupees',
    },
    {
        name: 'Bunny Hood',
        price: '50 rupees',
    },
    {
        name: 'Mask of Truth',
        price: '100 rupees',
    },
        {
        name: 'Gerudo Mask',
        price: '200 rupees',
    },
        {
        name: 'Goron Mask',
        price: '200 rupees',
    },
        {
        name: 'Zora Mask',
        price: '200 rupees',
    },
        {
        name: 'Majoras Mask',
        price: '10,000 rupees',
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

    let addButton = mask.querySelector('.add');
        addButton.addEventListener('click', function () {
            console.log('clicked btn');
            addMask(cart[i]);
        });
    }
}


let cart = [{}];

function addMask(mask) {
    cart = document.querySelector('#cart');
    for (let i = 0; i < cart.length; i++) {
        
    }
}