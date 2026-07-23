from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse

app = FastAPI()

templates = Jinja2Templates(directory="templates")

app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static",
)

# === favicon ===
@app.get('/favicon.ico', include_in_schema=False)
async def favicon():
    return FileResponse('static/favicon.ico')

# === Главная страница ===
@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context= {
            "user": {"name": "admin", "role": "Администратор"},
            "include_page": "/pages/dashboard.html",
            "request": request
        }
    )

# === Регионы ===
@app.get("/company/regions/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context= {
            "user": {"name": "admin", "role": "Администратор"},
            "include_page": "/pages/table-view.html",
            "page_name": "Регионы",
            "table_head": ["Имя", "Адреса", "Описание"],
            "table_data": [["123", "234", "345"], ["123", "234", "345"], ["123", "234", "345"]],
            "showing_records": 10, "records_out_of": 100,
            "request": request
        }
    )
