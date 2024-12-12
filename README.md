# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   >   I created an event listener to handle mouse click events in the **main** module.  Triggered by the event occurence, this code examines the **dataset.type** attribute of the target of the event (the thing which was clicked by the user) to determine the kind of data contained in the target.  The code passes the event on to a **clickedEvent** function in the module correspondingly named to process tasks for the data type.  In this case, **kidClickedEvent()** in the **kids** module.  I wanted to try this implementation because the one I tried already had a couple of drawbacks I was curious about improving.  If I am discussing the benefits of one software design pattern over another, then this pattern eliminates the event listener/code redundancy and any concern about the order of event listener execution because there is only the one.  Modularity of the code is retained, though maybe the listener could be placed into a new module containing code for other event listeners with a similar function.  There may be some
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > findCelebrityMatch() must be executed for each kid in the kids array because the kid object contains the ID of the celebrity but not the celebrity's name or sport.  This function will find the celebrity with the ID in question so the code can access those data items and produce the desired html string.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The sport is contained in the dataset of the html element which displays the celebrity name.  This is referred to as "state."  The element is the target of the clickEvent which triggers the alert text display.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The main module first imports the functions needed from other modules so they can be accessed.  Next a reference to the HTML element designed to be the placeholder for the HTML string about to be built is obtained.  The code then builds the string, ussing interpolation when calling specific functions which build each of the three data lists to be displayed.  Once the HTML string is built, it is set using the **innerHTML** property of the reference previously obtained.  The last part of the **main** module sets up the event listener for the mouse clicked event previously discussed in question 1.
