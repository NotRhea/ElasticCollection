console.log("connected");




var makeup = [
    {
        "NAME ": "Nyx lipliner-shade mauve ",
        "PRODUCT": "Lipliner",
        "BRAND": "Nyx",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "image": "images/hudabeautylipstick.png",
       
    },
    {
        "NAME ": "Nyx lipliner-shade red",
        "PRODUCT": "Lipliner",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
     
    },
    {
        "NAME ": "Nyx lipliner-shade peach",
        "PRODUCT": "Lipliner",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
     
    },
    {
        "NAME ": "Milani lipstick -shade",
        "PRODUCT": "Lipstick",
        "BRAND": "Milani",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
    
    },
    {
        "NAME ": "mac satin lipstick-shade ",
        "PRODUCT": "Lipstick",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "null": null
    },
    {
        "NAME ": "huda beauty lipstick-shade",
        "PRODUCT": "Lipstick",
        "BRAND": "Huda beauty ",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
       
    },
    {
        "NAME ": "huda beauty lipstick-shade",
        "PRODUCT": "Lipstick",
        "BRAND": "Huda",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
     
    },
    {
        "NAME ": "benetint-tint shade",
        "PRODUCT": "Lip tint ",
        "BRAND": "Benetint",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
     
    },
    {
        "NAME ": "maybelline superstay lipstick shade",
        "PRODUCT": "Lipstick",
        "BRAND": "Maybelline",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
       
    },
    {
        "NAME ": "maybelline superstay lipstick shade",
        "PRODUCT": "Lipstick",
        "BRAND": "Maybelline",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
       
    },
    {
        "NAME ": "nyx lip oil shade ",
        "PRODUCT": "Lip oil",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
     
    },
    {
        "NAME ": "Nyx lip oil shade ",
        "PRODUCT": "Lip oil",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
      
    },
    {
        "NAME ": "Makeup forever concealer shade",
        "PRODUCT": "Concealer",
        "BRAND": "Makeup forever",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
       
    },
    {
        "NAME ": "mac concealer shade",
        "PRODUCT": "Concealer",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
      
    },
    {
        "NAME ": "mac foundation shade ",
        "PRODUCT": "Foundation",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
      
    },
    {
        "NAME ": "mac makeup remover ",
        "PRODUCT": "Makeup remover",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "loreal gel eyeliner ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Loreal",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "bobbi brown gel eyeliner ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Bobbi brown",
        "COST": "20-40 dollars ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "elf gel eyeliner",
        "PRODUCT": "eyeliner",
        "BRAND": "elf",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "elf eyeliner brush",
        "PRODUCT": "Brush",
        "BRAND": "Elf",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "mac luminescence cream",
        "PRODUCT": "Cream",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "mac setting spray ",
        "PRODUCT": "Setting spray",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "mac lipliner shade- ruby",
        "PRODUCT": "Lip liner ",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "null": null
    },
    {
        "NAME ": "eyeshadow pallate",
        "PRODUCT": "Eyeshadow pallate",
        "BRAND": "Jaclyn hill",
        "COST": "20-40 dollars ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "mac kajal",
        "PRODUCT": "Eyeliner",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "makeup forever setting powder",
        "PRODUCT": "Setting powder ",
        "BRAND": "Makeup forever",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "faces canada lipstick-shade midnight",
        "PRODUCT": "Lipstick ",
        "BRAND": "Faces canada",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "null": null
    },
    {
        "NAME ": "mac eyeshadow primer ",
        "PRODUCT": "Primer",
        "BRAND": "Mac",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "loreaL Flash cat eyeliner ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Loreal",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "revlon colorstay line creator ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Revlon",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "blush shade-rosa",
        "PRODUCT": "Blush",
        "BRAND": "Chambor",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "blush shade-red",
        "PRODUCT": "Blush",
        "BRAND": "Chambor",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "glossier skin tint shade-g6",
        "PRODUCT": "Skin tint ",
        "BRAND": "Glossier",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null
    },
  
    {
        "NAME ": "hauslabs skin concealer shade 32",
        "PRODUCT": "Concealer",
        "BRAND": "Hourglass",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "hourglass abmient lighting blush",
        "PRODUCT": "Blush",
        "BRAND": "Hourglass",
        "COST": "20-40 dollars ",
        "TYPE": "Face ",
        "null": null
    },
  
    {
        "NAME ": "urban decay mascara- perversion ",
        "PRODUCT": "Mascara",
        "BRAND": "Urban decay",
        "COST": "40 dollars or more",
        "TYPE": "Eyes ",
        "null": null
    },
    {
        "NAME ": "glossier cloud paint",
        "PRODUCT": "Blush",
        "BRAND": "Glossier ",
        "COST": "20-40 dollars ",
        "TYPE": "Face ",
        "null": null
    },
    {
        "NAME ": "huda beauty lip liner shade-pinky brown",
        "PRODUCT": "Lipliner ",
        "BRAND": "Huda beauty ",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "null": null
    },
    {
        "NAME ": "huda beauty lip liner shade- dusty rose ",
        "PRODUCT": "Lipliner",
        "BRAND": "Huda beauty ",
        "COST": "20-40 dollars ",
        "TYPE": "Lips",
        "null": null
    }
]

displayObjects();

function displayObjects() {
    let container = document.getElementsByClassName('image-container');
    container.innerHTML = '';

    makeup.forEach(obj => {
        let imgElement = document.createElement('img');
        imgElement.src = obj.image;
        container.appendChild(imgElement);
    });
}

// Filter makeup items when brand links are clicked
document.getElementById('brand_Nyx').addEventListener('click', function() {
    filterMakeup('Nyx');
});

document.getElementById('brand_Milani').addEventListener('click', function() {
    filterMakeup('Milani');
});

document.getElementById('brand_Mac').addEventListener('click', function() {
    filterMakeup('Mac');
});

// Add event listeners for other filter dropdowns as needed

function filterMakeup(brand) {
    let container = document.getElementById('objectContainer');
    container.innerHTML = '';

    makeup.forEach(obj => {
        if (obj.brand === brand) {
            let imgElement = document.createElement('img');
            imgElement.src = obj.image;
            container.appendChild(imgElement);
        }
    });
}