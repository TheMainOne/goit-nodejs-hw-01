const fs = require("fs/promises");
const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const removeById = async (id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  const newContacts = contacts.filter((_, idx) => idx !== index);
  await updateContacts(newContacts);
  console.log(`${id} has successfully remove from contacts!`);
  return contacts[index];
};

module.exports = removeById;
