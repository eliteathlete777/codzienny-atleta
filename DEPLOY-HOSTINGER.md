# Wdrożenie Codzienny Atleta na Hostinger — instrukcja dla agenta

## Źródło
- Repo: https://github.com/eliteathlete777/codzienny-atleta
- Gałąź: `claude/ecstatic-gauss-cdgq0s` (NIE `main` — najnowsza wersja jest tylko na tej gałęzi)
- Wersja do wdrożenia: najnowszy commit tej gałęzi (stan na 26.09.2026: `f81c2bb`, cache SW `codzienny-atleta-v12`)
- Pobranie: `git clone -b claude/ecstatic-gauss-cdgq0s https://github.com/eliteathlete777/codzienny-atleta.git`
  albo na GitHubie: przełącz gałąź → Code → Download ZIP.

## Co wgrać (dokładnie te pliki, z zachowaniem struktury)
```
index.html
sw.js
manifest.json
icon_180.png
icon_192.png
icon_512.png
assets/splash-bg.jpg
```
NIE wgrywać: `_design-drafts/`, `DEPLOY-HOSTINGER.md`, `.git/`.

Aplikacja to statyczny PWA — zero backendu, zero bazy, zero builda. Pliki wgrywa się 1:1.

## Gdzie
- Hostinger hPanel → Menedżer plików → folder domeny aplikacji (np. `public_html/` albo podfolder, jeśli appka ma działać pod ścieżką).
- Domenę/folder docelowy potwierdza Damian. **Jeśli aplikacja już tam działa — nadpisać pliki w TYM SAMYM folderze.**
- Wszystkie pliki muszą leżeć w jednym folderze (manifest ma `start_url: ./index.html`, `scope: ./`; SW musi być obok `index.html`).

## Zasady krytyczne (dane użytkownika)
1. **Ta sama domena i ten sam folder co dotychczas.** Dane (serie, combo, rekordy) są w localStorage przeglądarki, przypisane do adresu. Inny adres = użytkownik startuje od zera.
2. **Nie zmieniać `STORAGE_KEY = 'codziennyAtleta_v1'` w index.html.** Zmiana klucza kasuje dane po aktualizacji.
3. **Przy każdym wdrożeniu nowej wersji podbić `CACHE` w `sw.js`** (np. v12 → v13), inaczej telefony zostaną na starej wersji. Aktualna wersja w repo jest już podbita — przy wgrywaniu jej bez zmian nie trzeba nic ruszać.
4. Nie usuwać folderu i nie wgrywać „na czysto" pod nowy adres — tylko nadpisać pliki.

## Weryfikacja po wgraniu
1. Otwórz `https://<domena>/<folder>/sw.js` — w 5. linii ma być `codzienny-atleta-v12` (lub wyższa). Jeśli jest stara wersja → cache CDN Hostingera: hPanel → Wydajność / CDN → Wyczyść cache, i sprawdź ponownie.
2. Otwórz `https://<domena>/<folder>/` na telefonie: ekran startowy z banerami malowanymi farbą („BEZ SIŁOWNI." / „BEZ WYMÓWEK.").
3. Ekran wyboru: 🔥 CODZIENNE MINIMUM (belka „JEDNA SERIA DZIENNIE"), 💣 DODATKOWA SERIA, 🏆 REKORDY.
4. Zapisz serię → odpala się animacja karty wyniku zakończona stemplem ZALICZONE i czerwonym błyskiem.
5. Jeśli telefon ma zainstalowaną appkę i pokazuje starą wersję: zamknij appkę całkowicie i otwórz ponownie (SW podmienia się przy drugim uruchomieniu).
6. Sprawdź, że wcześniejsze serie użytkownika nadal są widoczne (panel główny / kalendarz).

## Opcjonalnie: automatyczne wdrażanie z GitHuba
- hPanel → Zaawansowane → Git (jeśli plan to obsługuje): repo jak wyżej, gałąź `claude/ecstatic-gauss-cdgq0s`, katalog docelowy = folder aplikacji. Wtedy `_design-drafts/` też trafi na serwer (niegroźne, ale można usunąć).
- Alternatywa: GitHub Actions + FTP-Deploy-Action. Dane FTP dodaje Damian sam w GitHub → Settings → Secrets. Agent nigdy nie prosi o hasła na czacie.
