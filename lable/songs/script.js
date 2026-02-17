// Function to parse the URL and extract the song name from it
function getSongNameFromURL() {
    const url = window.location.href;
    const parts = url.split('/');
    const htmlname = parts[parts.length - 1];
    const name = htmlname.split('.');
    return name[0]; // Get the last part of the URL (song name)
}

// Function to fetch song data based on the song name
function fetchSongData(songName) {
    // Here you can implement your logic to fetch song data based on the song name
    // This could involve making an API request to your backend server or fetching data from a static file

    // For now, let's assume you have a static object containing data for your songs
    const songsData = {

        'zen_lofi': {
            name: 'Beyond Open Sky',
            imageUrl: 'cover-images/zen_lofi.jpg', // Image URL for the song
            //spotifyUrl: 'https://open.spotify.com/playlist/0Xu31SOrgW82HseEGM7T8Q?si=ca2f883d549b4b4c'
            spotifyUrl: 'spotify:playlist:0Xu31SOrgW82HseEGM7T8Q?si=ca2f883d549b4b4c'
            // Add more data as needed (e.g., Spotify URL, Apple Music URL, etc.)
        },

        'abyss-of-mist': {
            name: 'Abyss Of Mist',
            imageUrl: 'cover-images/abyss-of-mist.png', // Image URL for the song
            spotifyUrl: 'https://open.spotify.com/track/53RKpBePgcMnEl7DGFKeoj?si=f62b93fbb9af4090'
            // Add more data as needed (e.g., Spotify URL, Apple Music URL, etc.)
        },
        'beauty-of-freedom': {
            name: 'Beauty of Freedom',
            imageUrl: 'cover-images/beauty-of-freedom.png', // Image URL for the song
            spotifyUrl: 'https://open.spotify.com/track/42CA5ifn4cj8i11BoPG7Vi?si=8f59796c4f444f85'
            // Add more data as needed (e.g., Spotify URL, Apple Music URL, etc.)
        },
        'lost-in-moonlights-dream': {
            name: 'Lost in Moonlight\'s Dream',
            imageUrl: 'cover-images/lost-in-moonlights-dream.png', // Image URL for the song
            spotifyUrl: 'https://open.spotify.com/track/7zcdstaXGtMmEbaqe6qVSQ?si=1167c47457514cbc'
            // Add more data as needed (e.g., Spotify URL, Apple Music URL, etc.)
        },
        'begining-of-past': {
            name: 'Begining of Past',
            imageUrl: 'cover-images/begining-of-past.png',
            spotifyUrl: 'https://open.spotify.com/track/06urXTlhE3cdrJfZ3D3ZzX?si=e885cb4dce5a4fee'
        },
        'beneath-minds-tree': {
            name: 'Beneath Mind\'s Tree',
            imageUrl: 'cover-images/beneath-minds-tree.png',
            spotifyUrl: 'https://open.spotify.com/track/7CslqhzuFe5EHAvoSuEqPg?si=964c0264835e432d'
        },
        'blind-peace': {
            name: 'Blind Peace',
            imageUrl: 'cover-images/blind-peace.png',
            spotifyUrl: 'https://open.spotify.com/track/5begiqbu8PhNhAAgb3FPgC?si=2f4a8c5c42f04abe'
        },
        'busy-winds': {
            name: 'Busy Winds',
            imageUrl: 'cover-images/busy-winds.png',
            spotifyUrl: 'https://open.spotify.com/track/2ZtvbtZ7EmNRxbh4GGiP5T?si=eb32a7602a214f08'
        },
        'damn-valley': {
            name: 'Damn Valley',
            imageUrl: 'cover-images/damn-valley.png',
            spotifyUrl: 'https://open.spotify.com/track/3MHCVFeEVCQfhzqMAwUkeg?si=ce5d938b07ef4936'
        },
        'dawn-at-heaven': {
            name: 'Dawn at Heaven',
            imageUrl: 'cover-images/dawn-at-heaven.png',
            spotifyUrl: 'https://open.spotify.com/track/0c2EXKO2wFTLfcmflZQiWt?si=9db5a0196d164531'
        },
        'dream-of-forest-flowers': {
            name: 'Dream of Forest Flowers',
            imageUrl: 'cover-images/dream-of-forest-flowers.png',
            spotifyUrl: 'https://open.spotify.com/track/5tVq7Pe629TWicE9ndcWXy?si=9f693092a359423d'
        },
        'ever-autumn': {
            name: 'Ever Autumn',
            imageUrl: 'cover-images/ever-autumn.png',
            spotifyUrl: 'https://open.spotify.com/track/7uC3qOHAG6vBVvZbNN0OSO?si=3394ff2a33c04e20'
        },
        'false-dreamy-peace': {
            name: 'False Dreamy Peace',
            imageUrl: 'cover-images/false-dreamy-peace.png',
            spotifyUrl: 'https://open.spotify.com/track/3zlVEYR3Hi19oJXn8ieTGX?si=7e37d41cffd04494'
        },
        'godusk': {
            name: 'Godusk',
            imageUrl: 'cover-images/godusk.png',
            spotifyUrl: 'https://open.spotify.com/track/6ZGYUWffbkMcEosYPxoUy9?si=b25d3122706f4be0'
        },
        'happy-dawn': {
            name: 'Happy Dawn',
            imageUrl: 'cover-images/happy-dawn.png',
            spotifyUrl: 'https://open.spotify.com/track/5hMM28VBOrclfnhYvAyJUE?si=c5d88f4f200d4b88'
        },
        'her-eyes-of-flowers': {
            name: 'Her Eyes of Flowers',
            imageUrl: 'cover-images/her-eyes-of-flowers.png',
            spotifyUrl: 'https://open.spotify.com/track/4XbEyKpVay5wmM8tntI8dU?si=3b6ae409405b4daf'
        },
        'high-flowers': {
            name: 'High Flowers',
            imageUrl: 'cover-images/high-flowers.png',
            spotifyUrl: 'https://open.spotify.com/track/5LljctNdk34lhY7oECpOZw?si=dca7ab2696ce4f9d'
        },
        'no-mans-path': {
            name: 'No Man\'s Path',
            imageUrl: 'cover-images/no-mans-path.png',
            spotifyUrl: 'https://open.spotify.com/track/0K5ejO1vs4PsrzxZZoFElU?si=6e9e3361e8fe4ca5'
        },
        'nostalgic-peace': {
            name: 'Nostalgic Peace',
            imageUrl: 'cover-images/nostalgic-peace.png',
            spotifyUrl: 'https://open.spotify.com/track/1W1bKZl7ZZLvL2dOyJgral?si=9f085679fb684306'
        },
        'piano-beneath-dusk': {
            name: 'Piano Beneath Dusk',
            imageUrl: 'cover-images/piano-beneath-dusk.png',
            spotifyUrl: 'https://open.spotify.com/track/7rPisNNvSUlWb3n5sp7Vey?si=dafb3eb775ca4a92'
        },
        'piano-beside-river': {
            name: 'Piano Beside River',
            imageUrl: 'cover-images/piano-beside-river.png',
            spotifyUrl: 'https://open.spotify.com/track/0qsB62mRwZJyYE4NEToRCi?si=62c1ae803822473d'
        },
        'rainbow-blossom': {
            name: 'Rainbow Blossom',
            imageUrl: 'cover-images/rainbow-blossom.png',
            spotifyUrl: 'https://open.spotify.com/track/2XC2xqCxgTRTogSDLRtpnV?si=fba7ba68e13e45c6'
        },
        'strings-of-flowers': {
            name: 'Strings of Flowers',
            imageUrl: 'cover-images/strings-of-flowers.png',
            spotifyUrl: 'https://open.spotify.com/track/0Q4FsBbCLekOJXO3zTC5tq?si=c69aac29561c4cd5'
        },
        'strings-of-sun': {
            name: 'Strings of Sun',
            imageUrl: 'cover-images/strings-of-sun.png',
            spotifyUrl: 'https://open.spotify.com/track/0Q4FsBbCLekOJXO3zTC5tq?si=eb37e74fde75406b'
        },
        'to-sky': {
            name: 'To Sky',
            imageUrl: 'cover-images/to-sky.png',
            spotifyUrl: 'https://open.spotify.com/track/2xNY6YXcQLze9kNPzfMnpp?si=c11c19ae08df4875'
        },
        'whispers-of-white-wings': {
            name: 'Whispers of White Wings',
            imageUrl: 'cover-images/whispers-of-white-wings.png',
            spotifyUrl: 'https://open.spotify.com/track/4KekjCmBX8MohnLTZBWxf3?si=043ab9c3ce94490d'
        }
        // Add data for other songs here
    };

    return songsData[songName];
}

let spotifyLink = 'https://open.spotify.com';

// Function to update the HTML with song data
function updateHTML(songData) {
    document.getElementById('track-image').src = songData.imageUrl;
    document.querySelector('.title img').src = songData.imageUrl
    document.querySelector('.title img').alt = songData.name;
    document.getElementById('track-name').textContent = songData.name;

    spotifyLink = songData.spotifyUrl;
    // You can add more code here to update other elements in the HTML based on the song data
}

// Function to handle loading the page with song data
function loadSongPage() {
    const songName = getSongNameFromURL();
    const songData = fetchSongData(songName);
    if (songData) {
        updateHTML(songData);
    } else {
        // Handle case where song data is not found (e.g., display an error message)
        console.error('Song data not found');
    }
}

// Call the loadSongPage function when the page loads
window.onload = function () {
    loadSongPage();
};

// Function to play track on Spotify
function playOnSpotify() {
    window.location.href = spotifyLink;
    // Code to play the track on Spotify
    // You can redirect the user to the Spotify track URL or use Spotify SDK if available
}

function playOnAppleMusic() {
    window.location.href = "https://music.apple.com/us/artist/blank-sid/1734816742"
}

function adjustBlur() {
    const zoomLevel = window.innerWidth / document.documentElement.clientWidth;
    const blurStrength = 29 * zoomLevel;
    document.querySelector('.background-blur').style.backdropFilter = `blur(${blurStrength}px)`;
}

// Initial call on page load
adjustBlur();
window.addEventListener('resize', adjustBlur);