const getAll = require("./getAll");
const fs = require("fs/promises");
const updateContacts = require("./updateContacts");
const { v4: uuidv4 } = require("uuid");

const add = async (name, email, phone) => {
  const contacts = await getAll();
  const newContact = { name: name, id: uuidv4(), email: email, phone: phone };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = add;
