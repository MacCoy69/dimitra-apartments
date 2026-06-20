# CLAUDE.md — Dimitra Beach Apartments

Projektkontext für KI-Sessions (Claude). Wird zu Beginn jedes Arbeitsschritts gelesen.
Umsetzung durch **Wunderwald Media** (Marco). Skill-Basis: `wunderwald-webdev` + `ui-ux-pro-max` + `frontend-design-skill`.

---

## 1. Projekt

Website für **Dimitra Beach Apartments** — familiengeführte Ferienwohnungen in Griechenland an **zwei Standorten**:

- **Thassos · Skala Potamias** (Insel): 3 Apartments + 1 Penthouse, ~700 m zum Golden Beach.
- **Festland · Nea Karvali** (bei Kavala, gegenüber Thassos): weitere Apartments, **erste Meereslinie**.

**Kernidee der Startseite:** Besucher wählen zuerst ihr Reiseziel — **Thassos** oder **Festland** — und landen auf der jeweiligen Landingpage.

**Status:** Prototyp (Phase 1) — Startseite + 2 Landingpages. Mehrsprachig geplant, **Start auf Deutsch**.

---

## 2. Corporate Design

Hell, modern, Erdtöne, mit **frischem griechischem Blau** als Akzent. Editorial/Boutique-Anmutung
(Referenzen: sonfoguero.com, ekies.gr, apartmentsforrentmarbella.com).

**Farb-Variablen** (`css/style.css`, immer per CSS-Variable referenzieren — keine Hardcodes):

| Variable | Wert | Verwendung |
|---|---|---|
| `--color-primary` | `#2D8AA8` | Ägäis-Blau, Akzent/CTA |
| `--color-primary-dark` | `#1C6E89` | Hover, Text-Akzent |
| `--color-primary-light` | `#5CB0C7` | helle Akzente |
| `--color-primary-wash` | `#E4F0F2` | Flächen, Focus-Ring |
| `--color-secondary` | `#BC7A52` | Terrakotta (sparsam) |
| `--color-bg` | `#FBF7F0` | Kalkstein/Ivory Hintergrund |
| `--color-bg-alt` | `#F2EADC` | Sand, Sektionswechsel |
| `--color-bg-deep` | `#34302A` | dunkle Kontrastsektion |
| `--color-text` | `#33302B` | Fließtext |
| `--color-text-light` | `#786E61` | Sekundärtext |
| `--color-border` | `#E5DAC7` | Linien/Rahmen |

**Fonts:** Display `Cormorant Garamond` (serif), Body `Jost` (sans), Akzent/Script `Sacramento` (handschriftlich, u. a. Logo-Subline „Apartments").

**Logo:** Text-Logo „DIMITRA BEACH" (Cormorant, gesperrt) + „Apartments" (Sacramento, blau) darunter, kleines Sonne-über-Wellen-Emblem. Datei: `website/img/logo.svg`, Favicon `website/favicon.svg`. Im Header als CSS-Text-Logo umgesetzt (zuverlässige Font-/Farbsteuerung, invertiert über Hero).

---

## 3. Dateistruktur

```
dimitri-apartments/
├── CLAUDE.md                  ← diese Datei
├── Bilder/                    ← Originalfotos (Quelle)
│   ├── Fotos-Dimitra-1/         (Apartment, Thassos)
│   └── Fotos-Dimitra-Penthouse/ (Penthouse, Thassos)
└── website/                   ← die Website
    ├── index.html             ← Startseite + Auswahl Thassos/Festland
    ├── thassos.html           ← Landingpage Insel (3 Apartments + Penthouse)
    ├── festland.html          ← Landingpage Festland (Nea Karvali)
    ├── impressum.html         ← Platzhalter
    ├── datenschutz.html       ← Platzhalter
    ├── robots.txt / sitemap.xml
    ├── favicon.svg
    ├── css/style.css          ← komplettes Designsystem
    ├── js/main.js             ← Nav, Scroll-Reveal, Galerie-Lightbox, Formular
    └── img/                   ← optimierte WebP (Präfix apartment-… / penthouse-…)
```

Lokal testen: `cd website && python3 -m http.server` → http://localhost:8000

---

## 4. Bewusste Abweichungen vom wunderwald-webdev-Skill (für den Prototyp)

- **Kein Tailwind:** Der editoriale Look wird mit handgeschriebenem `style.css` (CSS-Variablen) umgesetzt — präziser für dieses Design. Tailwind kann bei Produktion ergänzt werden.
- **Google Fonts via CDN:** Für den Prototyp eingebunden. **Vor Go-Live DSGVO-konform lokal hosten** (`/fonts/`, `font-display: swap`).
- **OpenStreetMap-iframe:** Karte direkt eingebettet. Produktiv: Zwei-Klick-/Consent-Lösung.
- **Formular:** rein clientseitig (Erfolgshinweis, kein Versand). Backend/Mailversand fehlt noch.

Eingehalten: semantisches HTML, 1×H1/Seite, ARIA, Skip-Link, Focus-Styles, Schema.org (LodgingBusiness, BreadcrumbList), Meta/OG/Canonical, WebP + lazy-loading + alt-Texte, responsiv/Mobile-First.

---

## 5. Offene Punkte / To-dos (vor Go-Live)

**Inhalte & Daten (vom Kunden):**
- [ ] Echte Kontaktdaten: Telefon, WhatsApp-Nummer, E-Mail, Adresse(n) → ersetzen die Platzhalter `+30 000 000 0000`, `info@dimitra-apartments.gr`.
- [ ] **Festland-Fotos** (Nea Karvali) — aktuell Platzhalter. Hero & Apartment-Karten ergänzen.
- [ ] Genaue Daten je Apartment: Größe (m²), Schlafzimmer/Betten, max. Personen, Preise/Saison, Mindestaufenthalt. (Aktuelle Werte sind plausible Platzhalter.)
- [ ] Echte Apartmentnamen statt Arbeitstiteln (Olive / Aegean / Pine / Penthouse Dimitra).
- [ ] Exakte Adresse + GPS für Karten/Schema (Thassos & Festland).
- [ ] Impressum & Datenschutz rechtssicher ausfüllen.
- [ ] Booking.com- & Airbnb-Direktlinks (aktuell Startseiten der Portale).

**Technik:**
- [ ] Buchung: Phase 1 = Anfrageformular + Portallinks. Später: Buchungstool (z. B. Smoobu/Lodgify/Beds24) **oder** Eigenlösung mit Kalender + Excel-Sync (vom Kunden gewünscht).
- [ ] Formular-Backend (Versand an Postfach, Spam-Schutz).
- [ ] Mehrsprachigkeit ausbauen (EN, ggf. EL): Sprachumschalter im Header ist angelegt (Platzhalter); `lang`-Attribute & übersetzte Seiten ergänzen.
- [ ] Fonts lokal hosten, Karten-Consent, Cookie-Banner falls Tracking.
- [ ] Lighthouse-Audit (Ziel ≥ 90), HTML- & Schema-Validierung.
- [ ] Rundgang-Video (`Fotos-Dimitra-1/…rundgang-video-01.mp4`) DSGVO-konform einbinden.

---

## 6. Booking-Faktencheck (Thassos, Skala Potamias)

Kostenfreies WLAN · Garten + Grill · kostenfreier Privatparkplatz · Terrasse · Stadtblick ·
Sitzbereich · Flachbild-TV · voll ausgestattete Küche (Kühlschrank, Ofen, Herdplatte, Toaster,
Kaffeemaschine, Wasserkocher) · eigenes Bad mit Dusche + Haartrockner · Fahrradmöglichkeiten ·
Autovermietung organisierbar.
Distanzen: Golden Beach **700 m**, Museum Polygnotou Vagi **2,8 km**, Hafen Thassos **13 km**,
Flughafen Kavala **34 km**.

---

## 7. Arbeitsweise für KI-Sessions

1. Diese Datei + `wunderwald-webdev`-Skill zuerst lesen.
2. Nur CSS-Variablen nutzen; Designsystem in `style.css` erweitern, nicht duplizieren.
3. Header/Footer/Icon-Sprite sind je Seite inline dupliziert (kein Build-Step) — Änderungen auf allen Seiten konsistent nachziehen.
4. Neue Bilder: zu WebP (max ~1600 px, q≈82), sprechende Dateinamen, alt-Text + width/height.
5. Vor Abschluss: Links, Bildpfade, Mobile-Ansicht, Validierung prüfen.
