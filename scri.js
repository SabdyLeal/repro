var participante = false
var pista = document.getElementById('pista')
var progress = document.getElementById('progress')
var titulo = document.getElementById('titulo')
var artista = document.getElementById('artista')
var imagen = document.getElementById('imagen')
var handler = document.getElementById('handler')
var current_track = 0
var cancion, audio, duration
var canciones_html = ''

var canciones = [{
        imagen: './img/1.jpg',
        titulo: ' Buttercup ',
        artista: '',
        audio: './mp/1.mp3'
    },
    {
        imagen: './img/2.jpg',
        titulo: 'C U Again ',
        artista: 'Cartoon  ',
        audio: './mp/2.mp3'
    },
    {
        imagen: './img/3.jpg',
        titulo: ' Infinity ',
        artista: 'GURU JOSH ',
        audio: './mp/3.mp3'
    },
    {
        imagen: './img/4.jpg',
        titulo: 'Lover is a day',
        artista: ' CUCO',
        audio: './mp/4.mp3'
    },
    {
        imagen: './img/5.jpg',
        titulo: 'Keeping Tabs',
        artista: 'Cuco ',
        audio: './mp/5.mp3'
    },
    {
        imagen: './img/6.jpg',
        titulo: 'Oblivion',
        artista: 'Dirty Palm ',
        audio: './mp/6.mp3'
    },
    {
        imagen: './img/7.jpg',
        titulo: 'Without Me',
        artista: 'Halsey ',
        audio: './mp/7.mp3'
    },
    {
        imagen: './img/8.jpg',
        titulo: 'Under Water ',
        artista: 'Fareoh ',
        audio: './mp/8.mp3'
    },
    {
        imagen: './img/9.jpg',
        titulo: 'Hymn For The Weekend',
        artista: 'Coldplay ',
        audio: './mp/9.mp3'
    },
    {
        imagen: './img/10.jpg',
        titulo: 'Natural',
        artista: ' Imagine Dragons',
        audio: './mp/10.mp3'
    },

    /*----------------------10 a la 20------------------------ */

    {
        imagen: './img/1.jpg',
        titulo: 'Sick Boy ',
        artista: 'The Chainsmokers ',
        audio: './mp/11.mp3'
    },
    {
        imagen: './img/2.jpg',
        titulo: ' RISE  ',
        artista: ' The Glitch Mob, Mako, and The Word Alive',
        audio: './mp/12.mp3'
    },
    {
        imagen: './img/3.jpg',
        titulo: ' Redemption',
        artista: 'Besomorph & Coopex ',
        audio: './mp/13.mp3'
    },
    {
        imagen: './img/4.jpg',
        titulo: 'SLOW DANCING IN THE DARK',
        artista: ' Joji ',
        audio: './mp/14.mp3'
    },

    {
        imagen: './img/5.jpg',
        titulo: 'Midsummer Madness ',
        artista: '88RISING  ',
        audio: './mp/15.mp3'
    },
    {
        imagen: './img/6.jpg',
        titulo: 'Im Not The Only One',
        artista: 'Sam Smith  ',
        audio: './mp/16.mp3'
    },
    {
        imagen: './img/7.jpg',
        titulo: 'Too Good At Goodbyes',
        artista: 'Sam Smith ',
        audio: './mp/17.mp3'
    },
    {
        imagen: './img/8.jpg',
        titulo: 'Mistaken ',
        artista: 'Martin Garrix, Matisse & Sadko feat. Alex Aris  ',
        audio: './mp/18.mp3'
    },
    {
        imagen: './img/9.jpg',
        titulo: 'Summer Days',
        artista: 'Martin Garrix feat. Macklemore & Patrick Stump of Fall Out Boy ',
        audio: './mp/19.mp3'
    },
    {
        imagen: './img/10.jpg',
        titulo: 'No Sleep',
        artista: ' Martin Garrix feat. Bonn ',
        audio: './mp/20.mp3'
    },

    /*----------------------21 a la 30------------------------ */

    {
        imagen: './img/1.jpg',
        titulo: ' Put Your Love In Dreamz ',
        artista: ' El Speaker & Goblin Mashup ',
        audio: './mp/21.mp3'
    },
    {
        imagen: './img/2.jpg',
        titulo: ' California Dreaming  ',
        artista: ' Arman Cekin ',
        audio: './mp/22.mp3'
    },
    {
        imagen: './img/3.jpg',
        titulo: 'Spotless ',
        artista: ' Martin Garrix & Jay Hardway ',
        audio: './mp/23.mp3'
    },
    {
        imagen: './img/4.jpg',
        titulo: 'Radioactive ',
        artista: ' Imagine Dragons ',
        audio: './mp/24.mp3'
    },

    {
        imagen: './img/5.jpg',
        titulo: ' Thunderclouds  ',
        artista: ' Sia, Diplo, Labrinth ',
        audio: './mp/25.mp3'
    },
    {
        imagen: './img/6.jpg',
        titulo: 'Firestone',
        artista: 'Kygo ft. Conrad Sewell ',
        audio: './mp/26.mp3'
    },
    {
        imagen: './img/7.jpg',
        titulo: 'Genius ',
        artista: ' Sia, Diplo, Labrinth ',
        audio: './mp/27.mp3'
    },
    {
        imagen: './img/8.jpg',
        titulo: 'Sun Is Shining  ',
        artista: 'Axwell Λ Ingrosso ',
        audio: './mp/28.mp3'
    },
    {
        imagen: './img/9.jpg',
        titulo: 'Diamond Heart ',
        artista: 'Alan Walker',
        audio: './mp/29.mp3'
    },
    {
        imagen: './img/10.jpg',
        titulo: 'Back to You',
        artista: 'Louis Tomlinson ft. Bebe Rexha ',
        audio: './mp/30.mp3'
    },

    /*{
        imagen: './img/.jpg',
        titulo: '',
        artista: ' ',
        audio: './mp/.mp3'
    }, */

]

$(document).ready(function() {
    $.each(canciones, function(index) {
        canciones_html += '<li class="list-group-item d-flex justify-content-between align-items-center" onclick="CancionSelect(' + index + ')">'
        canciones_html += '<blockquote class="blockquote">'
        canciones_html += '<h5>' + canciones[index].titulo + '</h5>'
        canciones_html += '<footer class="blockquote-footer">' + canciones[index].artista + '</footer>'
        canciones_html += '</blockquote>'
        canciones_html += '<h3><i id="play' + index + '" class="fas fa-play-circle"></i></h3>'
        canciones_html += '</li>'
    })
    $('#contenido').html(canciones_html)
    init()
})

function CancionSelect(id) {
    current_track = id
    cancion = canciones[current_track];
    audio.src = cancion.audio;
    audio.onloadeddata = function() {
        updateInfo();
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        for (var i = 0; i <= canciones.length; i++) {
            $('#play' + i + '').removeClass('fa-pause-circle')
            $('#play' + i + '').addClass('fa-play-circle')
        }
        $('#play' + id + '').removeClass('fa-play-circle')
        $('#play' + id + '').addClass('fa-pause-circle')
        audio.addEventListener('timeupdate', initProgressBar, false);
    }
}

function init() {
    cancion = canciones[current_track]
    audio = new Audio()
    imagen.src = cancion.imagen
    audio.src = cancion.audio
    titulo.textContent = cancion.titulo
    artista.textContent = cancion.artista
}

function playTrack() {
    if ($('#play').hasClass('fa-pause-circle')) {
        $('#play').removeClass('fa-pause-circle')
        $('#play').addClass('fa-play-circle')
        $('#play' + current_track + '').removeClass('fa-pause-circle')
        $('#play' + current_track + '').addClass('fa-play-circle')
        audio.pause()
    } else {
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        $('#play' + current_track + '').removeClass('fa-play-circle')
        $('#play' + current_track + '').addClass('fa-pause-circle')
        audio.play()
        audio.addEventListener('timeupdate', initProgressBar, false);
    }
}

function nextTrack() {
    current_track++;
    current_track = current_track % (canciones.length);
    cancion = canciones[current_track];
    audio.src = cancion.audio;
    audio.onloadeddata = function() {
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        for (var i = 0; i <= canciones.length; i++) {
            $('#play' + i + '').removeClass('fa-pause-circle')
            $('#play' + i + '').addClass('fa-play-circle')
        }
        $('#play' + current_track + '').removeClass('fa-play-circle')
        $('#play' + current_track + '').addClass('fa-pause-circle')
        updateInfo();
    }
}

function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (canciones.length - 1) : current_track);
    cancion = canciones[current_track];
    audio.src = cancion.audio;
    audio.onloadeddata = function() {
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        for (var i = 0; i <= canciones.length; i++) {
            $('#play' + i + '').removeClass('fa-pause-circle')
            $('#play' + i + '').addClass('fa-play-circle')
        }
        $('#play' + current_track + '').removeClass('fa-play-circle')
        $('#play' + current_track + '').addClass('fa-pause-circle')
        updateInfo();
    }
}

function updateInfo() {
    titulo.textContent = cancion.titulo;
    artista.textContent = cancion.artista;
    imagen.src = cancion.imagen;
    imagen.onload = function() {
        audio.play();
    }
}

function initProgressBar() {
    var length = audio.duration
    var current_time = audio.currentTime

    var totalLength = calculateTotalValue(length)
    $('#end-time').html(totalLength)

    var currentTime = calculateCurrentValue(current_time)
    $('#start-time').html(currentTime)

    progress.value = (audio.currentTime / audio.duration);
    progress.addEventListener("click", seek);

    function seek(event) {
        var percent = event.offsetX / this.offsetWidth;
        audio.currentTime = percent * audio.duration;
        progress.value = percent / 100;
    }

}

function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds

    return time;
}

function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
}