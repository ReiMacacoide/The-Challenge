'use strict'

// eslint-disable-next-line camelcase
var user_profile = {
  'intro': '<b>A B C D F G</b> <br><br> Introduction to Functions!',
  'player1': '<iframe style="border: 0; width: 50%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=997256964/size=small/bgcol=333333/linkcol=0f91ff/track=4209853396/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/spiritual-algorithm">Spiritual Algorithm by Odicforcesounds</a></iframe>',
  'pnote': 'So here I am Diving Into the Code I should to finish my Quest!',
  'pcode1': '<h2> - Q: You know what is Fun?</h2 <br> - A: Yes, Actions! <br><br> % Master: So type those <b>codes</b> with your fingers which are the <b>DOM</b> Objects, the Browser can interpret (without a lot mistakes (compared to humans :P)), and see ( test ) their behaviors, while you learn! ',
  'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
  'open_source': [
    {
      'description': 'GitHub',
      'link': 'https://github.com/rakzhodekams'
    }
  ]
}

// LOGO
let logo = document.getElementById('logo')
logo.innerHTML = user_profile.logo

// INTRO
let welcome = document.getElementById('mintro')
welcome.innerHTML = user_profile.intro

let hereiam = document.getElementById('pnote')
hereiam.innerHTML = user_profile.pnote

// BANDCAMP TRACK
let player = document.getElementById('player1')
player.innerHTML = user_profile.player1

// INSERT FIRST POST DATA
let post1 = document.getElementById('pcode1')
post1.innerHTML = user_profile.pcode1
// INSERT NEXT POST
let post2 = document.getElementById('pcode2')
// post2.innerHTML = user_profile.pcode2

// GITHUB FOOT
document.getElementById('github').innerHTML = '<a href=' + user_profile.open_source[0].link + ' ' + 'target=_blank>GitHub</a>'
