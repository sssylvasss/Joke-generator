# View page live:

https://chucks-dirty-mouth.netlify.app

# The Site

A page where you can serch jokes by either clicking on diffrent categories or do a free text search.

First option return a random joke within it's category.
Second option return a list of all jokes that includes the searched text. If your search don't leads to any jokes, you will get an error message.

# My process

Use Postman to examen the API.

Categories.js
Start with displaying all categories. Useing UseEffect hook to fetch the categorie-Array from the Api. I use Map. to make a list with clickable links.

---

RandomJokes.js
I use the categories value from the fetch in Categories.js to do a new fetch, fetching a random joke.

---

Search.js:
Add a input field to find jokes by searching. Use the search value to do the fetch.

Hide the search button until the user typed 3 caracters.

---

To handel a "Not Fund" I added fail-message that showes when there are no data returned from the search.

Run "yarn test". Result was 1 failed. I fund that I had missed to add the {} in : import { App } from './App';
No more test failed.

I use BrowserRouter, Switch, Route to structure the site. I like this way because it is very clear and structured, and that the whole page don't have to relaod.

I created Stylecomponents to make it easier to style it.

Useing flex-box to create a responsiv site.

Added ReturnButton.

Installed Google fonts.

Installed Font Awesome icons to use as return button. I like FA as it is possible to style them but I was not able to style the icons in stylecomponents so I styled them in index.css.

Try diffrent style settings. (I often put temporary borders around sections to get a better view on what effect my changes have).

Publiched on Netlify
One failed, Had forgot to removed unused Stylecomponent.

Tested the published site https://validator.w3.org/nu/
No errors or warnings.

Did some more changes to the styling so it looked better on Safari and Crome that I did not see when in DevTools.

If I had more time I would add some small animation or/and maybe some sounds to make the page alittle more playfull.

I would also add a loader.

---
