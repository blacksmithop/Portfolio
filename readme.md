# Portfolio 📁 
[![GitHub issues](https://img.shields.io/github/issues/blacksmithop/Portfolio?label=issues)](https://github.com/blacksmithop/Portfolio/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/blacksmithop/Portfolio?color=green&label=issues)](https://github.com/blacksmithop/Portfolio/issues?q=is%3Aissue+is%3Aclosed)

[![Website](https://img.shields.io/website?down_message=Down&label=Website&up_message=Up&url=https%3A%2F%2Fblacksmithop.github.io%2FPortfolio%2F)](https://github.com/blacksmithop/Portfolio/actions/workflows/pages/pages-build-deployment)
[![Publish](https://github.com/blacksmithop/Portfolio/actions/workflows/publish-folder.yml/badge.svg)](https://github.com/blacksmithop/Portfolio/actions/workflows/publish-folder.yml)
[![Releases](https://github.com/blacksmithop/Portfolio/actions/workflows/create-release.yml/badge.svg)](https://github.com/blacksmithop/Portfolio/actions/workflows/create-release.yml)

| [Website](https://blacksmithop.github.io/Portfolio/) |
| ---------------------------------------------------- |

Source at [gh-pages](https://github.com/blacksmithop/Portfolio/tree/gh-pages)


---
## Table of Contents
  * [Features](#features)
    * [Website](#website)
    * [CI-CD](#cicd)
  * [Fixes](#fixes)

---
## Features 
#### CI/CD
- [x] Deployed from `main` (./public) to `gh-pages`
- [x] Automatic releases upon tag creation (semantic versioning)
#### Sass
- [x] No more bulky css files! Compile only what you use.
- [x] Minified css files.

> Source files can be found at [fontawesome](https://fontawesome.com/download) and [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/download/)

### Website
##### :tophat: `<head>` ```Libraries, meta, ogp & custom css/js```
- [x] Favicon, meta description, crawlers etc.
  
##### :world_map: `<navbar>` ```Navigation, Avatar```
- [x] Responsive navbar
  - [x] Tooltips
  - [x] Link to section / open accordion
  - [x] Styled avatar
    - [x] Dropdown menu direction based on screen size
      - [ ] fix menu direction on small screens
    - [ ] Hover effect

##### :last_quarter_moon: `<darkmode>` ```Dark mode with toggle```
- [x] Styled toggle
- [x] Implementation 
  - [x] Class toggle in js
    - [ ] toggle as per system preference
  - [ ] Sass theme

##### :package: `<app-body>` ```The content```
- [x] Content in sections
  - [x] About me
  - [x] Projects
    - [x] Dynamic cards
    - [x] Autoplay preview (.webm) 
    - [ ] Scrollable div
  - [x] Stack
    - [ ] Dynamic

##### :footprints: `<footer>` ```Copyright, links & resume```
- [x] Responsive
  - [x] Resume
    - [x] Toasts
      - [x] Download & View 
      - [x] Styled
  - [x] Source
      - [x] Repository link
  - [ ] Contact
      - [ ] Details
      - [ ] Socials 

##### :left_speech_bubble: `<modal>` ```Project preview```
  - [x] Responsive modal
    - [ ] Reusable

##### :card_index_dividers: `Assets` ```img, video, doc/pdf, json```
  - [x] Compressed files

---
## Fixes
* Inline css (critical), minify (wip)
* Compress assets (wip)
* Loadtime improvements (FCP)
* Darkmode
  * Alternate icons based on mode
* Make long sections scrollable
* Better query selectors
* Dynamically added cards
* Moved render blocking tags to the bottom
* Dynamic modal creation (wip)
* Pug and Sass (WIP)
  
---
## Pointers
1) Keep it simple, keep it fast.
2) Over-engineering makes it becomes a chore to maintain down the line.
3) If it looks like it doesn't belong there, it probably doesn't.
4) Always test, bug fixing is best done as they're made.
5) Lighthouse and Stackoverflow are your friends
