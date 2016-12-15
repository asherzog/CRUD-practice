
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE packer; ALTER SEQUENCE packer_id_seq RESTART WITH 1;')
    .then(function () {
      var seedData = [{
        name: 'Andy',
        comment: 'Woa the packers are cool! How about that game last week?',
        date: new Date,
        email: 'andy@email.com'
      }, {
        name: 'Bob',
        comment: 'Woa the packers suck! They were so bad last week',
        date: new Date,
        email: 'bob@email.com'
      }, {
        name: 'Andy',
        comment: 'Bob, you are so wrong!',
        date: new Date,
        email: 'andy@email.com'
      }, {
        name: 'Matt',
        comment: 'Yea Bob, dont be so negative!',
        date: new Date,
        email: 'Matt@email.com'
      }, {
        name: 'Steve',
        comment: 'Aaron GODgers, amrite??',
        date: new Date,
        email: 'steve@email.com'
      }, {
        name: 'Cheese Head',
        comment: 'Go Pack Go!',
        date: new Date,
        email: 'fake@email.com'
      }, {
        name: 'Bears guy',
        comment: 'You guys suck!',
        date: new Date,
        email: 'bears@email.com'
      }, {
        name: 'Lions Fan',
        comment: 'I wish we were as good as you!',
        date: new Date,
        email: 'lions@email.com'
      }, {
        name: 'Sconie',
        comment: 'Think the Badgers will win?',
        date: new Date,
        email: 'wis@email.com'
      }, {
        name: 'Cheese',
        comment: 'This is a Packers forum!',
        date: new Date,
        email: 'cheese@email.com'
      }];
      return knex('packer').insert(seedData);
    });
};
