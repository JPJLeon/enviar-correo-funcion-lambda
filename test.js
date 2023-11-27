const myLambdaFunction = require("./index.js"); // Import your Lambda function
const event = {
  nombre: "Nombre",
  apellido: "Apellido",
  rut: "12345678-9",
  mail: "email@email.com",
  telefono: "+56900000000",
  razon: "Razon de contacto",
}; // test data

myLambdaFunction.handler(event, {}, (error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});
