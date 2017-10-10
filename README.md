# Undercover Tourist Frontend Coding Challenge
The project can be viewed in two forms.
  1. As compiled html, css, and javascript.
            - Located at /compiled_project
  2. As a nodejs served app.
            - Uncompiled assets found at /static and /views

## Project notes
Undercover Tourist heavily uses the foundation frontend framework. In normal circumstances I would prefer to use a common tool when writing marketing pages, but I decided to forgo any framework to show what I can do without one.

### Notes on CSS

This project uses the [Sass](http://sass-lang.com/) preprocessor and [BEM](https://en.bem.info/methodology/) css methodology. The use of BEM can be seen primarily in css and js structure of the project located in /static/frontend/blocks/. here you can find the Sass and js for the each 'block' template located in /views/blocks/. The folder name for a block's template folder and static assets are the same. For more on this project's specific implementation of BEM blocks checkout, [BEM blocks](https://en.bem.info/methodology/quick-start/) and [BEM flat file structure](https://en.bem.info/methodology/filestructure/#flat)

BEM blocks should not be positionally spaced with margin. They should be able to be used on any page. This should be done on a page specific css file. In the case of this project, this is done in /static/frontend/sass/page.scss.

### Notes on Javascript

All javascript relating to BEM css blocks can be found within the same folder as a block's corresponding Sass file. Located at /static/frontend/blocks/.

All javascript using Jquery should use an anonymous self calling function which binds jQuery to $. This technique is used to not pollute the global namespace to allow the global scoped variable $ to be bound do other libraries if nessicary.

Here is an example of the above described technique.

     (function ($) {
        // you can now use jQuery() as $() locally
        $(document).ready(function() {
        });
    })(jQuery);

### Notes on Node
Node was chosen simply as a means of compiling template files and serving static assets in a developer friendly way. [Express](https://expressjs.com/) is used as the [node.js](https://nodejs.org/en/) server and [Mustache]((https://mustache.github.io/)) is setup as its templating language.

### Project dependencies
[Sass](http://sass-lang.com/)
[SassMQ](https://github.com/sass-mq/sass-mq)
[Normalize CSS](https://necolas.github.io/normalize.css/)
[HTML5 Boilerplate](https://html5boilerplate.com/)
[jQuery](https://jquery.com/)
[Mustache](https://mustache.github.io/)
[Gulp](https://gulpjs.com/)
[Node](https://nodejs.org/en/)
Various node modules found in package.js