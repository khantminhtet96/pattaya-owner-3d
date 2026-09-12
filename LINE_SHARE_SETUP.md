# LINE Report Share Setup (v5.0)

This version adds a real LINE Share Target Picker flow for Event Reports.
When configured, the app sends TWO LINE messages in one share action:
1. the generated Event Report image
2. the Thai Event Report text

## 1) Create a LINE Login channel
Open LINE Developers Console and create/select a LINE Login channel.

## 2) Add a LIFF app
In the channel, open the LIFF tab and add a LIFF app.
Use:
- Size: Full (or Tall)
- Endpoint URL: `https://pattaya-owner-3d.vercel.app`
- Scope: the minimum scopes required by the LIFF app

Copy the generated LIFF ID.

## 3) Enable Share Target Picker
In the LIFF tab, enable Share Target Picker and accept LINE's required agreement.

## 4) Put the LIFF ID into the website
Open:
Settings → LINE Report Share → LINE LIFF ID
Paste the LIFF ID and Save.

## 5) Test
Open Event Ticket → set Event Location, prices and quantities → Event Ticket Report → Share Event Report to LINE.
The LIFF target picker should open. Choose the chat/friend/group and send.

The app uploads the generated report image to the project's public `report-share` storage bucket, then sends the image message and text message through the LIFF Share Target Picker.

## Important
The normal Android Web Share sheet cannot force LINE to attach arbitrary text as a caption to an image. The LIFF Share Target Picker is used because it can send text and image message objects together.

Do not delete the existing Vercel project or existing local data. This update preserves the existing `pdS`, `pdM`, `pdE`, `pdH`, and `pdEC` data keys.
