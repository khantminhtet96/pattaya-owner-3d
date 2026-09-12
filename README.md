# Pattaya Dinosaur Kingdom Owner v5.4

LINE Event Report sharing uses the official LIFF Share Target Picker. It sends two LINE messages in one share action: an Image message followed by the Thai report Text message.

Requirements:
- Deploy this app over HTTPS.
- Create a LINE Login LIFF app whose Endpoint URL is this production app URL.
- Enable Share Target Picker in LINE Developers Console.
- Put the LIFF ID in Settings → LINE Report Share.
- Open the LIFF app in LINE before testing.

Data safety:
- Existing localStorage keys are preserved.
- No localStorage.clear() or sessionStorage.clear() is used.
- Use Backup Data before changing browser/device data.
