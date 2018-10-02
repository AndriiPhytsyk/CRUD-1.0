/**
 * Articles.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // title: {
    //  // type: 'string',
    //   minLength: 2,
    //   maxLength: 40,
    //   required: true
    // },
    // url: {
    //   //type: 'string',
    //   minLength: 2,
    //   maxLength: 100,
    //   isURL: true,
    //   required: true
    // },
    // description: {
    //  // type: 'string',
    //   minLength: 2,
    //   maxLength: 1140,
    //   required: true
    // }
    // ,
    // validationMessages: { //hand for i18n & l10n
    //   title: {
    //     minLength: 'Length has to be min 2',
    //     maxLength: 'Length has to be min 1140'
    //   },
    //   url: {
    //     required: 'Username is required',
    //     isUrl:"Has to be valid",
    //     minLength: 'Length has to be min 2',
    //     maxLength: 'Length has to be min 240'
    //   },
    //   description: {
    //     minLength: 'Length has to be min 2',
    //     maxLength: 'Length has to be min 240'
    //   },
    // }
    // //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  },

  datastore: 'mongodb'
};

