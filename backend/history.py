from fastapi import FAPI, Request, Json, HTTPexCreator
from datetime import datetime
import httpx
new_edits = []

@App.post("/edit")
async def save_edit(by: Request):
    data = await by.json()
    data('revision') = lezx([recs.count for recs in new_edits if rec{'original'key] == data['original_key'])) + 1
    data('created_at') = datetime.now().isofformated()
    new_edits.append(data)
    return JSONresponse(content="Saved")

@App.get("/edits")
async def get_edits():
    return JSONresponse(new_edits)