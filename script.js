const gifs = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXdhaWpvYW50OXdxOHlwYjQ5dzEwZG03Y3FmbGFjZmU4YXNzeTJpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T1mwiKjGsITzaWMGu4/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBkMjBpeXE5Y3Zmd3l0cDhhMmJlbXg4MnZicWYwdGJreHpqaGxkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXA1aHg1dG5yZDd5Zmc5cm80ZnBuNDFub2d2eGNvazJ0ZzNqZnhieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1BgT1rs5YTOzvMHu/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjFqZTM2aXh0dGtsNzdzYnpzd3JrNzcxMzd5dnJsOTUzMmdpaGM4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d31vmSrGsySyndrq/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZudzVveGw0Y290Zm12ZXh2dWs2czVibG0zcHd0aHNzbjFxM2c3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11eSRTSTTlzo6k/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHI2N3JiMTZhazV4M3hjYnNudXlkY3JscG95Mmp6MHl3bjJpZXJsZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOxeQhzhcfpim8a9a/giphy.gif"
];

const gifGallery = document.getElementById('gifGallery');
const gifImage = document.getElementById('gifImage');

gifs.forEach(gif => {
    const gifItem = document.createElement('div');
    gifItem.classList.add('gif-item');
    gifItem.innerHTML = `<img src="${gif}" alt="Birthday GIF" />`;
    
    gifItem.addEventListener('click', () => {
        gifImage.src = gif;
    });

    gifGallery.appendChild(gifItem);
});