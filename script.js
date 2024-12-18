function generateStory() {

      
      
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

    let myStory = `The sun was setting, and the stadium was packed. The mile race was about to begin, and <span class="bold">${name1}</span> was feeling <span class="bold">${emotion}</span>. As the starting gun went off, <span class="bold">${name1}</span> surged ahead, cutting through the <span class="bold">${adjective}</span> air. The first lap felt smooth, but soon the competition was breathing down their neck.`;

    let myStoryOne = `On the second lap, <span class="bold">${name1}</span> saw <span class="bold">${name2}</span> pushing hard, their strides looking <span class="bold">${adjective2}</span>, but <span class="bold">${name1}</span> wasn’t backing down. They could hear the crowd yelling “<span class="bold">${exclamation}</span>!” as they rounded the turn. With a burst of energy, <span class="bold">${name1}</span> <span class="bold">${verb}</span> past a <span class="bold">${adjective3}</span> opponent, determined to take the lead.`;

    let myStoryTwo = `The final lap was intense. Every step felt like they were running through a <span class="bold">${noun}</span>, but <span class="bold">${name1}</span> pushed harder, ignoring the burning in their legs. As they crossed the finish line in a blazing <span class="bold">${time}</span>, the crowd went crazy. <span class="bold">${name1}</span> had done it—they were the <span class="bold">${adjective4}</span> champion of the mile!`;

    document.getElementById('story').innerHTML = myStory;
    document.getElementById('story1').innerHTML = myStoryOne;
    document.getElementById('story2').innerHTML = myStoryTwo;

    document.getElementById('generateButton').classList.add('hidden');
    document.getElementById('hide').classList.add('hidden');
    document.getElementById('carouselExample').classList.remove('hidden');
}


// Wait for the page to fully load
window.addEventListener('load', function() {
    // Hide the loading screen after a deliberate delay
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
  
    // Add a longer delay (e.g., 3 seconds)
    setTimeout(() => {
      loading.style.transition = 'opacity 0.5s ease';
      loading.style.opacity = 0;
  
      // Wait for transition to complete before removing the loading screen
      setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
      }, 500); // Match this duration to the fade-out transition
    }, 3000); // Delay in milliseconds (3 seconds)
  });

  