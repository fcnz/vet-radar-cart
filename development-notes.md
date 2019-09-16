# Initial Planning Notes

These are my intentions before doing any coding, the final submission will probably be quite different.

### Visual Design

Since the brief stated that the product list must be visible at all times, there is unlikely to be a need for any page switching. A single page with the products list displayed should be the primary visual element. A shopping cart icon will appear to the right of a title bar as its a common convention. The icon will show how many different items are in the cart. Clicking the cart icon will pull up an overlay with the cart details. It will be a list view with the item details, an editable quantity box, and a delete button on each line. At the bottom of the overlay will be a total for the items in the cart.

### Data flow

A backend API will be stubbed/mocked as it is only supposed to be a 2 hour project. This can also help with testing. The cart will have an initial state to represent data from a past session having been fetched from a server. The data model will use event sourcing to record changes to the cart. The events can be reduced to give the current state of the cart, but retain all useful business information. The product list will be fetched from the mocked backed. This strategy is a good idear for large product lists. If the eventual product list is realatively small, a better strategy might be to use something like Gatsby to render the product list at build time.

### Testing

Use the default test toolchain. Tests to procede code wherever feasible.
