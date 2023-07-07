/*
 * This is an example of using Firebase Cloud Messaging in Node.js
 * to send a notification to a specific device running the Enmesh-
 * ed app.
 *
 * This code uses the Firebase Admin SDK to send the notification.
 * It is not the desired way to send notifications to the Enmeshed
 * app, but it is a working example that may be useful in the fut-
 * ure.
 *
 * This is a working example on 7 July 2023.
 */

require("dotenv").config();
const admin = require("firebase-admin");

// Project Settings / Service Accounts / Generate New Private Key
const serviceAccount = require(process.env.SERVICE_ACCOUNT_PATH);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

var message = {
    data: {
        title: "Notification Title",
        body: "This is an example of Firebase Cloud Messaging in Node.js",
    },
    // the token is provided by the Enmeshed app via debug panel
    token: process.env.TOKEN,
};

admin
    .messaging()
    .send(message)
    .then((response) => {
        console.log("Successfully sent message:", response);
    })
    .catch((error) => {
        console.log("Error sending message:", error);
    });
