const level1 = {
    prompt: 'You are driving along an empty highway. Your car suddenly comes to a stop. You notice smoke coming from the front of your car. Do you stay in your car and CALL someone for help, or do you climb out the car and LOOK around?',
    option1: 'CALL',
    option2: 'LOOK'
};
const level2 = [
    {
        choice: 'CALL',
        prompt: 'You pull out your cell phone to make a call but realise that there is no cell service. You decide to climb out your car and investigate what went wrong. Do you start to FIDDLE with the engine to hopefully fix the problem or do you just STARE at it?',
        option1: 'FIDDLE',
        option2: 'STARE'
    },
    {
        choice: 'LOOK',
        prompt: 'You climb out your car to take a look around. You notice a strange house amongst the trees. Do you STAY with your car and wait for someone to hopefully pass by, or do you ENTER the woods and head towards this strange house?',
        option1: 'STAY',
        option2: 'ENTER'
    }
];
const level3 = [
    {
        choice: 'FIDDLE',
        prompt: 'You begin to fiddle with the engine hoping to fix what went wrong. You drop your screwdriver into the engine cavity causing the problem to be even worse. You remember that you studied programming and not mechanical engineering. Feeling defeated, you climb back into your car and fall asleep on the back seat. You wake up to a policeman shining his flashlight into your car. You climb out your car and get a ride home with the policeman.',
        end: '1'
    },
    {
        choice: 'STARE',
        prompt: 'You open the bonnet/hood to take a look at the engine. You studied programming so you have no idea what went wrong or how to fix it. You see a car approaching in the distance. Do you WAVE in an attempt the get the drivers attention or do you CLOSE the bonnet/hood and sit down on the side of the road?',
        option1: 'WAVE',
        option2: 'CLOSE'
    },
    {
        choice: 'STAY',
        prompt: 'You stay with your car in hopes that someone will drive past and maybe help. After hours of waiting, you start to lose hope that someone will drive past. You get the idea to push your car hoping that there is a petrol station nearby where you can get help. Do you PUSH your car or continue to WAIT?',
        option1: 'PUSH',
        option2: 'WAIT'
    },
    {
        choice: 'ENTER',
        prompt: 'You decide to get a closer look at the strange house. You begin walking towards the house when you hear a something coming up behind you. Do you RUN towards the house as fast as you can, or do you continue to WALK and hope that whatever behind you is not dangerous?',
        option1: 'RUN',
        option2: 'WALK'
    }
];
const level4 = [
    {
        choice: 'WAVE',
        prompt: 'You successfully get the drivers attention. He pulls over to find out what is going on. You explain the situation and he offers you a ride home. Do you CLIMB into the stranger\'s car, or do you DECLINE his offer?',
        option1: 'CLIMB',
        option2: 'DECLINE'
    },
    {
        choice: 'CLOSE',
        prompt: 'You close the bonnet/hood and sit down on the side of the road. You notice a familiar car pull up behind your car. The driver steps out. It\'s your best friend from high school. They gives you a lift back to their house.',
        end: '2'
    },
    {
        choice: 'PUSH',
        prompt: 'You are tired of waiting and decide to push your car in hopes of finding a nearby petrol station. Five minutes into pushing your car you twist your ankle and have to stop pushing your car. A tow truck driver pulls over next to you and comments on your current situation. He offers to tow your car, but you refuse. With your injured pride you climb back into your car and attempt to start it. The smoke from your engine gets worse and you decide to try and sleep this nightmare away.',
        end: '3'
    },
    {
        choice: 'WAIT',
        prompt: 'You decide that pushing your car is not worth the effort and continue to wait. About 30 minutes later a tow truck driver notices you and offers to tow your car. You accept his offer, and he tows your car to the nearest auto-shop.',
        end: '4'
    },
    {
        choice: 'RUN',
        prompt: 'You don\'t feel like waiting to find if that thing coming up behind you is friendly so you decide to run as fast as you can towards the strange house. Suddenly you trip over a tree\'s root and get knocked out when you hit your head on the ground. You wake up on the floor inside the strange house. You take a look around. You see the back of someone sitting in front of a lit fireplace. You also notice that the door is open. Do you sit up and SPEAK with this stranger, remain SILENT, or do you run towards the DOOR?',
        option1: 'SPEAK',
        option2: 'SILENT',
        option3: 'DOOR'
    },
    {
        choice: 'WALK',
        prompt: 'You continue to walk, not paying attention the whatever is coming up behind you. Suddenly you feel a hand of your shoulder turning you around. It is a strange old man who introduces himself as the owner of the house in the woods. You greet him and explain your current situation. He reveals that he is a mechanic and offers to take a look at your car. He takes a look at your engine and lets you know that your engine over-heated. He removes the cap from a plastic tank inside the engine cavity and fills it with some of his water. You start your car, and all seems well. You thank him for the help and begin driving home.',
        end: '5'
    }
]
const level5 = [
    {
        choice: 'CLIMB',
        prompt: 'You climb into the stranger\'s car and let him know where to drop you off. After a lengthy drive the stranger drops you off at a petrol station. You pull out your phone and call for help.',
        end: '6',
    },
    {
        choice: 'DECLINE',
        prompt: 'You decline his offer and begin walking in hopes of finding help. After an hour of walking, you find another car that has broken down. The owner of the other car lets you know that he has called for help. You and the owner of the other car decide to wait together until help arrives.',
        end: '7',
    },
    {
        choice: 'SPEAK',
        prompt: 'You sit up carefully and quietly ask the stranger who he is and how you ended up on the floor of the strange house. He turns around and introduces himself as the owner of the house. He explains that you randomly decided to run away from him when he was trying to greet you. He then explains how you tripped and hit your head. He offers to let you stay the night. In the morning he hands you a map and points you in the direction of the nearest police station. You thank him and start walking towards the police station to find help.',
        end: '8',
    },
    {
        choice: 'SILENT',
        prompt: 'After looking around of while you decide that the safest option is to not confront this person and to remain silent. Later on in the evening the person in front of you reveals that he is the owner of the house and was very confused when you decied to run when he was trying to greet you. He explains that you tripped and hit your head in your attempt to run. He also offers for you to use his phone to call for someone to pick you up. You accept his offer and after a long wait, your best friend arrives to take you home.',
        end: '9',
    },
    {
        choice: 'DOOR',
        prompt: 'Without hesitation you get and sprint for the door. You get outside and continue to run as fast as you can. Once you feel you are far enough away you stop and try to figure out where you are. It\'s pitch dark and raining outside. You find a fallen, hollow tree and decide to climb inside and wait until morning.',
        end: '10',
    },
]

let endings;
try {
    endings = JSON.parse(localStorage.ag_endings);
} catch (e) {
    endings = [];
    localStorage.ag_endings = JSON.stringify(endings);
}

const endingsTrack = document.querySelector('.endings');
endingsTrack.setAttribute('style', `width: ${endings.length * 75}px;`);

const prompt = document.querySelector('.prompt');
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
prompt.textContent = level1.prompt;

choice1.dataset.level = 1;
choice1.dataset.option = level1.option1;
choice1.textContent = choice1.dataset.option;

choice2.dataset.level = 1;
choice2.dataset.option = level1.option2;
choice2.textContent = choice2.dataset.option;

choice1.addEventListener('click', (event) => {
    let level = event.target.dataset.level;
    let choice = event.target.dataset.option;
    switch (level) {
        case '0':
            newLevel(1, level1.prompt, level1.option1, level1.option2);
            break;
        case '1':
            console.log('Restart');
            level2.forEach((option) => {
                if (option.choice == choice) {
                    newLevel(2, option.prompt, option.option1, option.option2);
                }
            });
            break;
        case '2':
            level3.forEach((option) => {
                if (option.choice == choice) {
                    if (option.end) {
                        endGame(option.end, option.prompt);
                    } else {
                        newLevel(3, option.prompt, option.option1, option.option2);
                    }
                }
            });
            break;
        case '3':
            level4.forEach((option) => {
                if (option.choice == choice) {
                    if (option.end) {
                        endGame(option.end, option.prompt);
                    } else {
                        newLevel(4, option.prompt, option.option1, option.option2);
                        if (option.option3) {
                            choice3.dataset.level = 4;
                            choice3.dataset.option = option.option3;
                            choice3.textContent = choice3.dataset.option;
                        }
                    }
                }
            });
            break;
        case '4':
            level5.forEach((option) => {
                if (option.choice == choice) {
                    endGame(option.end, option.prompt);
                }
            });
            break;
    }
});

choice2.addEventListener('click', (event) => {
    let level = event.target.dataset.level;
    let choice = event.target.dataset.option;
    switch (level) {
        case '1':
            level2.forEach((option) => {
                if (option.choice == choice) {
                    newLevel(2, option.prompt, option.option1, option.option2);
                }
            });
            break;
        case '2':
            level3.forEach((option) => {
                if (option.choice == choice) {
                    if (option.end) {
                        endGame(option.end, option.prompt);
                    } else {
                        newLevel(3, option.prompt, option.option1, option.option2);
                    }
                }
            });
            break;
        case '3':
            level4.forEach((option) => {
                if (option.choice == choice) {
                    if (option.end) {
                        endGame(option.end, option.prompt);
                    } else {
                        newLevel(4, option.prompt, option.option1, option.option2);
                    }
                }
            });
            break;
        case '4':
            level5.forEach((option) => {
                if (option.choice == choice) {
                    endGame(option.end, option.prompt);
                }
            });
            break;
    }
});

choice3.addEventListener('click', (event) => {
    let level = event.target.dataset.level;
    let choice = event.target.dataset.option;
    switch (level) {
        case '4':
            level5.forEach((option) => {
                if (option.choice == choice) {
                    endGame(option.end, option.prompt);
                }
            });
            break;
    }
})

const newLevel = (level, promptText, option1Text, option2Text) => {
    prompt.textContent = promptText;

    choice1.dataset.level = level;
    choice1.dataset.option = option1Text;
    choice1.textContent = choice1.dataset.option;

    choice2.dataset.level = level;
    choice2.dataset.option = option2Text;
    choice2.textContent = choice2.dataset.option;
}

const endGame = (endNumber, promptText) => {
    if (!endings.includes(endNumber)) {
        endings.push(endNumber);
    }
    console.log(endings);
    localStorage.ag_endings = JSON.stringify(endings);

    prompt.textContent = promptText;
    choice1.dataset.level = 0;
    choice1.dataset.option = 'Restart';
    choice1.textContent = choice1.dataset.option;

    choice2.dataset.level = 0;
    choice2.dataset.option = '';
    choice2.textContent = choice2.dataset.option;

    choice3.dataset.level = 0;
    choice3.dataset.option = '';
    choice3.textContent = choice3.dataset.option;

    endingsTrack.setAttribute('style', `width: ${endings.length * 75}px;`);
}