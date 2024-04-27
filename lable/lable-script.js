// Function to generate a rainbow color based on the index
function getRainbowColor(index) {
    var frequency = 0.1;
    var red = Math.sin(frequency * index + 0) * 127 + 128;
    var green = Math.sin(frequency * index + 2) * 127 + 128;
    var blue = Math.sin(frequency * index + 4) * 127 + 128;
    return 'rgb(' + Math.round(red) + ',' + Math.round(blue) + ',' + Math.round(green) + ')';
}

// Apply rainbow colors to each letter of "MUSIC"
var musicText = document.querySelector('.music-text');
var colorfulText = '';
for (var i = 0; i < musicText.textContent.length; i++) {
    var letter = musicText.textContent[i];
    var rainbowColor = getRainbowColor(i);
    colorfulText += '<span style="color:' + rainbowColor + '">' + letter + '</span>';
}
musicText.innerHTML = colorfulText;

// // Function to generate a rainbow color based on the index
// function getRainbowColor(index) {
//     var hue = (index * 30) % 360; // Adjust the multiplier for different color spread
//     return 'hsl(' + hue + ', 100%, 50%)';
// }

// // Apply rainbow colors to each letter of "MUSIC"
// var musicText = document.getElementById('music-text');
// var colorfulText = '';
// for (var i = 0; i < musicText.textContent.length; i++) {
//     var letter = musicText.textContent[i];
//     var rainbowColor = getRainbowColor(i);
//     colorfulText += '<span style="color:' + rainbowColor + '">' + letter + '</span>';
// }
// musicText.innerHTML = colorfulText;
