/**
 * Articles.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      minLength: 2,
      maxLength: 40,
      required: true
    },
    url: {
      type: 'string',
      minLength: 2,
      maxLength: 240,
      isURL: true,
      required: true
    },
    description: {
      type: 'string',
      minLength: 2,
      maxLength: 1140,
      required: true
    },

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  },

  datastore: 'mongodb'
};

