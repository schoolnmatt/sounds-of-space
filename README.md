# Sounds of Space

## Project Option
Simple Browser Game

## Project Description
Matching game involving NASA sonifications

## Theme Interpretation
The theme relates to 'space' by focusing on the efforts of NASA scientists who compile data from bodies in outer space to produce observable sound.

## Intended User or Player
The matching game involves memorization and luck, features that could be frustrating for a younger audience. As such, the intended player base is young adults and older adults interested in experimental sounds.

## User or Player Goal
The goal of the game is to correctly match ten sonifications to ten pictures/sources without making three mistakes.

## Main Features
* Introduction/instructions
* Start game
* Correct/incorrect answer progress tracker
* Question/matching prompting
* Lose
* Win
* Restart

## JavaScript Features
Depending on the state of the game, JavaScript will toggle the visibility of one of four related grids that the player can interact with. Triggers for toggles include winning, losing, and button clicks. Button clicks are handled by event listeners. The correct/incorrect answer progress trackers make use of if, else statement logic to increment or decrement related variables and check if a win or lose condition has been met; in doing so, they update images or text to give feedback to the player. The question function handles the bulk of game randomization logic, randomly selecting question/answer elements and incorrect answer elements from temporary arrays and removing them from the pool of future options to be chosen. A reset function brings elements to their original starting state to allow for replayibility.

## Responsive Design
Grid and picture elements dynamically resize depending on the viewport. Upon reaching a certain size threshold, a media handler changes the layout of the game grid to more appropriately match a smaller screen size.

## User Testing
The testing process involved getting feedback from multiple in-person players. The main issue players found was clicking on pictures was not immediately obvious as a method of selecting answers.

## Revisions
The pictures were updated to have micro-animations, changing their opacity and transforming them slightly upon hover interaction. They were also given a border to make them look more like interactable icons. Finally, text in the middle of the grid listing the pictures as options one through three was added.

## Technologies Used
- HTML
- CSS
- JavaScript
- GitHub Pages

## Credits
* W3Schools JavaScript and CSS tutorials
* GeeksForGeeks array tutorials
* Canva
* Satellite icons courtesy of LaPLaS Games inc.
* Background photo courtesy of Sam Willis, Pexels
* All other photo and audio assets courtesy of NASA

## Future Improvements
Given more time, I would add a practice tool or media library. A practice tool or media library would allow users to select their favorite sounds at will without having to play the game to find them. It could also give additional educational information about the objects in space featured in the game.
