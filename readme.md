# How to make a SPA with Simpla and Page.js

Single Page Applications (SPA) are popular amongst developers trying to give their users an experience that feels more like a native application. 

In this tutorial we are going to use Simpla to build a SPA. We will use the Page.js library to handle front-end routing and make our SPA feel more like a real application.

## Get Setup

First you need to clone or download this Github repo. 

Page.js can be installed through common package managers like npm or bower, but for this short tutorial we've opted to include the CDN to keep things simple. Open up `index.html` and you'll see we've incldued a CSS framework called Bulma. This way we get some styled components out of the box and things look a little nicer.

```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css">
    <script src="https://cdn.rawgit.com/visionmedia/page.js/master/page.js"></script>
    <script src="https://app.simpla.io"></script>
    <!-- TODO: Enter project key -->  
    <script>Simpla('PROJECT-KEY');</script>  
```

The next thing we need to do is to sign up for Simpla and create a project. Then initialise Simpla with your project key.

## What are we going to build?

Open up the index in a browser and you'll see a few of Bulma's card components. 

We are going to use these cards as representations of a person's 'profile'. We will include some nav links at the top with each card corresponding to one of the links.

## Using Simpla elements inside a Card

We are going to replace some of the content inside our first Card with Simpla elements. 

```html
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <simpla-img sid="img"></simpla-img> -- Here
    </figure>
  </div>
<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-32x32">
        <img src="http://placehold.it/64x64" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-5"><simpla-text sid="name"></simpla-text></p> -- Here
      <p class="subtitle is-6"><simpla-text sid="handle"></simpla-text></p> -- Here
    </div>
  </div>

  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>.
    <a href="#">#css</a> <a href="#">#responsive</a>
    <br>
    <small>11:09 PM - 1 Jan 2016</small>
  </div>
</div>
</div>
```

We've converted the main image, the name and the handle tag to Simpla elements. Now we need to insert some content into them.

?? Do I need to run them through #edit again ??

## Using `<simpla-block>` to organise our data

The `sid` of any element inside `<simpla-block>` is scoped to that block, ensuring that its content is unique. This means that we can reduce the amount of HTML we need to use. 

Now that we have included Simpla elements inside our first card, we can wrap it with a `<simpla-block>`.

```html 
<simpla-block class="feature" sid="0">
  <div class="card">
    ...
  </div>
</simpla-block>
```

At the moment, the only parts of our card that are dynamic are the main image, the title and the handle tag. So why should we have to replicate all the other code 3 times? With the namespacing ability of `<simpla-block>`, we don't have to. We can simply change the `sid` of the block, and all of the elements within will automatically refetch their data.

## Interacting with Simpla through Javascript