# UnicornMedical - Probeaufgabe

## Einführung

In dieser Probeaufgabe arbeitest du an einer kleinen Angular-Anwendung im medizinischen Kontext.
Als Datenquelle wird eine offene FHIR REST Schnittstelle verwendet.
FHIR ist ein internationaler Standard für den Austausch von Medizindaten.

Die Anwendung ist bereits teilweise implementiert (z. B. Table, Routing und FHIR Services), enthält aber bewusst Lücken und einen Fehler.

Gesamtzeit: ca. 3-4 Stunden

Die Aufgabe ist in drei Phasen aufgeteilt:

1. Define
2. Develop
3. Gesprächsvorbereitung

## Phase 1: Define (ca. 30 Minuten)

Lies das Briefing und dokumentiere in `DEFINE.md`:

- welche Fragen du dem Product Owner stellen würdest
- 3-5 Akzeptanzkriterien für die beschriebene Funktionalität

### Briefing

"Wir brauchen eine Suchfunktion für unsere medizinische Anwendung.
Nutzer sollen Patienten und Ärzte über ihren Namen finden können.
Die Ergebnisse sollen filterbar sein. Bei Klick auf ein Ergebnis
sollen relevante Details angezeigt werden."

## Phase 2: Develop (ca. 2-3 Stunden)

### 2.1 Fehlersuche

Die Applikation funktioniert aktuell nicht.
Finde den Fehler, behebe ihn und erkläre kurz (im Commit oder als Kommentar), warum er aufgetreten ist.

### 2.2 Suchformular

Erstelle ein Suchformular mit:

- Freitextsuche (Input-Feld)
- Filter-Dropdown mit folgenden Optionen:
  - Alle (Patienten + Ärzte)
  - Nur Patienten
  - Nur Ärzte

Verwende Reactive Forms.
Validiere die Eingabe - überlege, welche Zeichen für eine Namenssuche gegen eine medizinische API sinnvoll sind.
Falls das Formular invalide ist, soll keine neue Suchanfrage abgeschickt werden.

Unter `src/app/ui/search-form` ist eine Komponente vorbereitet.

### 2.3 Detailansicht

Bei Klick auf ein Suchergebnis soll eine Detailansicht erscheinen.
Entscheide selbst, welche Daten relevant sind und wie die Ansicht gestaltet wird.

Hinweis: Unter `src/app/search/services/fhir.util.service.ts` findest du eine Hilfsmethode zur Datenaufbereitung.

### 2.4 Unit Tests

Schreibe Tests, die dir Vertrauen geben, dass deine Suchlogik korrekt funktioniert.
Unter `src/app/search/services/search-facade.service.spec.ts` sind Teststubs vorbereitet.

## Phase 3: Gesprächsvorbereitung

Nach Abgabe deiner Probeaufgabe erhältst du innerhalb weniger Tage eine Rückmeldung durch unser Recruiting-Team.

Bei einem positiven Ergebnis freuen wir uns darauf, dich zu einem persönlichen Teamkennenlernen bzw. Probetag einzuladen. In etwa vier Stunden tauchen wir gemeinsam in den Arbeitsalltag ein, du lernst das Team kennen und wir sprechen über deine Lösung der Probeaufgabe.

Für die Besprechung deiner Probeaufgabe findest du in `REFLECT.md` Impulse zur Vorbereitung -
du musst nichts schriftlich einreichen.

Sollte es nicht zu einem persönlichen Treffen kommen, ist uns ein transparenter Abschluss wichtig. In diesem Fall erhältst du von uns ein ausführliches Feedback in einem persönlichen Telefonat.

## Hinweise

- Achte auf eine nachvollziehbare Commit-History.
- Funktionalität ist wichtiger als Design.

## Weiterführende Links

- Warum FHIR? <https://hl7.de/themen/hl7-fhir-mobile-kommunikation-und-mehr/warum-fhir/>
- Dokumentation Patient: <http://www.hl7.org/fhir/patient.html>
- Dokumentation Practitioner: <https://www.hl7.org/fhir/practitioner.html>

## Start der Applikation

Mit `ng serve` startet die Applikation auf folgender URL: `http://localhost:4200/`.
