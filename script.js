//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "You are not connected.",
  "Make sure 'Your Lover' is turned on and in range.",
  "Now discoverable as 'Lonely'.",
  "No connection detected.",
  "Connection Unsuccessful.",
  "Your connection is weak.",
  "Your connection is unstable.",
  "Your connection has always been unstable.",
  "Your connection will always be unstable.",
  "'Lover' is out of range.",
  "Make sure 'Your Lover' has their Bluetooth turned on.",
  "Make sure 'Your Lover' is not with 'Someone Else'.",
  "Try Again." , 
  "Bad Connection.",
];

const buttonRetry = document.getElementById("button-network");

// Function to handle the button click and update the text
function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}

//end of network error function

//function dropdown menu (do not edit this first part)
function addText(content) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = content;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "Shake the 8ball") {
    addText("");
  } else if (x === "Option 1") {
    addText("No");
  } else if (x === "Option 2") {
    addText("Yes! Congratulations!");
  } else if (x === "Option 3") {
    addText("No, but keep trying.");
  } else if (x === "Option 4") {
    addText("You are delusional.");
  } else if (x === "Option 5") {
    addText("You will never find love.");
  }
  }
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "Inebriated",
  "you never loved me",
  "performative male",
  "touch me right there, please",
  "tell me you love me",
  "starving from your love",
  "tell me i'm pretty",
  "whisper filthy lies",
  "on my knees for you",
  "i'm so desperate",
  "leaving me on read",
  "tell me i'm special",
  "am i a good girl?"
];
const sevenSyllables = [
  "let me call you daddy",
  "i'm so lonely without you",
  "tell me i belong to you",
  "drunk off a Marlboro red",
  "crossfaded from vodka shots",
  "i'm so horny for your touch",
  "let me love you completely",
  "i won't see sunlight on skin",
  "midnight ballet piourette",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
}
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "asutoras", 
  "angela.xmainx",
  "asshole who ghosted me",
  "amyxnguyen",
  "audedoll",

  "ben.mustard",
  "brigittemalone",
  "best friend from high school who left me on read",
  "bl4ckst4r",

  "conidi.s.01",
  "c.nguyen",
  "close friend who is now a stranger",
  "c4ndy.crushx",
  "cousin who i haven't spoken to in years",

  "danielle.lee",
  "delu.kmm",
  "drug dealer with good weed",
  "dom._.tate",
  "danaeyney",


  "emma.chen",
  "emma.hewitt_",
  "ex-girlfriend who i still have feelings for",
  "emchee",

  "feddononme",
  "fawningonyou",
  "friend who wasn't really a friend",
  "f4nt4sisingabtU",
  "first kiss",

  "girlinblue",
  "gabrielle.zen",
  "glittery.ghost",
  "guy who i thought liked me but actually just wanted to be friends",
  "gazel.hreen",
  
  "hannah._.lee",
  "hunter.smith",
  "horrible ex-boyfriend",
  "h4rdly.human",
  "henrykenn.",

  "_itsmejessica",
  "idokie",
  "idiot who cheated on me",

  "juliaphan",
  "justinexpark",
  "justinturner_",
  "jackandthebean",
  "jesus worshipper",
  
  "karenxnguyen",
  "kev1n.l33",
  "kissed and told",
  "kirby.c",

  "lilithxoxo",
  "l14mch3stnut",
  "lost love from summer camp",
  "lillies.drayton",

  "mass.imo",
  "my ex-best friend who still stalks me",
  "michaelnguy",

  "nathan.lee",
  "nathanxnguyen",
  "natal1a.nun",
  
  "oliviawright056",
  "olivia.hewitt",
  "old friend who i thought was a friend but actually just wanted to use me",
  "oliver.tweest",

  "peter.park",
  "peterpiperpickedap3pper",
  "primerex",
  "person who i met at a club one night",

  "quinnxnguyen",
  "quash123",
  "qiqi.wt",
  "queer awakening",

  "rosette.christian",
  "rach_elle03",
  "roman.patrick",
  "random hookup from a party",
  "regretful one night stand",

  "sarahdollface",
  "sean.__",
  "soulmate who will never be mine",
  "s4tanxsamosa",

  "taylor.smith",
  "taylarx.xtran",
  "the one that got away",
  "the one who got away's new partner",
  "tait.abigail",

  "ultra.violet",
  "unrequited love",
  "user1234321",
  "ugly ex-boyfriend",

  "vicky.chen",
  "vicky.ngo",
  "virgin who won't leave me alone",
  "val._.valentinex",
  "v4mpires4us",

  "wright_x_nathaniel",
  "warton.smith05",
  "wasted potential hookup",
  "wasted potential relationship",
  "william.l33",

  "x_christina.chi_x",
  "xavier.nguyen01",
  "xhaniee3",

  "_yours.truly_",
  "yolo.ast8a",
  "yng.ho3",

  "zacharysonder",
  "zakzakgoose",
  "zoee.beardley",
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "You,Lovers,I,".split(
      ","
    ),
  verbs =
    "drink,kiss,fuck,kneel in,regret,LOVE,bruise,snort,suck,blow,lick,leave,beg".split(
      ","
    ),
  objects =
    "the bed,the couch,secret alleyways,church,a lit cigarette,moonshine,a club, daylight, midnight".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 5) {
    removeFirstLine();
  }
  setTimeout(processPoem, 1000);
}
// Start the process
processPoem();