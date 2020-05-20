# Why NGRX

- Centrally locate data for use within the app.
- Remove redundant API calls.
- Move business logic out of components into smaller
- testable units of work.
- Standard pattern of implementation.

## Branches

### Master

Master is a basic application for listing and searching songs. The SongsList component has a list of songs that can be filtered through a search input box. It calls an API and subscribes to the response to populate the list box. All of the data and business logic are in the component.

### Implement NGRX - Store, Reducer, Selector and Actions

**Branch 1 -** is after the initial NGRX impleemntation. The result of the API call is dispatched to the store using an action. The reducer processes the action and updates the data in the store. The songs list is subscribing to the store using a selctor to populate the UI. The search follows the same pattern of dispatching an action, reducer updates the store, selector to get the search string from the store. The filtering of the data is done in the selector.

### Implement Effects

**Branch 3 -** is using effects to trigger the data load when the /songs/list route is executed. An effect is also making the API call and processing the result. Virtually all code has been removed from the component.

### Implement Facade

**Branch 5 -** has a facade (service class) that exposes the public API of the Feature State. It has properties for the selectors and methods to dispatch actions. The SongsList component has injected the facade in the constructor. All other typescript business logic has been removed from the component. The html template has been moved to the component.ts because there is so little code in the component.

### Advanced Effects

**Branch 7 -** there is a second genre dropdown filter that has been added to the Songs List. Effects have been modified to allow multiple effects to trigger a reload of songs. The GetSongs effect is consuming additional data from the store. A complex selector is calculating the genres from the songs data.

### Implement Unit Tests

**Branch 9 -** has unit tests for the selectors, reducer and effects.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
