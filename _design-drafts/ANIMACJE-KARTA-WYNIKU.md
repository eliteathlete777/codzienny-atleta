# Karta wyniku — OFICJALNA WERSJA (tag: karta-wyniku-v1) — układ V5 + banery S10 + stempel ZALICZONE

Źródło prawdy: `index.html` → `dmPlayShareCardAnimation()`. Ten plik to zapis decyzji — nie zmieniać animacji bez zgody Damiana.

| # | Element | Animacja | Czas |
|---|---|---|---|
| 1 | Loader | Napis „ŁADOWANIE" + 3 skaczące kropki (wariant L3 z runda8) | 900 ms |
| 2 | Zdjęcie tła | Laserowy skan od góry do dołu, odsłania grafikę (`dmScanRevealBg`) | 1400 ms |
| 3 | CODZIENNY ATLETA | Maszyna do pisania, po wpisaniu „ATLETA" zmienia kolor na czerwony | 34 ms/znak |
| 4 | Data | Wjazd ze skali 1.3 → 1, drgnięcie karty (2 px) | 280 ms |
| 5 | Liczba pompek | Odliczanie od 0, czerwona fala uderzeniowa, bump 1.28 → 1, drgnięcie (6 px) | 260 ms + 13 ms/pompkę (maks. 900 ms) |
| 6 | Biała belka „POMPEK DZISIAJ" | Rozwinięcie w poziomie scaleX 0 → 1.08 → 1, drgnięcie (3 px) | 300 ms |
| 7 | Dzień tygodnia | Zjazd z −6 px + pojawienie się | 260 ms |
| 8 | Baner „JEDNA SERIA." (S10) | Wlot z lewej, skala 2.2 → 1.08 → 1, drgnięcie (5 px). Bez maszyny do pisania. | 380 ms |
| 9 | Baner „ZERO WYMÓWEK." (S10) | Wlot z lewej, skala 1.7 → 1, drgnięcie (3 px) | 300 ms |
| 10 | Stempel „ZALICZONE" | Spada ze skali 3 i obrotu 4° na 14°, uderza, najmocniejsze drgnięcie karty (8 px) | 300 ms |

Pozycje (top/left % karty 9:16): marka 5.5% · data 10.8% · liczba 41.5% (32.5cqw) · belka 51.5% · dzień 57.5% (5.9cqw) · banery od 68% · stempel 26%/70% (8.5cqw, nad liczbą — NIE może jej zasłaniać).
PNG do udostępniania (`renderShareCardPng`) odwzorowuje ten sam układ 1:1 (1080×1920, 1cqw = 10.8 px).
