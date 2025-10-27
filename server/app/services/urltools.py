import requests
from bs4 import BeautifulSoup
from typing import List, Dict

def extract_links(url: str) -> List[Dict[str, str]]:
    r = requests.get(url, timeout=10)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, 'html.parser')
    links = []
    for a in soup.select('a[href]')[:100]:
        href = a.get('href')
        title = (a.get_text() or '').strip()[:120]
        if href and href.startswith('http'):
            links.append({'href': href, 'title': title or href})
    return links
