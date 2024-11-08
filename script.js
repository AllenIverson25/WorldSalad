function generateStory() {
    document.getElementById('generateButton').classList.add('hidden');

    let name1 = prompt('Enter A Name?');
    let emotion = prompt('Enter an emotion?');
    let adjective = prompt('Enter an adjective?');
    let name2 = prompt('Another Name?');
    let adjective2 = prompt('Another Adjective?');
    let exclamation = prompt('Word shouted from the crowd?');
    let verb = prompt('Enter a verb?');
    let adjective3 = prompt('Enter Another Adjective?');
    let noun = prompt('Enter a noun?');
    let time = prompt('Enter a time?');
    let adjective4 = prompt('Enter last adjective, don\'t worry?');

    let myStory = `The sun was setting, and the stadium was packed. The mile race was about to begin, and <b>${name1}</b> was feeling <b>${emotion}</b>. As the starting gun went off, <b>${name1}</b> surged ahead, cutting through the <b>${adjective}</b> air. The first lap felt smooth, but soon the competition was breathing down their neck.`;

    let myStoryOne = `On the second lap, <b>${name1}</b> saw <b>${name2}</b> pushing hard, their strides looking <b>${adjective2}</b>, but <b>${name1}</b> wasn’t backing down. They could hear the crowd yelling “<b>${exclamation}</b>!” as they rounded the turn. With a burst of energy, <b>${name1}</b> <b>${verb}</b> past a <b>${adjective3}</b> opponent, determined to take the lead.`;

    let myStoryTwo = `The final lap was intense. Every step felt like they were running through a <b>${noun}</b>, but <b>${name1}</b> pushed harder, ignoring the burning in their legs. As they crossed the finish line in a blazing <b>${time}</b>, the crowd went crazy. <b>${name1}</b> had done it—they were the <b>${adjective4}</b> champion of the mile!`;

    document.getElementById('story').innerHTML = myStory;
    document.getElementById('story1').innerHTML = myStoryOne;
    document.getElementById('story2').innerHTML = myStoryTwo;
}
