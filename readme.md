# Portfolio 📁 
![GitHub issues](https://img.shields.io/github/issues/blacksmithop/Portfolio?label=issues)
![GitHub closed issues](https://img.shields.io/github/issues-closed/blacksmithop/Portfolio?color=green&label=issues)

| [Website](https://blacksmithop.github.io/Portfolio/) |
| ---------------------------------------------------- |

![Website](https://img.shields.io/website?down_message=Down&label=Status&up_message=Up&url=https%3A%2F%2Fblacksmithop.github.io%2FPortfolio%2F)

---
## Features 
#### CI/CD:
- [x] Built from `main` (./public) to `gh-pages` by [Action](https://github.com/blacksmithop/Portfolio/actions/workflows/publish-from-public.yml)

#### Website:

 `<head>` :tophat: - ```Libraries, meta, ogp & custom css/js```
- [x] Favicon, meta description, crawlers etc.
  
`<navbar>` :world_map: - ```Navigation, Avatar```
  - [x] Responsive navbar
    - [x] Tooltips
    - [x] Link to section / open accordion
    - [x] Styled avatar
      - [x] Dropdown menu direction based on screen size
      - [ ] Hover effect

`<darkmode>` - :last_quarter_moon: ```Dark mode with toggle```
  - [x] Responsive icons
  - [x] Js implementation (toggling classes)
  - [ ] Css implementation (switch stylesheets with toggle)
  - [ ] Toggle based on system preference

`<app-body>` -  :package: ```The portfolio content```
- [x] Sectioned content (styled accordions)
  - [x] About me
  - [x] Responsive cards (projects)
    - [x] Video autoplay (.webm) for preview
    - [ ] Carousel / scrollable accordion body
  - [x] Tech stack
  - [x] Enchancements (non-priority)
    - [ ] Dynamically populate content (eg. pure.js with json)
    - [ ] Dynamic icons, colors and category

`<footer>` - :footprints: ```Copyright, links, resume```
- [x] Responsive footer
    - [x] Resume
      - [x] Toasts
          - [x] Download & View (button)
            - [x] styling & icons
            - [] Responsive 
    -  [ ] Contact
          - [ ] Contact details
          - [ ] Social links 

`<modal>` - ```Project preview```
  - [x] Responsive modal
    - [ ] Create & destroy on demand

`Assets`📂 - ```img, video, doc/pdf, json```
  - [x] Compress `.webp` files
    - [ ] Github Action for this


---
## Fixes
* External css, js
* Large files, loadtime
* Darkmode
  * Alternate icon (sun/moon) based on mode
* Viewport for content section (accordion)
* Element specific query selectors
* Dynamic cards (closable)
* Moved render blocking tags to the bottom
* Dynamic modal creation (WIP)

---
## Pointers
1) Keep it simple, keep it fast.
2) Over-engineering makes it becomes a chore to maintain down the line.
3) If it looks like it doesn't belong there, it probably doesn't.
4) Always test, bug fixing is best done as they're made.
5) Lighthouse and Stackoverflow are your friends
