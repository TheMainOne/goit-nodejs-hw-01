const getAll = require("./getAll");

const getById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((item) => item.id === id.toString());
  console.log(id.toString());
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getById;
