document.addEventListener('DOMContentLoaded', () => {
    const featuredImage = document.querySelector('#gallery figure img');
    const thumbnails = document.querySelectorAll('#thumbnails img');
    const figcaption = document.querySelector('#gallery figure figcaption');

    // Image data (full-size and thumbnail pairs with titles)
    const images = [
        { full: 'images/flowers-pink-large.jpg', thumb: 'images/flowers-pink-small.jpg', title: 'Pink Flowers: Blossoming in Summer Radiance' },
        { full: 'images/flowers-purple-large.jpg', thumb: 'images/flowers-purple-small.jpg', title: 'Purple Flowers: A Splendid Display in Sunlight' },
        { full: 'images/flowers-red-large.jpg', thumb: 'images/flowers-red-small.jpg', title: 'Red Flowers: Glowing with Summer Warmth' },
        { full: 'images/flowers-white-large.jpg', thumb: 'images/flowers-white-small.jpg', title: 'White Flowers: Serene Beauty Under the Summer Sky' },
        { full: 'images/flowers-yellow-large.jpg', thumb: 'images/flowers-yellow-small.jpg', title: 'Yellow Flowers: Basking in Summers Golden Glow' }
    ];

    // Initial setup: set first image as active
    let currentImage = 0;
    setFeaturedImage(currentImage);

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentImage = index;
            setFeaturedImage(currentImage);
            updateThumbnailClasses(currentImage);
        });
    });

    function setFeaturedImage(index) {
        const image = images[index];
        featuredImage.src = image.full;
        figcaption.textContent = image.title;
    }

    function updateThumbnailClasses(currentIndex) {
        thumbnails.forEach((thumb, index) => {
            if (index === currentIndex) {
                thumb.classList.add('active');
                thumb.classList.remove('inactive');
            } else {
                thumb.classList.remove('active');
                thumb.classList.add('inactive');
            }
        });
    }

    // Initialize the thumbnails: set all to inactive except the first one
    thumbnails.forEach((thumb, index) => {
        if (index !== 0) {
            thumb.classList.add('inactive');
        }
    });
});
