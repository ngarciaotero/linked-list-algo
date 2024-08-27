import { linkedList } from "./linkedList.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const list = linkedList();

const createAppendCommand = () => ({
  execute: () => {
    rl.question("Enter value to append: ", (value) => {
      list.append(String(value));
      console.log("✓ Value appended\n" + "-".repeat(35));
      displayMenu();
    });
  },
});

const createPrependCommand = () => ({
  execute: () => {
    rl.question("Enter value to prepend: ", (value) => {
      list.prepend(String(value));
      console.log("✓ Value prepended\n" + "-".repeat(35));
      displayMenu();
    });
  },
});

const createInsertAtCommand = () => ({
  execute: () => {
    rl.question("Enter value to insert: ", (value) => {
      rl.question("Enter index: ", (index) => {
        list.insertAt(String(value), Number(index));
        console.log("✓ Value inserted\n" + "-".repeat(35));
        displayMenu();
      });
    });
  },
});

const createRemoveAtCommand = () => ({
  execute: () => {
    rl.question("Enter index to remove: ", (index) => {
      list.removeAt(Number(index));
      console.log("✓ Value removed\n" + "-".repeat(35));
      displayMenu();
    });
  },
});

const createDisplayCommand = () => ({
  execute: () => {
    const listStr = list.toString();
    console.log(
      "• Current List •\n" + listStr + "\n" + "-".repeat(listStr.length)
    );
    displayMenu();
  },
});

const createFindCommand = () => ({
  execute: () => {
    rl.question("Enter value to find: ", (value) => {
      const index = list.find(String(value));
      if (index !== null) {
        console.log(`✓ Value found at index ${index}\n` + "-".repeat(35));
      } else {
        console.log("✗ Value not found\n" + "-".repeat(35));
      }
      displayMenu();
    });
  },
});

const createGetSizeCommand = () => ({
  execute: () => {
    console.log(`List size: ${list.getSize()}\n${"-".repeat(35)}`);
    displayMenu();
  },
});

const createExitCommand = () => ({
  execute: () => {
    rl.close();
  },
});

const commandFactory = {
  1: createAppendCommand,
  2: createPrependCommand,
  3: createInsertAtCommand,
  4: createRemoveAtCommand,
  5: createDisplayCommand,
  6: createFindCommand,
  7: createGetSizeCommand,
  8: createExitCommand,
};

function displayMenu() {
  console.log("\nLinked List Operations: ");
  console.log("1. Append a value");
  console.log("2. Prepend a value");
  console.log("3. Insert at index");
  console.log("4. Remove at index");
  console.log("5. Display list");
  console.log("6. Find value");
  console.log("7. Get size");
  console.log("8. Exit");
  rl.question("\nEnter your choice: ", handleChoice);
}

function handleChoice(choice) {
  const commandCreator = commandFactory[choice];
  if (commandCreator) {
    const command = commandCreator();
    command.execute();
  } else {
    console.log("Invalid choice");
    displayMenu();
  }
}

console.log(
  "-".repeat(35) + "\nWelcome to the Linked List CLI!\n" + "-".repeat(35)
);
displayMenu();

rl.on("close", () => {
  console.log("Exiting...\n" + "-".repeat(35));
  process.exit(0);
});
