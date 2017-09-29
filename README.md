# README

Current app link: https://pleasehireme.herokuapp.com


## App Overview

This app allows teachers and artists to create 'lessons' on a virtual
whiteboard: it records the user's strokes on the board and the times
they were made. Once a lesson has been saved, other users can visit
the link and watch the lesson be played out in real time. Additionally
users can create drawings so that others can view the drawing process.

## Technologies used

This is a full stack app using Rails on the backend and React-Redux
on the front end. Few other third-party libraries were used.
The drawing/re-rendering feature was handled by HTML Canvas.

## Key features

### Drawing and Redrawing
The first major challenge of this project was to record the user's
strokes such that they could be replayed, without using any third party
apps to do it for me (Canvas does not have an interface for this
specific task). My solution was to
  1. On mouse down, record the time and the current position of the cursor
    as the first element of an array.
  2. While the mouse is down, every frame (~16 ms), push the current position
    of the cursor to the array, and draw a line between the last position
    and the current position
  3. One mouse up, create a 'path' object, which stores the sequence of coordinates
    defining the path, along with the start time and the brush properties used
  4. When the user saves the board, a 'board' object is saved to the database,
    with the paths stored as a string of a ruby hash.
  5. On playback, set a timeout for each path at it's start time
  6. Once the time-out initialises, on each frame draw a line from the
    previous coordinate to the current coordinate. This guarantees
    playback at a speed equal to the drawing speed.

Before coding this feature I had assumed that Javascript would allow me
to poll the cursor position whenever I wanted; however, the vanilla JS
methods to find mouse position can only be called on an event. Since
an interval being triggered is not an event, I couldn't find the position
every frame as I needed. Furthermore the onMouseMove event wasn't usable
for this purpose, since its polling rate is variable and defined
on the client-side. My workaround was to
  1. Store a 'current position' state variable
  2. On mouse move, update the current position variable
  3. Every frame, record the current position variable

This allowed me to a) use the onMouseMove method to update the cursor
position, b) poll for the position at a controlled rate, and c)
return the position even when the mouse had not moved, allowing correct
rendering and correct saving with the same process.

### Active thumbnails
Instead of showing a screenshot, the board thumbnails displayed on the
dashboard and user profiles re-draw the board in real time. This required
scaling the board's coordinates to its current container, which was
impossible since the path coordinates were saved absolutely without reference
to the size of the board they were drawn on.

I solved this by normalised the board's coordinates upon saving, i.e
the coordinates were saved as percentages of the boards height/width.
Then, upon loading, every coordinate was multiplied by the current container's
dimensions before being saved to the component state. The redux state
keeps the normalised coordinates: this means that when a user clicks on a
thumbnail, the same board can be re-drawn without having to de-scale it
or pull it from the database again.
