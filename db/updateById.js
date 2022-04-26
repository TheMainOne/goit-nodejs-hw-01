const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const updateById = async (id, data) => {
  const contacts = await getAll();
  const index = contacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return null;
  }
  contacts[index] = { ...data };
  await updateContacts(contacts);
  return contacts[index];
};

module.exports = updateById;
