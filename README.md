# Pattaya Dinosaur Kingdom Owner v5.6

LINE Event Report sharing uses the official Social API Share Target Picker. It sends two LINE messages in one share action: an Image message followed by the Thai report Text message.

Requirements:
- Deploy this app over HTTPS.
- Create a LINE Login Social API app whose Endpoint URL is this production app URL.
- Enable Share Target Picker in LINE Developers Console.
- Put the Social API ID in Settings → LINE Report Share.
- Open the Social API app in LINE before testing.

Data safety:
- Existing localStorage keys are preserved.
- No localStorage.clear() or sessionStorage.clear() is used.
- Use Backup Data before changing browser/device data.


Universal Share: no LINE ID, LIFF ID, Facebook App ID, Telegram bot, or other Social API key is required. The phone/browser native Share menu is used. The report image contains the report information visually, so apps that ignore the text caption still receive the complete report image.
