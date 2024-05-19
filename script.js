document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const backgroundColor = document.getElementById('background').value;
    const text = document.getElementById('text').value;
    const textColor = document.getElementById('textColor').value;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color
    ctx.fillStyle = textColor;
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw the text in the center
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
});