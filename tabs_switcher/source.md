<!-- T A B     S W I T C H E R -->

- In this project we render the data from parent to child component which change the data by
    onChange and onClick
- Define inside the parent component if it’s simple and specific to that component.
- Define outside if the child component is large, reusable, or may benefit from better separation 
    of concerns.

- When we  implement both behavior and custom logic in Tab component
- Behavior Change: Add a visual indicator for the active tab, like highlighting it.
- Custom Logic: Implement specific actions that occur when a tab is clicked (e.g., logging a 
    custom message, triggering an API call, or rendering additional content).

-When to Use Which?
- Use onClick={() => handleOnClick(index)}: when you need to pass arguments.
- Use onClick={handleOnClick}: when no arguments are needed.
- Avoid onClick={handleOnClick()}: because it causes the function to run on render.

- Parameters are variables defined in the function declaration that act as placeholders for the
     values that the function will receive when it is called.

- Arguments are the actual values passed to the function when you call it.
