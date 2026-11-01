# Assignment 6 — jQuery

Sanzhar Karaulov

A small multi-page website with jQuery selectors, effects, DOM changes and animations.

## Run

Open `index.html` in a browser, or use WebStorm's browser preview. Internet access is needed for jQuery 3.7.1 from the CDN and the dog photo on the Effects page. The two images on the DOM page are included in the project.

You can also run a local server from the project folder:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Pages

| Page | Tasks | What it does |
| --- | --- | --- |
| `index.html` | 0–1 | Prints the ready message; changes text, HTML and CSS using ID, class and tag selectors. |
| `effects.html` | 2–4 | Shows and hides text, fades an image, and slides a panel. |
| `dom.html` | 5–7 | Adds items at either end of a list, removes the last item, changes image and link attributes, and previews form input live. |
| `animations.html` | 8–10 | Runs basic, sequential and combined animations. Each example has a reset button. |
| `project.html` | 11 | A study accordion with slide effects. Only one topic stays open at a time. |

Every page has the same navigation bar. Styles are in `style.css`; jQuery handlers are in `script.js`.

## Try it

1. Open the console on Basics and find `jQuery is ready!`. Try all three buttons.
2. On Effects, try hide/show/toggle, all fade buttons, all slide buttons and the panel header.
3. On DOM, add an item at each end, then remove all items. Removing from an empty list is safe.
4. Change the image twice and change the link. Type a name and email, then clear them. The preview updates without submitting the form.
5. On Animations, run each example. Task 9 moves right, moves down, shrinks, then returns to its starting size and position. Try Reset while it is moving.
6. On Mini Project, open a topic, switch to another, and click again to close it. Tab and Enter also work.
7. Resize the browser to check the navbar and page layout on a narrow screen.

The form is a live preview only. It does not send or save any data. Restarting an animation cancels its previous run, and Reset clears queued steps.

## Publish with GitHub Pages

Push the completed commits to GitHub. In the repository settings, open Pages, choose **Deploy from a branch**, select **main** and **/ (root)**, then save. GitHub will show the website URL when deployment finishes.
