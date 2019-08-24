const theRealValley = [
  "####################################################",
  "#                 ####         ****              ###",
  "#   *  @  ##                 ########       OO    ##",
  "#   *    ##        O O                 ****       *#",
  "#       ##*                        ##########     *#",
  "#      ##***  *         ****                     **#",
  "#* **  #  * O***      #########                  **#",
  "#* **  #      *               #   *              **#",
  "#   O  ##              #   O   #  ***         ######",
  "#*            @       #       #   *        O  #    #",
  "#*                    #  ######                 ** #",
  "###          ****          ***                  ** #",
  "#       O                        @         O       #",
  "#   *     ##  ##  ##  ##               ###      *  #",
  "#   **         #              *       #####  O     #",
  "##  **  O   O  #  #    ***  ***        ###      ** #",
  "###               #   *****   O                ****#",
  "####################################################"
];

const dystopia = new LifelikeWorld(theRealValley,  {'#': Wall, 'O': PlantEater, '@': Tiger, '*': Plant});

// animate world
function animateWorld() {
  dystopia.turn();
  document.body.innerHTML = '';
  document.body.innerHTML = `<pre>${dystopia.toString()}</pre>`;
}

setInterval(animateWorld, 500);