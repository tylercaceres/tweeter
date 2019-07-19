'use strict';

const Chance = require('chance'),
  chance = new Chance();

const md5 = require('md5');

module.exports = {
  generateRandomUser: () => {
    const gender = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName = chance.last();
    const userName = firstName + ' ' + lastName;

    let userHandle = '@';
    if (Math.random() > 0.5) {
      let prefix = chance.prefix({gender: gender});
      prefix = prefix.replace('.', '');
      userHandle += prefix;
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }

    const avatars = {
      Female: [
        '/images/avatar/girl1.png',
        '/images/avatar/girl2.jpg',
        '/images/avatar/girl3.png',
        '/images/avatar/girl4.jpg',
        '/images/avatar/girl5.png'
      ],
      Male: [
        '/images/avatar/pikachu.jpg',
        '/images/avatar/saitama.png',
        '/images/avatar/ssj3bluegoku.png',
        '/images/avatar/ssjbluegoku.png',
        '/images/avatar/tg.jpg'
      ]
    };

    const avatarArray = avatars[gender];
    const userAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};
