# MetaCom 2027

Multi-page website for the International Conference on Metaverse Computing, Networking and Applications, hosted in New York City.

## Pages

- Home
- Call for Papers
- Author Information
- Program
- Committees
- Registration
- Venue
- Travel Information
- Previous Years

## Run locally

Open `index.html` in a browser. The site is static HTML, CSS, and JavaScript, with no build step.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, choose `main` and the root folder, then save.

## Design notes

The palette follows the IEEE Brand Identity Guidelines and draws only from the blue family of the official IEEE colors: IEEE Blue `#00629B`, Dark Blue `#002855`, Cool Gray `#75787B`, and the published IEEE Blue tints for rules, borders, and backgrounds.

No IEEE logo or sponsorship claim is used; the palette and squared layout language are the only IEEE-derived elements.

- Header: a slim navy info bar (conference name and city) above a white masthead with a blue underline accent on the active nav item.
- The MetaCom mark is a square navy tile: skyscraper towers in lighter navy (the 75% IEEE Blue tint) rise from the base edge to form the letter M, each tower carrying a dense grid of dark windows, the left tower topped with a slender spire like the Empire State Building, and a moon floating in the upper right, clear of every roofline.
- Layout: serif headings over a single-column content canvas, square corners throughout (no border rounding), plain data tables with a blue header row, and outlined info panels.
- Home: a full-width intro block (title, subtitle, short description) above an auto-scrolling photo reel of New York City and the venue. The reel duplicates its image set for a seamless loop, pauses on hover, and drifts at half speed for users with `prefers-reduced-motion` enabled.
- The footer is pinned to the bottom of the viewport on every page using a flex column layout (`body` min-height `100dvh` + `footer` margin-top auto).
- The scrollbar is branded to match: `scrollbar-gutter: stable` reserves its (already-navy) track on every page so nothing shifts between long and short pages, and `scrollbar-color` / webkit fallbacks paint the track navy like the footer with a lighter blue thumb.
- Typography: Open Sans (body) and Source Serif 4 (headings) from Google Fonts.

## Content notes

2027 dates, paper format, submission portal, committee rosters, speakers, fees, and detailed program remain unannounced and are marked as such on each page. Topics summarize the established MetaCom scope and will be finalized in the official 2027 Call for Papers.

Venue: Yeshiva University Museum, 15 West 16th Street, New York, NY 10011. Directions reference the museum's page and nearby subway stations.

The MetaCom 2026 edition page (metacomm.org/2026) records the previous edition.

## Images

The homepage reel uses photographs hot-linked from Wikimedia Commons:

- Lower Manhattan skyline seen from the Brooklyn Bridge: Bpp88520, CC0 1.0 — https://commons.wikimedia.org/wiki/File:NY_brooklyn_bridge.png
- Manhattan skyline seen at night from Weehawken: Dmitry Avdeev, CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:Manhattan_from_Weehawken,_NJ.jpg
- Times Square: Terabass, CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:New_york_times_square-terabass.jpg
- Empire State Building, aerial view: Sam Valadi, Public Domain — https://commons.wikimedia.org/wiki/File:Empire_State_Building_(aerial_view).jpg
- Union Square: Jan Ainali, CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:Union_square_August_2009.jpg
- Flatiron Building at Fifth Avenue: Christian David, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Flatiron_Building,_Fifth_Avenue,_Manhattan,_New_York.jpg
- Center for Jewish History exterior (conference venue): Gryffindor, Public Domain — https://commons.wikimedia.org/wiki/File:Center_for_Jewish_History_NYC.jpg
- Brooklyn Bridge and Lower Manhattan from Pebble Beach: Christian David, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach,_New_York.jpg
