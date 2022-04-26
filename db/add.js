const getAll = require("./getAll");
const fs = require("fs/promises");
const updateContacts = require("./updateContacts");

const add = async (data) => {
  const contacts = await getAll();
  const newContact = { ...data };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = add;
