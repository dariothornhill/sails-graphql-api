module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true
    },

    yearPublished: {
      type: 'string',
      required: true
    },

    genre: {
      type: 'string',
      isIn: ['ADVENTURE', 'COMICS', 'FANTASY', 'UNKNOWN'],
      defaultsTo: 'UNKNOWN'
    },
    author: {
      model: 'Author',
      required: true
    }

  }

};
