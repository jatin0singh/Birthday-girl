 // Function to reveal the surprise message section
function revealMessage() {
    const messageSection = document.getElementById('message-section');
    messageSection.style.display = 'block'; // Show the hidden section
}
// Function to handle the dress selection
function selectDress(dressName) {
    // Update the status message
    document.getElementById('status').textContent = `🎉 You have selected: ${dressName}! 🎁`;

    // Optionally, you could send a notification or trigger some action here
    sendWhatsAppNotification(dressName);  // Send WhatsApp notification (if configured)
}

// Function to handle the "More Dresses" button click
function moreDresses() {
    document.getElementById('status').textContent ="need to select one of them🎉";
    // You can add more dresses dynamically, or redirect to another page.
    // For nowf, just showing a simple message.
    setTimeout(function() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdcx7gVybaTgSexSKuNuLlzNdjmk8e8x2hidgmDnFb4fXo8MA/viewform?usp=header"; // Replace with your actual page link
    }, 2000);
}

// Example function to send a WhatsApp notification (if Twilio is set up)
function sendWhatsAppNotification(dressName) {
    const accountSID = "AC42f9bbed55837cd516a6a899fdb7ff63";  // Replace with your Twilio Account SID
    const authToken = "76cca039dd20409fd41b6267a851df4c";  // Replace with your Twilio Auth Token
    const fromWhatsAppNumber = "whatsapp:+14155238886";  // Twilio WhatsApp Sandbox Number
    const toWhatsAppNumber = "whatsapp:+916006885526";  // Replace with your WhatsApp number

    const message = `🎉 Your girlfriend selected: ${dressName}! 🎁`;

    fetch("https://api.twilio.com/2010-04-01/Accounts/" + accountSID + "/Messages.json", {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(accountSID + ":" + authToken),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            From: fromWhatsAppNumber,
            To: toWhatsAppNumber,
            Body: message
        })
    })
    .then(response => response.json())
    .then(data => console.log("WhatsApp Notification Sent!", data))
    .catch(error => console.error("Error sending WhatsApp message:", error));
}




