const getAll = require("./getAll");
const fs = require("fs/promises");
const filePath = require("./filePath");

const add = async (data) => {
  const contacts = getAll();
  const newContact = { ...data };
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
};

module.exports = add;
