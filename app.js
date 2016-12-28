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

];

function showMasks(masks) {
    let parent = document.querySelector('#masks');
    for (let i = 0; i < masks.length; i++) {
        
        let mask = document.createElement('li');

        mask.innerHTML = Mustache.render(
            document.querySelector('#mask-template').innerHTML,
            { name: masks[i].name,
              price: masks[i].price,
            }
        );
    parent.appendChild(mask);
    }
}