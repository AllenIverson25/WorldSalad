function generateStory(){
    document.getElementById('generateButton').classList.add('hidden');

let name1 = prompt('Enter A Name?')
let emotion = prompt('Enter an emotion?')
let adjective = prompt('Enter an adjective?')
let name2 = prompt('Another Name?')
let adjective2 = prompt('Another Adjective?')
let exclamation = prompt('Word shouted from the crowd?')
let verb = prompt('Enter a verb?')
let adjective3 = prompt('Enter Anooother Adjective?')
let noun = prompt('Enter a noun?')
let time = prompt('Enter a time?')
let adjective4 = prompt('Enter last adjective dont worry?')


let myStory = `The sun was setting, and the stadium was packed. The mile race was about to begin, and ${name1} was feeling ${emotion}. As the starting gun went off, ${name1} surged ahead, cutting through the ${adjective} air. The first lap felt smooth, but soon the competition was breathing down their neck.
On the second lap, ${name1} saw ${name2} pushing hard, their strides looking ${adjective2}, but ${name1} wasn’t backing down. They could hear the crowd yelling “${exclamation}!” as they rounded the turn. With a burst of energy, ${name1} ${verb} past a ${adjective3} opponent, determined to take the lead.
The final lap was intense. Every step felt like they were running through ${noun}, but ${name1} pushed harder, ignoring the burning in their legs. As they crossed the finish line in a blazing ${time}, the crowd went crazy. ${name1} had done it—they were the ${adjective4} champion of the mile!`
console.log(myStory)

document.getElementById('story').innerHTML = myStory;

}