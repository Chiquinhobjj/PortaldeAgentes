from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import landscape
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from pathlib import Path
from ..schemas import PresentationJson

PAGE = landscape((11*inch, 6.1875*inch))

try:
    pdfmetrics.registerFont(TTFont('DejaVu', 'DejaVuSans.ttf'))
except Exception:
    pass

def _draw_wrap_text(c, text: str, x: float, y: float, max_width: float, leading=14, font='DejaVu', size=14):
    try:
        c.setFont(font, size)
    except Exception:
        c.setFont('Helvetica', size)
    words = text.split(' ')
    line = ''
    cursor = y
    for w in words:
        test = (line + ' ' + w).strip()
        if c.stringWidth(test) > max_width:
            c.drawString(x, cursor, line)
            line = w
            cursor -= leading
        else:
            line = test
    if line:
        c.drawString(x, cursor, line)

def build_pdf(pres: PresentationJson, out_path: Path):
    c = canvas.Canvas(str(out_path), pagesize=PAGE)
    width, height = PAGE

    for slide in pres.slides:
        c.setFillGray(0.95)
        c.rect(0, 0, width, height, stroke=0, fill=1)

        c.setFillGray(0)
        _draw_wrap_text(c, slide.titulo, 40, height-60, width-80, size=22)

        _draw_wrap_text(c, slide.legenda, 40, height-120, width-80, size=14)

        c.setFillGray(0.85)
        c.rect(width-380, 60, 320, height-180, stroke=0, fill=1)
        _draw_wrap_text(c, "Imagem gerada por IA aqui", width-370, 80, 300, size=10)

        c.showPage()

    c.save()
