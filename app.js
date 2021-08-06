const startButton = document.querySelector('#start')
const scrollTo = document.querySelector('#scrollto')

startButton.addEventListener('click', ()=> {
    scrollTo.scrollIntoView(); 
})


function rotateImgs(){
    const img = document.querySelector('.header__imgs');
    const imgsSrc = ['imgs/xqcsmile.jpg', 'imgs/forsen.jpg', 'imgs/charlie.jpg', 'imgs/ludwig.jpg', 'imgs/Mizkif-Bald.png', 'imgs/nickmalena.jpg', 'imgs/nickmerc.jpg', 'imgs/Pokelawls-tsm.jpg', 'imgs/pokimane.jpg', 'imgs/soda.jpg', 'imgs/tim.jpg', 'imgs/tyler1.jpg']
    const delaySec = 1;
    let i = 0;

    function changeSrc(){
        img.src = imgsSrc[i];
        i++;

        if(i >= imgsSrc.length) i = 0;
    }
    
    setInterval(changeSrc, delaySec * 1000);




}

window.onload=function(){
    rotateImgs();
    }

const streamers = {
    xqc: 0,
    charlie: 0,
    ludwig: 0,
    mizkif: 0,
    summit: 0,
    soda: 0,
    nick: 0,
    forsen: 0,
    tyler: 0,
    nickmercs: 0,
    tim: 0,
    pokimane: 0,
    shroud: 0,
    

}

let {xqc, charlie, ludwig, mizkif, summit, soda, nick, forsen, tyler, nickmercs, tim, pokimane, shroud} = streamers

const overwatchButton = document.querySelector('#overwatch');
const valorantButton = document.querySelector('#valorant');
const codButton = document.querySelector('#CoD');
const noneButton = document.querySelector('#none');
const q2 = document.querySelector('#q2container')
const q3 = document.querySelector('#q3container')
const q4 = document.querySelector('#q4container')
const q5 = document.querySelector('#q5container')
const q6 = document.querySelector('#q6container')
const resultEnd = document.querySelector('.footer')




overwatchButton.addEventListener('click', () =>{
    xqc = parseInt(xqc) + 1;
    overwatchButton.disabled = 'true'

    valorantButton.disabled = 'true'
    codButton.disabled = 'true'
    noneButton.disabled = 'true'

    overwatchButton.classList.add('chosen')
    valorantButton.classList.add('disabled')
    codButton.classList.add('disabled')
    noneButton.classList.add('disabled')

    q2.scrollIntoView(); 

    addPoint

    result




})


valorantButton.addEventListener('click', () => {
    pokimane = parseInt(pokimane) + 1;
    shroud = parseInt(shroud) + 1;

    overwatchButton.disabled = 'true'
    codButton.disabled = 'true'
    noneButton.disabled = 'true'
    valorantButton.disabled = 'true'

    overwatchButton.classList.add('disabled')
    valorantButton.classList.add('chosen')
    codButton.classList.add('disabled')
    noneButton.classList.add('disabled')
    q2.scrollIntoView(); 

    addPoint
    result
})
codButton.addEventListener('click', () => {
    nickmercs = parseInt(nickmercs) + 1
    tim = parseInt(tim) + 1

    valorantButton.disabled = 'true'
    codButton.disabled = 'true'
    noneButton.disabled = 'true'
    overwatchButton.disabled = 'true'


    overwatchButton.classList.add('disabled')
    valorantButton.classList.add('disabled')
    codButton.classList.add('chosen')
    noneButton.classList.add('disabled')
    q2.scrollIntoView(); 
    addPoint
    result

})
noneButton.addEventListener('click', () => {
    nick = parseInt(nick) + 1;
    ludwig = parseInt(ludwig) + 1;
    charlie = parseInt(charlie) + 1;
    mizkif = parseInt(mizkif) + 1;



    valorantButton.disabled = 'true'
    codButton.disabled = 'true'
    noneButton.disabled = 'true'
    overwatchButton.disabled = 'true'

    overwatchButton.classList.add('disabled')
    valorantButton.classList.add('disabled')
    codButton.classList.add('disabled')
    noneButton.classList.add('chosen')
    q2.scrollIntoView(); 
    addPoint
    result

})

const pepeLaugh = document.querySelector('#pepelaugh');
const omegalul = document.querySelector('#omegalul');
const pagman = document.querySelector('#pagman');
const noEmote = document.querySelector('#noemote');

pepeLaugh.addEventListener('click', () => {
    xqc = parseInt(xqc) + 1;
    mizkif = parseInt(mizkif) + 1;
    soda = parseInt(soda) + 1;


    omegalul.disabled = 'true'
    pagman.disabled = 'true'
    noEmote.disabled = 'true'
    pepeLaugh.disabled = 'true'


    pepeLaugh.classList.add('chosen')
    omegalul.classList.add('disabled')
    pagman.classList.add('disabled')
    noEmote.classList.add('disabled')
    q3.scrollIntoView(); 
    addPoint
    result

})
omegalul.addEventListener('click', () => {
    xqc = parseInt(xqc) + 1;
    soda = parseInt(soda) + 1;
    mizkif = parseInt(mizkif) + 1;
    nick = parseInt(nick) + 1;


    pepeLaugh.disabled = 'true'
    pagman.disabled = 'true'
    noEmote.disabled = 'true'
    omegalul.disabled = 'true'


    pepeLaugh.classList.add('disabled')
    omegalul.classList.add('chosen')
    pagman.classList.add('disabled')
    noEmote.classList.add('disabled')
    q3.scrollIntoView(); 
    addPoint
    result

})
pagman.addEventListener('click', () => {
    forsen = parseInt(forsen) + 1;

    pepeLaugh.disabled = 'true'
    omegalul.disabled = 'true'
    noEmote.disabled = 'true'
    pagman.disabled = 'true'

    pepeLaugh.classList.add('disabled')
    omegalul.classList.add('disabled')
    pagman.classList.add('chosen')
    noEmote.classList.add('disabled')
    q3.scrollIntoView(); 
    addPoint
    result
})
noEmote.addEventListener('click', () => {
    shroud = parseInt(shroud) + 1;
    tyler = parseInt(tyler) + 1;
    pokimane = parseInt(pokimane) + 1;
    tim = parseInt(tim) + 1;
    summit = parseInt(summit) + 1;
    nickmercs = parseInt(nickmercs) + 1;


    pepeLaugh.disabled = 'true'
    omegalul.disabled = 'true'
    pagman.disabled = 'true'
    noEmote.disabled = 'true'

    pepeLaugh.classList.add('disabled')
    omegalul.classList.add('disabled')
    pagman.classList.add('disabled')
    noEmote.classList.add('chosen')
    q3.scrollIntoView(); 
    addPoint
    result

})

const cat = document.querySelector('#cat');
const dog = document.querySelector('#dog');
const rabbit = document.querySelector('#rabbit');
const noPet = document.querySelector('#nopet');

cat.addEventListener('click', () => {
    pokimane = parseInt(pokimane) + 1;
    ludwig = parseInt(ludwig) + 1;

    dog.disabled = 'true'
    rabbit.disabled = 'true'
    noPet.disabled = 'true'
    cat.disabled = 'true'

    cat.classList.add('chosen')
    dog.classList.add('disabled')
    rabbit.classList.add('disabled')
    noPet.classList.add('disabled')
    q4.scrollIntoView(); 
    addPoint
    result
})
dog.addEventListener('click', () => {
    nick = parseInt(nick) + 1;
    soda = parseInt(soda) + 1;
    nickmercs = parseInt(nickmercs) + 1;
    charlie = parseInt(charlie) + 1;

    cat.disabled = 'true'
    rabbit.disabled = 'true'
    noPet.disabled = 'true'
    dog.disabled = 'true'

    cat.classList.add('disabled')
    dog.classList.add('chosen')
    rabbit.classList.add('disabled')
    noPet.classList.add('disabled')
    q4.scrollIntoView(); 
    addPoint
    result
})
rabbit.addEventListener('click', () => {
    mizkif = parseInt(mizkif) + 1;
    pokimane = parseInt(pokimane) + 1;


    cat.disabled = 'true'
    dog.disabled = 'true'
    noPet.disabled = 'true'
    rabbit.disabled = 'true'

    cat.classList.add('disabled')
    dog.classList.add('disabled')
    rabbit.classList.add('chosen')
    noPet.classList.add('disabled')
    q4.scrollIntoView(); 
    addPoint
    result
})
noPet.addEventListener('click', () => {
    xqc = parseInt(xqc) + 1;
    summit = parseInt(summit) + 1;
    forsen = parseInt(forsen) + 1;
    tyler = parseInt(tyler) + 1;

    cat.disabled = 'true'
    dog.disabled = 'true'
    rabbit.disabled = 'true'
    noPet.disabled = 'true'

    cat.classList.add('disabled')
    dog.classList.add('disabled')
    rabbit.classList.add('disabled')
    noPet.classList.add('chosen')
    q4.scrollIntoView(); 
    addPoint
    result
})

const gfuel = document.querySelector('#gfuel');
const monster = document.querySelector('#monster');
const coke = document.querySelector('#coke');
const coffee = document.querySelector('#coffee');

gfuel.addEventListener('click', () => {
    nickmercs = parseInt(nickmercs) + 1;
    charlie = parseInt(charlie) + 1;
    ludwig = parseInt(ludwig) + 1;
    tyler = parseInt(tyler) + 1;


    monster.disabled = 'true'
    coke.disabled = 'true'
    coffee.disabled = 'true'
    gfuel.disabled = 'true'

    gfuel.classList.add('chosen')
    monster.classList.add('disabled')
    coke.classList.add('disabled')
    coffee.classList.add('disabled')
    q5.scrollIntoView(); 
    addPoint
    result
})
monster.addEventListener('click', () => {
    summit = parseInt(summit) + 1;
    tim = parseInt(tim) + 1;

    gfuel.disabled = 'true'
    coke.disabled = 'true'
    coffee.disabled = 'true'
    monster.disabled = 'true'

    gfuel.classList.add('disabled')
    monster.classList.add('chosen')
    coke.classList.add('disabled')
    coffee.classList.add('disabled')
    q5.scrollIntoView(); 
    addPoint
    result
})
coke.addEventListener('click', () => {
    mizkif = parseInt(mizkif) + 1;
    xqc = parseInt(xqc) + 1;
    soda = parseInt(soda) + 1;

    gfuel.disabled = 'true'
    monster.disabled = 'true'
    coffee.disabled = 'true'
    coke.disabled = 'true'

    gfuel.classList.add('disabled')
    monster.classList.add('disabled')
    coke.classList.add('chosen')
    coffee.classList.add('disabled')

    q5.scrollIntoView(); 
    addPoint
    result

})
coffee.addEventListener('click', () => {
    shroud = parseInt(shroud) + 1;
    nick = parseInt(nick) + 1;
    pokimane = parseInt(pokimane) + 1;
    
    gfuel.disabled = 'true'
    monster.disabled = 'true'
    coke.disabled = 'true'
    coffee.disabled = 'true'

    gfuel.classList.add('disabled')
    monster.classList.add('disabled')
    coke.classList.add('disabled')
    coffee.classList.add('chosen')
    q5.scrollIntoView(); 
    addPoint
    result
})

const react = document.querySelector('#react');
const gaming = document.querySelector('#gaming');
const chatting = document.querySelector('#chatting');
const variety = document.querySelector('#variety');

react.addEventListener('click', () => {
    charlie = parseInt(charlie) + 1;
    ludwig = parseInt(ludwig) + 1;


    gaming.disabled = 'true'
    chatting.disabled = 'true'
    variety.disabled = 'true'
    react.disabled = 'true'

    react.classList.add('chosen')
    gaming.classList.add('disabled')
    chatting.classList.add('disabled')
    variety.classList.add('disabled')
    q6.scrollIntoView(); 
    addPoint
    result
})
gaming.addEventListener('click', () => {
    summit = parseInt(summit) + 1;
    tim = parseInt(tim) + 1;
    nickmercs = parseInt(nickmercs) + 1; 
    pokimane = parseInt(pokimane) + 1; 
    soda = parseInt(soda) + 1;
    forsen = parseInt(forsen) + 1;
    shroud = parseInt(shroud) + 1;
    tyler = parseInt(tyler) + 1;


    react.disabled = 'true'
    chatting.disabled = 'true'
    variety.disabled = 'true'
    gaming.disabled = 'true'

    react.classList.add('disabled')
    gaming.classList.add('chosen')
    chatting.classList.add('disabled')
    variety.classList.add('disabled')
    q6.scrollIntoView(); 
    addPoint
    result
})
chatting.addEventListener('click', () => {
    mizkif = parseInt(mizkif) + 1;
    ludwig = parseInt(ludwig) + 1;
    nick = parseInt(nick) + 1;
    charlie = parseInt(charlie) + 1;

    react.disabled = 'true'
    gaming.disabled = 'true'
    variety.disabled = 'true'
    chatting.disabled = 'true'

    react.classList.add('disabled')
    gaming.classList.add('disabled')
    chatting.classList.add('chosen')
    variety.classList.add('disabled')
    q6.scrollIntoView(); 
    addPoint
    result
})
variety.addEventListener('click', () => {
    xqc = parseInt(xqc) + 1;
    ludwig = parseInt(ludwig) + 1;
    nick = parseInt(nick) + 1;

    
    react.disabled = 'true'
    gaming.disabled = 'true'
    chatting.disabled = 'true'
    variety.disabled = 'true'

    react.classList.add('disabled')
    gaming.classList.add('disabled')
    chatting.classList.add('disabled')
    variety.classList.add('chosen')
    q6.scrollIntoView(); 
    addPoint
    result
})

const punch = document.querySelector('#punch');
const slam = document.querySelector('#slam');
const quit = document.querySelector('#quit');
const yell = document.querySelector('#yell');

punch.addEventListener('click', () => {
    summit = parseInt(summit) + 1;
    tyler = parseInt(tyler) + 1;

    slam.disabled = 'true'
    quit.disabled = 'true'
    yell.disabled = 'true'
    punch.disabled = 'true'

    punch.classList.add('chosen')
    slam.classList.add('disabled')
    quit.classList.add('disabled')
    yell.classList.add('disabled')
    addPoint
    resultEnd.scrollIntoView(); 
    result()

})
slam.addEventListener('click', () => {
    tyler = parseInt(tyler) + 1;


    punch.disabled = 'true'
    quit.disabled = 'true'
    yell.disabled = 'true'
    slam.disabled = 'true'

    punch.classList.add('disabled')
    slam.classList.add('chosen')
    quit.classList.add('disabled')
    yell.classList.add('disabled')
    addPoint
    resultEnd.scrollIntoView(); 
    result()
})
quit.addEventListener('click', () => {
    nickmercs = parseInt(nickmercs) + 1;
    shroud = parseInt(shroud) + 1;
    forsen = parseInt(forsen) + 1;

    punch.disabled = 'true'
    slam.disabled = 'true'
    yell.disabled = 'true'
    quit.disabled = 'true'

    punch.classList.add('disabled')
    slam.classList.add('disabled')
    quit.classList.add('chosen')
    yell.classList.add('disabled')
    addPoint
    resultEnd.scrollIntoView(); 
    result()

})
yell.addEventListener('click', () => {
    xqc = parseInt(xqc) + 1;
    ludwig = parseInt(ludwig) + 1;
    tyler = parseInt(tyler) + 1;
    tim = parseInt(tim) + 1;
    pokimane = parseInt(pokimane) + 1;


    punch.disabled = 'true'
    slam.disabled = 'true'
    quit.disabled = 'true'
    yell.disabled = 'true'

    punch.classList.add('disabled')
    slam.classList.add('disabled')
    quit.classList.add('disabled')
    yell.classList.add('chosen')
    addPoint
    resultEnd.scrollIntoView(); 
    result()
})


function result(){
    if(overwatchButton.classList.contains('chosen') || valorantButton.classList.contains('chosen') || codButton.classList.contains('chosen') || noneButton.classList.contains('chosen') &&
    pepeLaugh.classList.contains('chosen') || omegalul.classList.contains('chosen') || pagman.classList.contains('chosen') || noEmote.classList.contains('chosen') && 
    cat.classList.contains('chosen') || dog.classList.contains('chosen') || rabbit.classList.contains('chosen') || noPet.classList.contains('chosen') &&
    gfuel.classList.contains('chosen') || monster.classList.contains('chosen') || coke.classList.contains('chosen') || coffee.classList.contains('chosen') &&
    react.classList.contains('chosen') || gaming.classList.contains('chosen') || chatting.classList.contains('chosen') || variety.classList.contains('chosen')
    ){
        addPoint()
    
    }
}


function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}


function addPoint(){
    const yourStreamerNums = [xqc, charlie, ludwig, mizkif, summit, soda, nick, forsen, tyler, nickmercs, tim, pokimane, shroud]
    const yourStreamerName = ['xQc', 'Charlie', 'Ludwig', 'Mizkif', 'Summit1G', 'Sodapoppin', 'Nmplol', 'Forsen', 'Tyler1', 'Nickmercs', 'TimTheTatman', 'Pokimane', 'Shroud']

    const yourStreamer = ['imgs/yourxqc.jpg', 'imgs/yourcharlie.jpg', 'imgs/yourludwig.jpg', 'imgs/yourmiz.jpg', 'imgs/yoursummit.jpg', 'imgs/soda.jpg', 'imgs/yournick.jpg', 'imgs/yourforsen.png', 'imgs/yourtyler.jpg', 'imgs/yournickmercs.jpg', 'imgs/yourtim.jpg', 'imgs/pokimane.jpg', 'imgs/yourshroud.png']
    let streamer = yourStreamer[indexOfMax(yourStreamerNums)]

    const footer = document.querySelector('.footer');
    const yourStreamerImg = document.createElement('img')
    yourStreamerImg.classList.add('footer__img')
    yourStreamerImg.src = streamer
    footer.append(yourStreamerImg)

    const pog = document.querySelector('#pog')
    pog.src = 'imgs/pog.png'

    const loading = document.querySelector('#loading')
    loading.classList.remove('footer__loading')

    const streamerName = document.createElement('div')
    streamerName.append(`${yourStreamerName[indexOfMax(yourStreamerNums)]}`)
    streamerName.classList.add('footer__text')
    footer.append(streamerName)

    const restart = document.createElement('button')
    restart.append('Take Again')
    restart.classList.add('footer__restart')
    footer.append(restart)


    restart.addEventListener('click', () => {
        
        window.scrollTo(0, 0);
    
        
    
        startButton.addEventListener('click', () =>{
            document.location.reload()

        })
    })

    
    



}

    










