# Phase 1: Define

## Fragen an den Product Owner

Welche Fragen würdest du stellen, bevor du mit der Implementierung beginnst?

1. **Maximale Ergebnisanzahl / Pagination:** Gibt es eine Obergrenze für die angezeigten Suchergebnisse? Soll eine Pagination oder ein "Mehr laden"-Mechanismus implementiert werden, falls die API sehr viele Treffer liefert?

2. **Relevante Detail-Informationen:** Welche konkreten Datenfelder sollen in der Detailansicht angezeigt werden? (z. B. Geburtsdatum, Adresse, Kontaktdaten, Versicherungsnummer bei Patienten; Fachrichtung, Qualifikation bei Ärzten?)

3. **Verhalten bei Fehlern und leeren Ergebnissen:** Wie soll die Anwendung reagieren, wenn die API nicht erreichbar ist oder keine Treffer gefunden werden? Soll eine spezifische Fehlermeldung oder ein Hinweis angezeigt werden?

4. **Mindestlänge der Sucheingabe:** Gibt es eine Mindestanzahl an Zeichen, bevor eine Suche ausgelöst werden darf? (z. B. mindestens 2 Zeichen, um zu breite Abfragen zu vermeiden)

5. **Internationalisierung bei Namen:** Sollen Umlaute (ä, ö, ü), Akzente und Sonderzeichen (z. B. Bindestriche, Apostrophe in Doppelnamen) in der Suche unterstützt werden? Muss die Suche case-insensitive funktionieren?

## Akzeptanzkriterien

Formuliere 3-5 Akzeptanzkriterien für die beschriebene Suchfunktion.

1. **Erfolgreiche Suche mit Ergebnissen**
   - Given: Der Nutzer befindet sich auf der Dashboard-Seite
   - When: Er gibt "Max" in das Suchfeld ein und klickt auf "Suchen"
   - Then: Es werden alle Patienten und Ärzte angezeigt, deren Name "Max" enthält, dargestellt in einer tabellarischen Übersicht

2. **Filterung nach Ressourcentyp**
   - Given: Der Nutzer hat eine Suche mit dem Begriff "Anna" durchgeführt und Ergebnisse erhalten
   - When: Er wählt im Filter-Dropdown "Nur Patienten" aus und löst die Suche erneut aus
   - Then: Es werden nur Patienten angezeigt, deren Name "Anna" enthält; Ärzte werden ausgeblendet

3. **Validierungsfehler bei ungültiger Eingabe**
   - Given: Der Nutzer befindet sich auf der Dashboard-Seite
   - When: Er gibt ungültige Zeichen (z. B. "<script>") in das Suchfeld ein
   - Then: Das Formular zeigt eine Validierungsfehlermeldung an und der Suchen-Button ist deaktiviert bzw. die Suche wird nicht ausgelöst

4. **Detailansicht bei Klick auf Ergebnis**
   - Given: Der Nutzer hat eine erfolgreiche Suche durchgeführt und sieht Ergebnisse in der Tabelle
   - When: Er klickt auf einen Eintrag in der Ergebnisliste
   - Then: Es öffnet sich ein Dialog mit den relevanten Detailinformationen der ausgewählten Person (Name, Geburtsdatum, Adresse, Kontaktdaten)

5. **Leere Ergebnismenge**
   - Given: Der Nutzer befindet sich auf der Dashboard-Seite
   - When: Er gibt einen Suchbegriff ein, zu dem keine Treffer existieren (z. B. "Xyzzyplugh") und klickt auf "Suchen"
   - Then: Es wird eine Meldung angezeigt, dass keine Ergebnisse gefunden wurden