# How to make an SPA with Simpla and Page.js

Single Page Applications (SPA) are popular amongst developers trying to give their users an experience that feels more like that of a native application. 

## Get Setup

First we need to create a project directory and install the page.js framework that will handle the routing in our SPA.

```bash
mkdir simpla-spa
cd simpla-spa
```

There are a few ways to install page.js

Through package managers:
```bash
npm install page
component install visionmedia/page.js
bower install visionmedia/page.js
```
Or we can just include via CDN
```html
<script src="https://cdn.rawgit.com/visionmedia/page.js/master/page.js"></script>
```

The next thing we need to do is to sign up for Simpla and create a project. Then, include the library and initialise Simpla with your project ID in the `<head>` of the index.html file in the template.

To make things a little prettier, lets include a CSS framework so we've got some styling done for us.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css"
```

##
