# View page live:

https://chucks-dirty-mouth.netlify.app

# The Site

A page where you can serch jokes by either clicking on diffrent categories or do a free text search.

First option return a random joke within it's category.
Second option return a list of all jokes that includes the searched text. If your search don't leads to any jokes, you will get an error message.

# My process

Use Postman to examen the API.

Start with displaying all categories. Useing UseEffect hook to fetch the categorie-Array from the Api. I use Map. to make a list.

Turn the categories into Links to be able to us their value in the Url address, using params.

Add a input field to find jokes by searching. Use the search value in the Url.

Hide the search button until the user typed 3 caracters.

To handel a "Not Fund" I added fail-message that showes when there are no data returned from the search.

Run "yarn test". Result was 1 failed. I fund that I had missed to add the {} in : import { App } from './App';
No more test failed.

I created Stylecomponents to make it easier to style it.

Useing flex-box to create a responsiv site.

Added ReturnButton.

Installed Google fonts.

Installed Font Awesome icons to use as return button. I like FA as it is possible to style them but I was not able to style the icons in stylecomponents so I styled them in index.css.

Try diffrent style settings. I often put temporary borders around sections to get a better view on what effect my changes have.

Publiched on Netlify
One failed, Had forgot to removed unused Stylecomponent.

Tested the published site https://validator.w3.org/nu/
No errors or warnings.

---

# Oneflow - FrontEnd Assignment

Create a web-application using React as presented below.

## General

You can use this boilerplate as the starting point of your project. All of your commits must be here, we want to see how you work.

**Register everything** including your tests/spikes, ideas if you had more time (explain how would you solve things), decisions you've made (and why), the architecture you chose. Add a `COMMENTS.md` or a `HISTORY.md` to show us your thoughts and ideas.

## The assignment

![](https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png)

The applicant should design and implement a minimalistic web-application that would let the user browse, search and navigate through [Chuck Norris jokes](https://api.chucknorris.io/) and works within a standard modern web-browser.
We expect the applicant to at least implement these three endpoints:

- https://api.chucknorris.io/jokes/categories
- https://api.chucknorris.io/jokes/random?category={category}
- https://api.chucknorris.io/jokes/search?query={query}

which would allow:

- listing all the categories
- navigating into a category and showing a random joke in that category.
- searching through all the jokes using free text search.

## Technical assumptions

- You should use React
- You can be creative with the design and layout of your solution.

## Extras

Focus on the basics and on solving the main problem, but you can also:

- Use any third-party library you want (with the exception of jQuery and jQuery-dependent stuff).
- Use modern JavaScript features in your `.js` code.
- Test everything that makes sense to be tested.

## What are we evaluating?

1. The described features and requirements.
2. Any extras you've added to your final solution.
3. Any other creative thing or feature you added by yourself.
4. In general: simplicity, clarity of your solution, architecture, documentation, code style, interface design, and the code.

## Tips

- We want you to show us how you work, break down bigger problems and prioritize them.
- It's an option to not implement everything, mock anything you think it's gonna save you time.
- It's better if you show us something small that works and is well factored rather than something complete but "buggy"
- It's better if you use open-source libraries and explain why you chose them.
- If you have any questions, please ask us :)

## The boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you don't need to worry about minor details. But still, you are free to `eject` from it and create your own setup, if you want.

### Available Scripts

In the project directory, you can run:

- `yarn start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
- `yarn test` launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `yarn build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
- `yarn eject` **Note: this is a one-way operation. Once you `eject`, you can’t go back!** If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own. You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
