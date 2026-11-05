# neeleshmisra.com rebuild — Project Context

> Portable brief. Paste it into any new chat and it can pick up the work.
> **Last updated:** 2026-11-05 · **Owner:** Aakash Rohilla (GitHub `arohilla07`) · No secrets in this file.

## 1. The ask (Aakash, 5 Nov 2026)
After Gaon Connection, build a website for **Neelesh Misra** at **neeleshmisra.com** (today on Times Internet's Publish Story platform, "very basic").

- Cover all his work: lyrics writing, screenplay writing, directing, live shows, radio storytelling, books, and more.
- Take all the data from the current neeleshmisra.com and make a full site with all pages.
- Take inspiration from Aakash's reference screenshots, don't copy them.
- Overall look and feel should be like the Gaon Connection site we built (same universe). The reference is the version pushed to GitHub on 3 Nov 2026 (`gaon-homepage-dem` demo + `gc-child-theme`), **not** the live gaonconnection.com. Inspiration, not a copy.
- Sub-pages (Lyrics, Books, Screenplay, …) must each look like a proper independent site with its own UX, matching the overall theme, so specific links can be sent to specific people.
- Every work with trailer links embedded, lyrics of his songs and other work wherever possible.
- World class. Works on desktop and laptop (and phone).
- No-code upkeep. Show it to Neelesh **today** (5 Nov 2026).

Steps Aakash set: 1 browse current site → 2 see references → 3 suggest a no-code framework → 4 GitHub repo with all context → 5 ask questions → 6 build.

## 2. Decision: framework
**WordPress on Hostinger (same as Gaon Connection), built the same way:**
1. Static HTML demo in this repo, published on GitHub Pages, for Neelesh to approve.
2. Port to a GeneratePress child theme. Songs, films, books, shows, interviews become custom post types with simple admin forms, so the team edits without code.

Why: all neeleshmisra.com content is already imported into the NM staging WordPress (repo `nm-website-migration`, 22 Oct 2026: 214 posts, 3 pages, 35 categories, 459 images, 28 redirects). WordPress gives a no-code admin.
"Astra" considered both ways: the Astra WP theme works but can't give each sub-site its own UX without a page builder; the Astro framework has no admin, which defeats no-code.

## 3. Related repos
| Repo | What |
|---|---|
| `arohilla07/nm-website-migration` | Publish Story → WordPress importer; NM staging URL + status in its CLAUDE.md |
| `arohilla07/gc-child-theme` | Gaon Connection WP child theme (design tokens reused here) |
| `arohilla07/gaon-homepage-dem` | Approved GC static demo (GitHub Pages) |
| `arohilla07/nm-world` | NM World app PRD (separate product) |

## 4. Design universe (borrowed from GC, adapted)
- Paper `#ffffff`, ink `#161616`, one red accent `#d41f26`, grey band `#f4f4f2`, dark band `#161616`. Red dot before section titles.
- Fonts: Newsreader (English display), Tiro Devanagari Hindi (Hindi display), Mukta (text).
- Dark mode follows the system plus a toggle.
- Each sub-site keeps those bones but changes layout and one mood colour:
  | Sub-site | Path | UX idea |
  |---|---|---|
  | Hub | `/` | Big typographic name, role index, "now" strip |
  | Lyricist | `/lyrics/` | Songbook: song index + lyric sheet, English/हिंदी toggle, filter by decade |
  | Director | `/films/` | Dark full-bleed cinema, Kood hero, trailer/teaser/full film |
  | Screenwriter & storyteller | `/writer/` | Accordion rows of written work |
  | Radio | `/radio/` | Night-blue radio-dial, shows + episode list |
  | Live shows | `/live/` | Stage red, showreel, bring-the-show enquiry |
  | Author | `/books/` | Bookshelf + articles |
  | The Slow Interview | `/slow-interview/` | Black & white conversation grid |
  | Journalist | `/journalist/` | Newspaper timeline |
  | About | `/about/` | Full bio, Slow Movement, awards, contact |

## 5. Reference screenshots (Aakash's Mac: ~/Downloads/NM Site References)
1. Mihir Lele portfolio: centred name, simple text nav, 3-up poster grid.
2. Varun Grover home: big serif name, short playful bio, illustrated role row (Lyricist, Screenwriter, Stand-up, Director, Author).
3. Varun Grover Director: left icon rail, full-bleed film still, film radio-list, details panel with Watch trailer / Watch film, critics quote.
4. Varun Grover Author: books with cover + publisher/category/year + Buy now; articles column.
5. Varun Grover Stand-up: show modal with poster, tour dates, trailer, tickets.
6. Varun Grover Lyricist: film title, music/year, song list, lyric text, ENG/हिंदी toggle.
7. Varun Grover Screenwriter: accordion rows (title, type, year, role) expanding to stills + trailer.
8. nav.al: minimal post page, date, title, play + duration, related.

## 6. Content from the current site (5 Nov 2026)
Captured in `assets/data.js`. Highlights: bio (b. 4 May 1973 Lucknow; IIMC; India Abroad, AP, Hindustan Times), 32 film songs as lyricist (Jism 2003 → Metro… In Dino 2025), Slow Music songs he wrote and sang, Kood (2026 mini feature, written & directed), radio (YKIB on BIG FM from 2011, Red FM show 2016, Kahaani Express 2018), books (173 Hours in Captivity, Yaad Sheher 1 & 2, Main Aksar Sochta Hoon, Gaon Se Bees Postcards), Slow Interview guests, awards, socials, contact.
The current site does not expose YouTube IDs to our tools; embeds need IDs added to `data.js` (or pulled from the WP staging import, where MEDIAVIDEO `mediaId` = YouTube ID).

## 7. Aakash's answers (5 Nov)
1. Screenplay/directing credits: research online. Found (Wikipedia): screenplay of Ek Tha Tiger (2012, with Kabir Khan) and Tiger Zinda Hai (2017, with Ali Abbas Zafar). No directing credit besides Kood. IMDb could not be read.
2. Film songs: show the opening lines plus the video; full lyrics only for his own Slow Music songs. (Lines are not filled in yet: the `lines` field in data.js is for the team to paste.)
3. Photos/covers/live dates: take from the current site. Images are hotlinked from the Publish Story CDN for now (it dies ~90 days after the contract ends; move them into WordPress media at the port). The site lists no live-show dates.
4. English only for now (no Hindi toggle).

## 7a. Questions first asked (5 Nov)
1. Screenplay credits and directing work beyond Kood?
2. Full film-song lyrics belong to labels: show first lines + video, full lyrics only for his own Slow Music songs?
3. High-res photos, book covers, live-show dates/booking?
4. English-first with a हिंदी toggle?

## 8. Log
- 2026-11-05: Browsed site, reviewed 8 references, recommended WordPress, repo created by Aakash, demo built (hub + 9 sub-sites), pushed to main and gh-pages.

## 9. Known gaps in the demo
- YouTube IDs: none could be read from this workspace (neeleshmisra.com, YouTube and the staging site are blocked by its network). Only `b6EJa74GnHM` (linked from the Kood banner) is embedded. Every other video button opens a YouTube search. Add ids to the `yt` fields in `assets/data.js`.
- Live-show formats on /live/ are proposed copy, not confirmed offerings.
- Song credits (music, singers) left blank except Maine Dil Se Kaha; fill from label metadata.
