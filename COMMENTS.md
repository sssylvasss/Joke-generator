# View page live:

https://chucks-dirty-mouth.netlify.app

# The Site

A page where you can search jokes by either clicking on diffrent categories or type free text search.

First option returns a random joke within its category.
Second option returns a list of all jokes that includes the searched text. If your search doesn't lead to any jokes, an error message is returned.

# My process

Used Postman to inspect the API.

Categories.js
Started with displaying all categories. Using UseEffect hook to fetch the category-Array from the API. I used Map. to make a list with clickable links.

---

RandomJokes.js
I used the category's value from the fetch in Categories.js to do a new fetch, fetching a random joke.

---

Search.js:
Add an input field to find jokes by search. Use the search value to GET the fetch.

Hide the search button until the user has typed 3 characters.

---

To handle a "Not Found" I added a fail-message that displays when there is no data returned from the search.

Run "yarn test". Result was 1 failed. I found that I had neglected to add the {} in : import { App } from './App';
No more tests failed.

Used BrowserRouter, Switch, Route to structure the site. I like this way because it is very clear and structured, and that the whole page doesn't have to relaod.

Created style-components to make it easier to style.

Used flex-box to create a responsive site.

Added ReturnButton.

Installed Google fonts.

Installed Font Awesome icons to use as return button. I like FA as it is possible to style them but I was not able to style the icons in stylecomponents so I styled them in index.css.

Tried diffrent style settings. (I often put temporary borders around sections to get a better view on what effect my changes have).

Published on Netlify
One failed, Had forgot to remove unused style-component.

Tested the published site https://validator.w3.org/nu/
No errors or warnings.

Did more changes to the styling so it looked better on Safari and Chrome that I did not see when in DevTools.

With more time I would add some small animation and/or maybe some sounds to make the page alittle more playfull.

I would also add a loader.

---
