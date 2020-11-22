Hide Sidebar
====================

Adds a tiny hide button for sidebar of Redmine on larger screens, not when the sidebar is displayed as part of dropdown menu on smaller screens.

Features
====================

 * Using localStorage to remember status of the sidebar (hidden or not) per each page
 * collapsed sidebar leaves 20px which, when hovered, open up the sidebar automatically. It is thus possible to use the sidebar until hovering the extended area, then it will collapse again automatically on exit. Clicking the button again without hovering the sidebar makes it to remain back permanently open

Installation
====================
Change to redmine/plugins folder and run:
```bash
  git clone https://github.com/maxrossello/sidebar_hide.git
```

Tested with...
====================

Redmine:
 * 4.1.1
 * see https://github.com/bizyman/sidebar_hide for earlier versions >= 3.3.0

Themes:
 * Default theme
 * Alternate
 * Classic 
 * [Gitmike](https://github.com/makotokw/redmine-theme-gitmike)
* [Alex skin](https://bitbucket.org/dkuk/redmine_alex_skin.git)
* [Custom gitlab](git@github.com:unicornio8/nyss-gitlab-redmine-theme.git)
* [Flat](git@github.com:labSupport/redmine-theme-flat.git)
* [Flatly light](git@github.com:Nitrino/flatly_light_redmine.git)
* [NYSS gitlab](git@github.com:nysenate/nyss-gitlab-redmine-theme.git)
* [Pepper](git@github.com:koppen/redmine-pepper-theme.git)
* [Pixel cookers](git://github.com/pixel-cookers/redmine-theme.git)
* [Progressive](git@github.com:stgeneral/redmine-progressive-theme.git)
* [PurpleMine2](git@github.com:mrliptontea/PurpleMine2.git)
* [Taskman](git@github.com:eea/taskman.redmine.theme.git)

Browsers:
 * Google Chrome 84.0
 * Firefox 78.0

License
====================

(The MIT License)

Copyright (c) 2015 Berk Demirkır, 2020 Massimo Rossello

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
