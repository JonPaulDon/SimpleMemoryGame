# Pre-work - SimpleMemoryGame

SimpleMemoryGame is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: JonPaulDongieux

Time spent:7 hours spent in total

Link to project: https://spotless-gelatinous-bassoon.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess // User actually gets three incorrect guesses

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
  I changed the first four keys to be in D Major. The sequence plays out the beginning of Mary Had a Little Lamb. Afterwards, sequences are randomly generated
## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://imgur.com/DjWSovx)
https://imgur.com/DjWSovx

![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/css/css_combinators.asp
https://www.w3schools.com/css/css_comments.asp
https://www.the-art-of-web.com/javascript/creating-sounds/
https://www.rapidtables.com/web/css/css-color.html
https://www.w3schools.com/js/js_htmldom_html.asp
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
https://www.w3schools.com/jsref/event_onmouseleave.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I encountered a bug where if the user held a button down and then moved the cursor off of the button and released it, the tone would play infinitely. I understood that this triggered because the onmouseup event wouldn't trigger once the cursor moved off the button. At first I tried adding the onmouseup event to the body of the page which didnt work. Then I tried adding the onmouseup event to the div surrounding our buttons which also did nothing, so I concluded that this method was meant to be used with buttons. once I found out about the onmouseleave event, I set it to trigger the stopTone() method and that fixed this bug.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Is it possible to automatically detect the region a user is accessing the site from ? 
I was thinking we could add a tutorial popup that automatically displays in the most popular language in the region a user is accessing the site from along with a "Don't show this again" tag and the option to display the tutorial in other languages.
I was surprised to learn that let and const were not added to javascript until 2015. I am interested in what it's like to work with a language that is changing.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
The first feature I would add is displaying "hearts" to symbolize the remaining guesses a player has left instead of using a p tag and update the text that says "Remaining attempts: n"
One of the reasons why I thought to add this feature is for a non-english speaker, the text saying "remaining attempts" wouldn't be helpful(and perhaps the name). But otherwise this game can be played by people from any region.
I added "Mary had a Little Lamb" as the first song. I was considering adding "Hot Cross Buns" as another song, but I realized that different delay settings are better suited to certain songs. Another interesting feature would be to vary the delay.
Some other features I would add would be a difficulty setting which would modify the time you get to make a guess and the length of the pattern. I am not sure if I would have time to add a leaderboard afterwards but that would be a fitting feature.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/68a90784641d4780bca7c8c8f825ba0a)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
