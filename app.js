const screen = document.querySelector('#screen')


const scrMxWidth = parseInt(getComputedStyle(screen).width);
const scrMxHeight = parseInt(getComputedStyle(screen).height);


const ScoreCountElem = document.createElement('div');
let ScoreCount = 0;

ScoreCountElem.innerText = `Score : ${ScoreCount}`;
document.body.insertBefore(ScoreCountElem,screen);
ScoreCountElem.style.fontSize = '30px'

let soundCoin = new Audio("../audio/smw_coin.wav");
let soundMario = new Audio("../audio/smw_footstep.wav");
soundMario.volume = 0.6;

const bgm = new Audio("../audio/03 Swimming Around.mp3");
bgm.loop = true;
bgm.play();

// ScoreCountElem.innerText = `Score : ${ScoreCount}`;

// // create score elemnts
// const ScoreCountElem = document.createElement('div');
// const ScoreCount = function (e) {
//     if(isTouching(a, b) !== -1){
//         ScoreCount++;
//     }
// }

// ScoreCountElem.innerText = `Score : ${ScoreCount}`;
// document.body.insertBefore(ScoreCountElem,screen);




function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
    
	return !(
        aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
        );
    }
    
    const init = () => {
        //get the avatar
        const avatar = document.querySelector('#avatar');
        const avatarElem = parseInt(getComputedStyle(avatar).height);
        
        
        //get the coin
        const coin = document.querySelector('#coin');
        const coinElem = parseInt(getComputedStyle(coin));

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 100);
            soundMario.play();
        }
        if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -100);
            soundMario.play();
        }
        if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 100);
            avatar.style.transform = 'scaleX(1)';
            soundMario.play();
        }
        if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -100);
            avatar.style.transform = 'scaleX(-1)';
            soundMario.play();
            
        }

        if(isTouching(avatar,coin)){
            ScoreCount++;

            moveCoin();

            
            ScoreCountElem.innerText = `Score : ${ScoreCount}`;
            document.body.insertBefore(ScoreCountElem,screen);
            ScoreCountElem.style.fontSize = '30px'
            soundCoin.play();
        } 
        
    });
}


// create score elemnts
// const ScoreCountElem = document.createElement('div');
// let ScoreCount = 0;
// const ScoreCountFnc = function (e) {
//     if(isTouching(a, b) !== -1){
//         ScoreCount++;
//     }return ScoreCount;
// }




const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    console.log(element, scrMxHeight);
    if(currTop + amount + 100 <= scrMxHeight && currTop + amount >= 0){
        element.style.top = `${currTop + amount}px`;
    }
}


const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    if(currLeft + amount + 100 <= scrMxWidth && currLeft + amount >= 0){
        element.style.left = `${currLeft + amount}px`;
    }
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}



const moveCoin = () => {
    const x = Math.floor(Math.random() *(window.innerWidth -100))
    // if(x + amount + 100 <= scrMxHeight && x + amount >= 0){
        // }
        // const y = ?
    const y = Math.floor(Math.random() * (window.innerHeight -100))
        // coin.style.?? = ??
    
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
    // if(y + amount + 100 <= scrMxWidth && y + amount >= 0){
    // }
}

init();