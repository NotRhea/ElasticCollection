document.addEventListener("DOMContentLoaded", function() {
    const textOverlay = document.querySelector('.text-overlay');
    const words = ["school", "dates", "parties", "just vibes"];
    let index = 0;

    function changeText() {
        textOverlay.textContent = `Rhea's makeup for ${words[index]}`;
        index = (index + 1) % words.length;
    }

    setInterval(changeText, 1500); // Change text every 2 seconds
});


var makeup = [
    
    {
        "NAME ": "Nyx lipliner-shade mauve ",
        "PRODUCT": "Lipliner",
        "BRAND": "Nyx",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "image":"images/nyxliplinershadepeach.png",
        "INFO": "This is my trusted everyday lipliner"
        
    },
    {
        "NAME ": "Nyx lipliner-shade red",
        "PRODUCT": "Lipliner",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
       "image": "images/nyxliplinerred.png",
       "INFO": "This is the only lipliner I'll ever use for red lips. A great alternative for MAC products"
    },
    {
        "NAME ": "Nyx lipliner-shade peach",
        "PRODUCT": "Lipliner",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
       "image":"images/nyxlipliner.png",
       "INFO": "This is the perfect shade of peachy pink for flushed glossy lips"
    },
    {
        "NAME ": "Milani lipstick-shade",
        "PRODUCT": "Lipstick",
        "BRAND": "Milani",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "image":"images/milanilipstick.png",
        "INFO": "I swear by this lipstick for a perfect nude, especially when I want my eyes to be the focus. It works perfectly with red dresses.",
       
    },
    {
        "NAME ": "mac satin lipstick ",
        "PRODUCT": "Lipstick",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
       "image": "images/macsatinlipstick.png",
       "INFO": "The mac satin lipstick is a glossy nude perfect for my graphic eyeliner looks "
    },
    {
        "NAME ": "huda beauty Bullet lipstick-shade Payday ",
        "PRODUCT": "Lipstick",
        "BRAND": "Huda beauty ",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "image":"images/hudabeautypinkdress.png",
        "INFO":"I love pairing this with my rose huda beauty lipliner, for a lovely perfect nude."
     
    },
    {
        "NAME ": "huda beauty lipstick-shade pinky brown",
        "PRODUCT": "Lipstick",
        "BRAND": "Huda",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "image":"images/hudabeautypinkdress.png",
        "INFO":"Again, a very good nude."
      
    },
    {
        "NAME ": "benetint",
        "PRODUCT": "Lip tint ",
        "BRAND": "Benetint",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "image":"images/benetint.png",
        "INFO":"I use this tint almost every day for my Day-to-day makeup. I top it off with the NYX gloss, and it pops out especially when I'm wearing green. "
      
    },
    {
        "NAME ": "maybelline superstay lipstick shade Lippy",
        "PRODUCT": "Lipstick",
        "BRAND": "Maybelline",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "image": "images/maybellinesuperstayLippy.png",
        "INFO":"I dont particularly like the feel of this on my lips, its a little drying, but a good glossy earthy shade regardless."
       
    },
    {
        "NAME ": "maybelline superstay lipstick shade Wicked",
        "PRODUCT": "Lipstick",
        "BRAND": "Maybelline",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "image": "images/maybellinesuperstayred.png",
        "INFO":"I dont particularly like the feel of this on my lips, its a little drying. Its a good deep red shade thats not too bright."
      
    },
    {
        "NAME ": "nyx lip oil shade Red ",
        "PRODUCT": "Lip oil",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "image": "images/nyxlipoil-red.png",
        "INFO":"A nice warm toned red lipoil, that hydrates my lips perfectly, while also being long lasting."
    },
    {
        "NAME ": "Nyx lip oil ",
        "PRODUCT": "Lip oil",
        "BRAND": "Nyx ",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "null": null,
        "image":"images/nyxlipoil.png",
        "INFO":"The perfect lip oil to top off my matte lip combos."
    },
    {
        "NAME ": "Makeup forever concealer shade",
        "PRODUCT": "Concealer",
        "BRAND": "Makeup forever",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image": "images/makeupforeverconcealer.png",
        "INFO":"This is a high coverage concealer that helps cover up the darkest possible spots.Perfect for covering tattoos and hickeys(not speaking from experience)"
    },
    {
        "NAME ": "mac concealer shade",
        "PRODUCT": "Concealer",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image": "images/macconcealer.png",
        "INFO":"This is a medium coverage concealer that I use on a day to day basis."
    },
    {
        "NAME ": "mac foundation shade ",
        "PRODUCT": "Foundation",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image":"images/macfoundation.png",
        "INFO":"A medium coverage foundation which I only use when I go out."
    },
    {
        "NAME ": "mac makeup remover ",
        "PRODUCT": "Makeup remover",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image": "images/macmakeupremover.png",
        "INFO": "While this remover is on the expensive side, it is the best out there. It gets out everything and has a gentle formula so it doesn't irritate the skin."
    },
  
    {
        "NAME ": "bobbi brown gel eyeliner ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Bobbi brown",
        "COST": "20-40 dollars ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/bobbibrowneyeliner.png"
    },
    {
        "NAME ": "elf gel eyeliner",
        "PRODUCT": "eyeliner",
        "BRAND": "elf",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/images.png"
    },
    {
        "NAME ": "elf eyeliner brush",
        "PRODUCT": "Brush",
        "BRAND": "Elf",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null,
        "image": "images/elfeyelinerbrush.png"
    },
    {
        "NAME ": "mac luminescence cream",
        "PRODUCT": "Cream",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Face ",
        "null": null,
        "image":"images/macluminescencecream.png"
    },
    {
        "NAME ": "mac setting spray ",
        "PRODUCT": "Setting spray",
        "BRAND": "Mac",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image": "images/macsettingspray.png"
    },
    {
        "NAME ": "mac lipliner shade-ruby",
        "PRODUCT": "Lip liner ",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "null": null,
        "image":"images/macliplinershaderuby.png"
    },
    {
        "NAME ": "eyeshadow palette",
        "PRODUCT": "Eyeshadow palette",
        "BRAND": "Jaclyn hill",
        "COST": "20-40 dollars ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/jaclynhillpallet.png",
        "INFO":"A relatively affordable eyeshadow palette I can use for any eyeshadow look under the sun."
    },
    {
        "NAME ": "mac kajal",
        "PRODUCT": "Eyeliner",
        "BRAND": "Mac",
        "COST": "20-40 dollars ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/mackajal.png",
        "INFO":"A very nice long lasting kajal I can use daily."
    },
    {
        "NAME ": "makeup forever setting powder",
        "PRODUCT": "Setting powder ",
        "BRAND": "Makeup forever",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image":"images/makeupforeversettingpowder.png",
        "INFO":"A lightweight setting powder for giving the skin an airbrushed look."
    },

    {
        "NAME ": "faces canada lipstick-shade midnight",
        "PRODUCT": "Lipstick ",
        "BRAND": "Faces canada",
        "COST": "20 dollars or less ",
        "TYPE": "Lips ",
        "null": null,
        "image": "images/facescanada.png",
        "INFO":"My absolute favorite red lipstick, Its just the perfect shade of red-not too bright, not too dark."
    },
    {
        "NAME ": "mac eyeshadow primer ",
        "PRODUCT": "Primer",
        "BRAND": "Mac",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/maceyeshadowprimer.png",
        "INFO":"My trusted eyeshadow primer to ensure my eyeshadow looks dont smudge, and last a long time. "

    },
    {
        "NAME ": "loreaL Flash cat eyeliner ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Loreal",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/lorealflashcateyeliner.png",
        "INFO":"I love this eyeliner pen, because the tip is so narrow and malleable and glides like butter."
    },
    {
        "NAME ": "revlon colorstay line creator ",
        "PRODUCT": "Eyeliner",
        "BRAND": "Revlon",
        "COST": "20 dollars or less ",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/revlonliner.png",
        "INFO":"I love this liner, because one side serves as a crayon applicator, while the other is a liquid eyeliner, so its very versatile."
    },
    {
        "NAME ": "Chambor blush shade-rosa",
        "PRODUCT": "Blush",
        "BRAND": "Chambor",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null,
        "image":"images/chamborblush.png",
        "INFO":"a perfect mauve shade for everyday use."
    },
    {
        "NAME ": "Chambor blush shade-red",
        "PRODUCT": "Blush",
        "BRAND": "Chambor",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null,
        "image":"images/chamborblushred.png",
        "INFO":"I use this blush when I want to do a red lip look. It gives me a flushed sunkissed appearance."
    },
    {
        "NAME ": "glossier skin tint shade-g6",
        "PRODUCT": "Skin tint ",
        "BRAND": "Glossier",
        "COST": "20 dollars or less ",
        "TYPE": "Face ",
        "null": null,
        "image":"images/glossierskintint.png",
        "INFO":"A lightweight skintint for everyday wear."
    },
  
    {
        "NAME ": "hauslabs skin concealer shade 32",
        "PRODUCT": "Concealer",
        "BRAND": "Hourglass",
        "COST": "40 dollars or more",
        "TYPE": "Face ",
        "null": null,
        "image":"images/hauslabsconcealer.png",
        "INFO":"A lightweight concealer which acts more as a tint."
    },
    {
        "NAME ": "hourglass abmient lighting blush",
        "PRODUCT": "Blush",
        "BRAND": "Hourglass",
        "COST": "20-40 dollars ",
        "TYPE": "Face ",
        "null": null,
        "image":"images/hourglassblush.png",
        "INFO":"A pigmented blush, a little hard to blend though."
    },
  
    {
        "NAME ": "urban decay mascara- perversion ",
        "PRODUCT": "Mascara",
        "BRAND": "Urban decay",
        "COST": "40 dollars or more",
        "TYPE": "Eyes ",
        "null": null,
        "image":"images/urbandecaymascara.png",
        "INFO":"The best mascara I SWEAR by it. It gives you amazinf volume and length and is long lasting."
    },
    {
        "NAME ": "glossier cloud paint",
        "PRODUCT": "Blush",
        "BRAND": "Glossier ",
        "COST": "20-40 dollars ",
        "TYPE": "Face ",
        "null": null,
        "image":"images/glossiercloudpaint.png",
        "INFO":"My first ever makeup product, its extremely subtle and beginner friendly."
    },
    {
        "NAME ": "huda beauty lip liner shade-pinky brown",
        "PRODUCT": "Lipliner ",
        "BRAND": "Huda beauty ",
        "COST": "20-40 dollars ",
        "TYPE": "Lips ",
        "null": null,
        "image":"images/hudabeautypinkybrownlipliner.png",
        "INFO":"A smooth gliding crayon lipliner that is the absolute perfect earthy nude for me."
    },
    {
        "NAME ": "huda beauty lip liner shade- dusty rose ",
        "PRODUCT": "Lipliner",
        "BRAND": "Huda beauty ",
        "COST": "20-40 dollars ",
        "TYPE": "Lips",
        "null": null,
        "image":"images/hudabeautydeeprose.png",
        "INFO":"I use this with pink tinted lip stains and lipsticks to give my lips a little depth and plumpness. Its the most lovely rosy color."
    }
,
] ;

displayObjects();

function displayObjects() {
    let container = document.querySelector('.gallery-container');
    container.innerHTML = '';

    makeup.forEach(obj => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        let imgElement = document.createElement('img');
        imgElement.src = obj.image;

        imageContainer.appendChild(imgElement);
        itemElement.appendChild(imageContainer);
        container.appendChild(itemElement);
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

document.getElementById('brand_Revlon').addEventListener('click', function() {
    filterMakeup('Revlon');
});

document.getElementById('brand_UrbanDecay').addEventListener('click', function() {
    filterMakeup('Urban decay');
});

document.getElementById('brand_Huda').addEventListener('click', function() {
    filterMakeup('Huda beauty');
});

document.getElementById('brand_Elf').addEventListener('click', function() {
    filterMakeup('Elf');
});

document.getElementById('brand_BobbiBrown').addEventListener('click', function() {
    filterMakeup('Bobbi brown');
});

document.getElementById('brand_Glossier').addEventListener('click', function() {
    filterMakeup('Glossier');
});
// Filter makeup items when type links are clicked
document.querySelectorAll('.type-filter a').forEach(link => {
    link.addEventListener('click', function() {
        filterMakeup(this.textContent);
    });
});

// Filter makeup items when cost links are clicked
document.querySelectorAll('.cost-filter a').forEach(link => {
    link.addEventListener('click', function() {
        filterMakeup(this.textContent);
    });
});

// Filter makeup items when product links are clicked
document.querySelectorAll('.product-filter a').forEach(link => {
    link.addEventListener('click', function() {
        filterMakeup(this.textContent);
    });
});

function filterMakeup(filter) {
    let container = document.querySelector('.gallery-container');
    container.innerHTML = '';

    makeup.forEach(obj => {
        if (obj.BRAND.trim() === filter ||
            obj.TYPE.trim() === filter ||
            obj.COST.trim() === filter ||
            obj.PRODUCT.trim() === filter) { // Trim to remove extra spaces
            let itemElement = document.createElement('div');
            itemElement.classList.add('item');

            let imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            let imgElement = document.createElement('img');
            imgElement.src = obj.image;

            imageContainer.appendChild(imgElement);
            itemElement.appendChild(imageContainer);
            container.appendChild(itemElement);
        }
    });
}

function displayObjects() {
    let container = document.querySelector('.gallery-container');
    container.innerHTML = '';

    makeup.forEach(obj => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        let imgElement = document.createElement('img');
        imgElement.src = obj.image;

        // Add event listener for each image
        imgElement.addEventListener('click', function() {
            openPopup(obj);
        });

        imageContainer.appendChild(imgElement);
        itemElement.appendChild(imageContainer);
        container.appendChild(itemElement);
    });
}
function openPopup(obj) {
    let popup = document.getElementById('popup');
    popup.innerHTML = '';

    let content = `
        <h2>${obj["NAME "]}</h2>
        <p><b>Brand:</b> Nyx Lipliner Shade-mauve</p>
        <p>${obj["INFO"]}</p>
        <p><b>Cost:</b>${obj["COST"]} </p>
        <!-- Add more properties as needed -->

        <textarea id="review" style="width: 100%; height: 100px; margin-top: 10px;" placeholder="Write your review here..."></textarea>
        <button onclick="submitReview()">Submit</button>
        <button onclick="closePopup()">Close</button>
    `;

    popup.innerHTML = content;
    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function submitReview() {
    let review = document.getElementById('review').value;
    let reviewText = document.getElementById('reviewText');
    reviewText.innerText = review;
} 