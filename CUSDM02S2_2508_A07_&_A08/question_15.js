function registerUser(callback) {
  let error = Math.random() < 0.2 ? true : false;
  setTimeout(() => {
    if (error) {
      console.log("Error in registerUser");
    } else {
      console.log("registration Successfull");
      callback();
    }
  }, 1000);
}
function sendVerification(callback) {
  let error = Math.random() < 0.2 ? true : false;
  setTimeout(() => {
    if (error) {
      console.log("Error in sendVerification");
    } else {
      console.log("verification Successfull");
      callback();
    }
  }, 1000);
}

function loginUser(callback) {
  let error = Math.random() < 0.2 ? true : false;
  setTimeout(() => {
    if (error) {
      console.log("Error in loginUser");
    } else {
      console.log("Login Successfull");
      callback();
    }
  }, 1000);
}

function displayWelcomeMessage() {
  console.log("Welcome!");
}

registerUser(() => {
  sendVerification(() => {
    loginUser(displayWelcomeMessage);
  });
});
