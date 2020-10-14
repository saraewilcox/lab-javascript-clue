// ITERATION 1
//function selectRandom ()
// Suspects Collection
const suspectsArray = [
    mrGreen = {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },

    drOrchid = {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white'
    },
    
    profPlum = {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple'
    },
    
    missScarlet = {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red'
    },

    mrsPeacock = {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
    },

    mrMustard = {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow'
    }
];
// Rooms Collection
const roomsArray = [
    {name: 'Dinning Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'}
  ]
// Weapons Collection
const weaponsArray = [
    {name: 'rope', weight: 10},
    {name: 'knife', weight: 8},
    {name: 'candlestick',  weight: 2},
    {name: 'dumbbell',  weight: 30},
    {name: 'poison',  weight: 2},
    {name: 'axe',  weight: 15},
    {name: 'bat',  weight: 13},
    {name: 'trophy',  weight: 25},
    {name: 'pistol',  weight: 20}
];

// ITERATION 2
// select random character

//const random = Math.floor(Math.random() * suspectsArray.length);
//console.log(random, suspectsArray[random]);

// select random Room
//const randomRoom = Math.floor(Math.random() * roomsArray.length);
//console.log(randomRoom, roomsArray[randomRoom]);

// select random Weapon
//const randomWeapon = Math.floor(Math.random() * weaponsArray.length);
//console.log(randomWeapon, weaponsArray[random]);

/* Random Selector
Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array. */
function selectRandom(placeholderArray) {
    //if array empty its null 
  let random = placeholderArray[Math.floor(Math.random() * placeholderArray.length)];
  return random
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray), 
        weapon: selectRandom(weaponsArray), 
        room: selectRandom(roomsArray)
    }
}

// ITERATION 3
function revealMystery (envelope) {
    let suspectfirstname=envelope.suspect.firstName;
    let suspectlastname =envelope.suspect.lastName;
    let murderroom=envelope.room.name;
    let weaponused=envelope.weapon.name;
    return `${suspectfirstname} ${suspectlastname} killed Mr. Boddy using the ${weaponused} in the ${murderroom}!`;
}
