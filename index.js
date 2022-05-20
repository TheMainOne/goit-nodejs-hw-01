const productsOperations = require("./db");
const argv = require("yargs").argv;

const fileOperations = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await productsOperations.getAll();
      console.table(contacts);
      break;
    case "get":
      const contact = await productsOperations.getById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(contact);
      break;
    case "add":
      const newContact = await productsOperations.add(name, email, phone);
      console.log(newContact);
      break;
    case "updateById":
      const updateContact = await productsOperations.updateById(
        id,
        name,
        email,
        phone
      );
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(updateContact);
      break;
    case "remove":
      const removeContact = await productsOperations.removeById(id);
      console.table(removeContact);
      break;

    default:
      console.table("Unknown action");
  }
};

fileOperations(argv);
