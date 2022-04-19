# Portfolio 📁 
![GitHub issues](https://img.shields.io/github/issues/blacksmithop/Portfolio?label=issues)
![GitHub closed issues](https://img.shields.io/github/issues-closed/blacksmithop/Portfolio?color=green&label=issues)
![Website](https://img.shields.io/website?down_message=Down&label=Website&up_message=Up&url=https%3A%2F%2Fblacksmithop.github.io%2FPortfolio%2F)

| [Website](https://blacksmithop.github.io/Portfolio/) |
| ---------------------------------------------------- |


---
## Table of Contents
  * [Features](#features)
    * [Website](#website)
    * [CI-CD](#cicd)
  * [Fixes](#fixes)

---
## Features 
#### CI/CD
- [x] Built from `main` (./public) to `gh-pages` by [action](https://github.com/blacksmithop/Portfolio/actions/workflows/publish-from-public.yml)
- [x] Automatic release when a tag is created
- [ ] Minify workflow (css & js)

#### SaSS
- [x] No more bulky css files! Compile only what you use.
  - [x] Purge unused classes
    - [ ] Created action/config to automate sass compile & purge with class whitelist

> Source files are not included, get them from [Fontawesomse](https://fontawesome.com/download) and [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/download/)

#### Website:
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
  - [x] Responsive icons
  - [x] Implementation 
    - [x] class toggle in js
    - [ ] toggle as per system preference
    - [ ] css only, two stylesheets

##### :package: `<app-body>` ```The content```
- [x] Content in sections
  - [x] About me
  - [x] Projects
    - [x] Dynamically added & responsive cards
    - [x] Video autoplay (.webm) for modal (preview)
    - [ ] Carousel or a scrollable accordion body
  - [x] Stack
    - [ ] Populate on page load
    - [ ] Responsiveness 

##### :footprints: `<footer>` ```Copyright, links & resume```
- [x] Responsive
    - [x] Resume
      - [x] Toasts
          - [x] Download & View (button)
            - [x] styling & icons
              - [ ] Responsive (mobile)
    -  [ ] Contact
          - [ ] Contact details
          - [ ] Social links 
    -  [x] Source
       -  [x] Redirect to repository

##### :left_speech_bubble: `<modal>` ```Project preview```
  - [x] Responsive modal
    - [ ] Create & destroy on demand

##### :card_index_dividers: `Assets` ```img, video, doc/pdf, json```
  - [x] Compress `.webp` files
    - [ ] Github Action


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
