# LINE setup for v5.4

1. LINE Developers Console → create/select a LINE Login channel.
2. Add a LIFF app.
3. Endpoint URL: `https://pattaya-owner-3d.vercel.app/` (use the exact production URL after deployment).
4. In the LIFF tab, enable Share Target Picker and accept the required agreement.
5. Copy the LIFF ID.
6. In the owner app: Settings → LINE Report Share → paste LIFF ID → Save.
7. Tap Open in LINE.
8. Event Ticket → Event Ticket Report → Share Event Report to LINE.

Expected LINE result:
- Message 1: Event Report image
- Message 2: Thai Event Report text

The old `social-plugins.line.me/lineit/share` URL method is intentionally not used for the Event Report share.
