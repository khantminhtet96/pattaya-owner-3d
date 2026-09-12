# Pattaya Owner v5.1 — LINE Report Share

- Event Report Share uploads the generated report image to the public Supabase `report-share` bucket and opens LINE's web share plugin with both the image URL and the report text.
- No LIFF ID is required for the default LINE share flow.
- Existing localStorage data is preserved; no `localStorage.clear()` is used.
- Event price/quantity stepper and report date/location features are retained.
