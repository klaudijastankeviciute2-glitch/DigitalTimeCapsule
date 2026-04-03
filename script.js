window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
});

/* HOMEPAGE */
const items = document.querySelectorAll('.interactive-item');
    items.forEach(item => {
        item.addEventListener('click', function(event) {
            console.log('Clicked item:', this.getAttribute('href'));
        });
    });

function toggleModal() {
    const modal = document.getElementById('helpModal');
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', () => {
        const capsuleForm = document.getElementById('capsule-form');
        const submitBtn = document.getElementById('submit-btn');
        const statusElement = document.getElementById('form-status');

        if (capsuleForm) {
            capsuleForm.addEventListener('submit', function(e) {
                e.preventDefault(); 
                
if (!capsuleForm.checkValidity()) {
                return; 
            }

                const nameValue = document.getElementById('name').value;

                
                submitBtn.innerText = "Sealing Capsule... 🔒";
                submitBtn.disabled = true;

                setTimeout(() => {
                    statusElement.innerHTML = `Success! Thank you, <strong>${nameValue}</strong>. Your message is sealed for 2026.`;
                    statusElement.style.color = "#4CAF50";
                    
                    submitBtn.innerText = "Message Sealed!";
                    capsuleForm.reset();
                }, 1500);
            });
        }
    });

    /* FAV MUSIC PAGE */
const playlist = [
    "https://open.spotify.com/embed/track/1dvqHhLNccePPBHq11TW7v?utm_source=generator",
    "https://open.spotify.com/embed/track/6jTQijAuYxOd8DjQ8D6UkL?utm_source=generator",
    "https://open.spotify.com/embed/track/2OPTa0ZrCScjBkfY8IJZQx?utm_source=generator",
    "https://open.spotify.com/embed/track/7gtG45ieyQzKtNKobfLd49?utm_source=generator",
    "https://open.spotify.com/embed/track/2V1pcaaDRdizrk4GQKwmAs?utm_source=generator"
];
let currentSongIndex = 0;

function changeSong(direction) {
    currentSongIndex = (currentSongIndex + direction + playlist.length) % playlist.length;
    const player = document.getElementById('spotify-player');
    if(player) {
        player.src = playlist[currentSongIndex];
    }
}

function toggleModal() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
    }
}


/* FAV FOOD PAGE */
   function playCustomSound(soundName) {
       const audio = new Audio('../Images/Favorite Food/' + soundName);
    audio.currentTime = 0;
       audio.play();
   }

   document.addEventListener('DOMContentLoaded', () => {
    const foodItems = document.querySelectorAll('.gray-food');

    foodItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const soundFile = item.getAttribute('data-sound');
            playCustomSound(soundFile);
        });
    });
});

async function fetchSnack() {
    const recipeText = document.getElementById('recipe-name');
    try {
        recipeText.innerText = "Thinking...";
        
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        
        recipeText.innerText = data.meals[0].strMeal;
    } catch (error) {
        console.log("API Error:", error);
    }
}
fetchSnack();

/* FAV THINGS PAGE */
function toggleModal() {

    const modal = document.getElementById('helpModal');

    if (modal.style.display === "flex") {

        modal.style.display = "none";

    } else {

        modal.style.display = "flex";

    }

}

function openModal(imageName, titleText, descText) {
    document.getElementById('infoModal').style.display = 'flex';

    let nested = document.getElementById('nestedImage');
    nested.src = "../Images/FavoriteThings/" + imageName;

    document.getElementById('modalTitle').innerText = titleText;
    document.getElementById('modalDescription').innerText = descText;
    
    document.body.style.overflow = 'hidden';

    }
function closeModal() {

    document.getElementById('infoModal').style.display = 'none';
}


