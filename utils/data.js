const names = [
    'Archbold',
    'Tonya',
    'Calvin',
    'Zoe',
    'Tommy',
    'Graybill',
    'Brymer',
    'Alyssa',
    'Wade',
    'Emma',
    'Keeley',
    'Benjamin',
    'William',
    'Shelley',
    'Ethan',
    'Helen',
    'Elmer',
    'James',
    'Abdul',
    'Uriel',
    'Abdulbasir',
    'Robyn',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Ben',
    'Arnecke',
    'Taylor',
    'Chad',
    'Gabriella',
    'Troy',
    'Tony',
    'Zein',
    'Zen',
    'Zendel',
    'Michael',
    'Mary-Lou',
    'Ralph',
    'Reed',
    'Zhen',
    'Zhi',
    'Lexi',
    'Bryan',
    'Zi',
    'Zidane',
    'Zijie',
    'Samantha',
    'Zion',
    'Logan',
    'Ryan',
    'Kaylee',
    'Zohaib',
    'Aidan',
    'Jordan',
    'Dylan',
    'Zubayr',
    'Patterson',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    'I should read more.', 
    'Star Trek is better than Star Wars.', 
    'My dog really could be a movie star.', 
    'Tomorrow is a brand new day.', 
    'Today is also a day.', 
    'Yesterday is in the past.'
  ]

  const reactions = [
    'Woah!', 
    'That is remarkable.',
    'Definitely going to show this to all my friends.', 
    'Top notch.', 
    'I\'m not impressed.', 
    'Great content.', 
    'So so true!'
  ]
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

  // Function to generate random assignments that we can add to student object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomArrItem(names), 
        reactions: [getRandomArrItem(reactions)]
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts };
  