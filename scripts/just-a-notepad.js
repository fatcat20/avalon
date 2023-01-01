// Store data in the database
database.ref("/users").set({
    username: "John",
    email: "john@example.com"
  });


// This is reading from a table
database.ref("/users").on("value", function(snapshot) {
    console.log(snapshot.val()); // Print the data in the "users" object
  });

// This is reading everything
database.ref().once("value", function(snapshot) {
    console.log(snapshot.val()); // Print all data in the database
  });

// This is deleting a table
database.ref("/users").remove();

// This is deleting everything
database.ref().set(null);
