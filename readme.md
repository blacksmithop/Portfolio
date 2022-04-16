# Portfolio 📁 

<img alt="Website" src="https://img.shields.io/website?down_message=Down&label=Website&up_message=Up&url=https://blacksmithop.github.io/Portfolio/">

| [Website](https://blacksmithop.github.io/Portfolio/#) |
| ----------------------------------------------------- |

---
## Features 

 `<head>` - Libraries, meta tags and custom css/js
- [x] Favicon, meta description, crawlers etc.
  
`<navbar>` - Navigation, Dark-mode, Avatar
  - [x] Responsive navbar
    - [x] Tooltips
    - [x] Link to section / open accordion
    - [x] Styled avatar
      - [x] Dropdown menu direction based on screen size
      - [ ] Hover effect
- [x] Dark mode 
  - [x] Responsive icons
  - [x] Implemented in js
  - [ ] Toggle based on system preference

`<app-body>` - The portfolio content
- [x] Sectioned content (styled accordions)
  - [x] About me
  - [x] Responsive cards (projects)
    - [x] Video autoplay (.webm) for preview
    - [ ] Carousel / scorabble accordion body
  - [x] Tech stack
  - [x] Enchancements (non-priority)
    - [ ] Dynamically populate content (eg. pure.js with json)
    - [ ] Dynamic icons, colors and category

`<footer>` - Copyright, links, resume
- [x] Responsive footer
    - [x] Resume
      - [x] Toasts
          - [x] Download & View (button)
          - [x] Responsive, styling & icons
    -  [ ] Contact
          - [ ] Contact details
          - [ ] Social links 

---
## Fixes
* External css, js
* Large files, loadtime
* Darkmode
  * Alternate icon (sun/moon) based on mode
* Viewport for content section (accordion)
* Element specific query selectors

---
## Pointers
1) Keep it simple, keep it fast.
2) Over-engineering makes it becomes a chore to maintain down the line.
3) If it looks like it doesn't belong there, it probably doesn't.
4) Always test, bug fixing is best done as they're made.
5) Lighthouse and Stackoverflow are your friends
