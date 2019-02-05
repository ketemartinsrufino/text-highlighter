## Planning
- [x] Create highlighter component
- [x] Create highlighter filter component
  - Filter is sorting by highlight action order
- [x] Uses contextApi or hooks
- Configure lint/prettier
- Improve accessibility
- [x] organize folders
- implement unit tests

## Issues
- if click 2x and select all text, a exception is thrown.
- When user enter in edition mode, save previous highlighted texts.
- We can't remove a selection.
- Show a small popup with some formatting options (to change or remove the color)

## Decisions
- At begin, I divided the work like this:
  - Create a complete Highlighter with a static text and  a ColorList that could be reused after.
  - Create a complete HighlighterFilter, using  the ColorList previously created.
  - When the moment to share data came, I choose to use Context API and not Redux to management state.
- I should do smaller commits.
- I added lint and prettier but I didn't configured the rules correctly.
- I think that I could improve a little bit the apparence.
- I remembered of accessibility, but I had no time to improve this.
- I should test much more.