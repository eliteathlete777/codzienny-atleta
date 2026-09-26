# Karta wyniku — OFICJALNA WERSJA — układ V5 + banery S10 + stempel ZALICZONE + choreografia A10

Źródło prawdy: `index.html` → `dmPlayShareCardAnimation()`. Ten plik to zapis decyzji — nie zmieniać animacji bez zgody Damiana.

| # | Element | Animacja | Czas |
|---|---|---|---|
| 1 | Loader | Napis „ŁADOWANIE" + 3 skaczące kropki (wariant L3 z runda8) | 900 ms |
| 2 | Zdjęcie tła | Laserowy skan od góry do dołu, odsłania grafikę (`dmScanRevealBg`) | 1400 ms |
| 3 | CODZIENNY ATLETA | Maszyna do pisania, po wpisaniu „ATLETA" zmienia kolor na czerwony | 34 ms/znak |
| 4 | Data | Wjazd ze skali 1.3 → 1, drgnięcie karty (2 px) | 280 ms |
| 5 | Liczba pompek | **A1 Uderzenie z głębi**: spada ze skali 6 z rozmyciem, pył, biała fala, biały błysk, drgnięcie 12 px | 420 ms |
| 6 | Biała belka „POMPEK DZISIAJ" | Rozwinięcie w poziomie scaleX 0 → 1.08 → 1, drgnięcie (3 px) | 300 ms |
| 7 | Dzień tygodnia | Zjazd z −6 px + pojawienie się | 260 ms |
| 8 | Baner „JEDNA SERIA." (S10) | **A3 Malowanie sprayem**: pas rośnie od lewej, kropelki pryskają, tekst wskakuje, krople spływają z opóźnieniem | 420 ms + krople 0.9 s |
| 9 | Baner „ZERO WYMÓWEK." (S10) | **A3 Malowanie sprayem** (jak wyżej) | 420 ms + krople 0.9 s |
| 10 | Stempel „ZALICZONE" | **A7 Eksplozja tuszu**: spada ze skali 4, pryska tusz, czerwona fala, ugięcie karty, odcisk-duch, drgnięcie 14 px | 340 ms |
| 11 | Finał | Czerwony błysk całej karty | 400 ms |

Pozycje (top/left % karty 9:16): marka 5.5% · data 10.8% · liczba 41.5% (32.5cqw) · belka 51.5% · dzień 57.5% (5.9cqw) · banery od 68% · stempel 26%/70% (8.5cqw, nad liczbą — NIE może jej zasłaniać).
PNG do udostępniania (`renderShareCardPng`) odwzorowuje ten sam układ 1:1 (1080×1920, 1cqw = 10.8 px).
