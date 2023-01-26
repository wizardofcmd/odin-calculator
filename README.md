# odin-calculator
Basic calculator built using HTML, CSS and JavaScript.

<p align="center">
  <img src="https://user-images.githubusercontent.com/70809221/214951775-830f464b-27d9-41da-9489-fca185c1643d.png" />
</p>

## Deployment
https://wizardofcmd.github.io/odin-calculator/

## Afterthoughts
- Letter spacing between the numbers and decimals could be a bit more well-spaced out (incorporate a \<span\> tag for decimals?).
- A lot of extra conditionals and other logic was needed because of the way the HTML elements were structured. The \<p\> tags used in displaying the value of the button complicated the project probably way more than it should have. Maybe, I could have used event bubbling in a way more efficient
manner so that I could properly ignore capturing the \<p\> tags when clicked on.
- Reading the requirements properly would've lead to a cleaner method of incorporating the 'clear' button. I had already designed on a design for the calculator and then saw that I needed a clear button but I didn't want to move away from the initial wireframe. Next time, I'd probably make sure I know everything I need before then going out and sticking with a design.
- Preventing overflowing is another improvement I'd make, either by setting a character limit on the current operation or by dynamically shrinking the current operation with each input past a certain threshold so that it all fits in the screen.
- The operate() function logic was probably one of the hardest parts of the project, outside of actually using flexbox to align my elements correctly (I'm still bad at flexbox, oops!). What really helped me was actually writing out the entire flow of a given operation, including what the current total was at each iteration. It was super timeconsuming but it turned out to be greatly beneficial because, once I had written it all out and figured it what conditional logic I needed, it was a breeze to code it all and have it working right out the gate.
