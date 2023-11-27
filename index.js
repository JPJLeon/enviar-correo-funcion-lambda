const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-east-1" });

exports.handler = async (event, context) => {
  //const formResult = JSON.parse(event); // Assuming the form data is sent in the request body as JSON.
  //console.log(event);

  if (!event.mail) {
    return { statusCode: 500, body: "Email sending failed, email is required" };
  }

  const params = {
    Destination: {
      ToAddresses: [event.mail], // Change this to the recipient's email address.
    },
    Message: {
      Body: {
        //Text: { Data: JSON.stringify(formResult) },
        Text: {
          Data: `Nombre: ${event.nombre}\n Apellido: ${event.apellido}\n Rut: ${event.rut}\n Mail: ${event.mail}\n Teléfono: ${event.telefono}\n Razón de contacto: ${event.razon}\n`,
        },
      },
      Subject: { Data: "Form Submission" },
    },
    Source: "contacto@fasty.fit", // Your verified SES sender email address.
  };

  try {
    await ses.sendEmail(params).promise();
    return { statusCode: 200, body: "Email sent successfully" };
  } catch (err) {
    console.error("Error sending email:", err);
    return { statusCode: 500, body: "Email sending failed" };
  }
};
