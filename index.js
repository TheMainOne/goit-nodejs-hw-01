const productsOperations = require("./db");

const fileOperations = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await productsOperations.getAll();
      console.log(contacts);
      break;
    case "getById":
      const contact = await productsOperations.getById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = productsOperations.add(data);
      console.log(newContact);
      break;
    default:
      console.log("Unknown action");
  }
};

const newData = {
  id: "11",
  name: "Maksym",
  email: "maksym@mail.com",
  phone: "(122) 123-5792",
};
// fileOperations({ action: "getAll" });
fileOperations({ action: "add", data: newData });

// console.log("fsfs");
// fileOperations("./db/contacts.json", "add", "Hello world");
// fileOperations("./db/contacts.json", "replace", "Hello world");
