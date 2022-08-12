https://css-tricks.com/css-grid-replace-flexbox/

## Intro

Grid is much newer than Flexbox and has a bit less browser support. That’s why it makes perfect sense if people are wondering if CSS grid is here to replace Flexbox.

To put a point on it:

- Grid can do things Flexbox can’t do.
- Flexbox can do things Grid can’t do.
- They can work together: a grid item can be a flexbox container. A flex item can be a grid container.

## More

Here’s some things Grid is specifically better at than Flexbox:

- Making whole page layouts. It’s better for that even just considering layout performance reasons.

- Making literal grids. Like X columns with Y gap between them homegrown framework stuff. grid-gap is wonderful, as gutters are the main pain point of grid systems.

- Requiring less media query intervention with really powerful functionality like auto layout, minmax(), repeat(), and auto-fill. 

- And another huge one: Grid can position elements in 2 dimensions. Both columns and rows. 

- Flexbox is essentially for laying out items in a single dimension – in a row OR a column. Grid is for layout of items in two dimensions – rows AND columns.

What can get a little confusing is that it’s not impossible to make multi-dimensional layouts in just Flexbox.


