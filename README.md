# Sweet As Beers

In this challenge you'll build part of a fictitious clearing house for beer - specifically the product listing and shopping cart pages.


## Setup

After cloning this repo

```sh
cd sweet-as-beers && npm i
npm run dev
```


## Starting place

* All of the React components are in place.
* You can find the beer data in `data/beers.js`.
* Redux has been installed, but not yet configured.
* The `actions` and `reducers` folders have been created, but no actions or reducers have been created yet.
* The beer listing displays the beers, but the _Add to cart_ link doesn't do anything yet.

Before we jump into the code editor, let's do some thinking about what we need to accomplish.


## Shape of the store

One of the important tasks when working with Redux is to design the shape of the store. If we think about the type of data that will be changing in this app, there are 2 clear pieces of changing data that multiple components will use:

1. The contents of the **cart** as an array of cart item objects
2. The user's **active page** (React Router is a more appropriate choice to manage navigation, but let's use Redux instead because we need the practice)

Given that, our Redux store should look similar to this:

```js
{
  cart: [
    {
      id: 1,
      quantity: 3,
      name: 'HBIB Ginger Fusion'
    }, {
      id: 2,
      quantity: 1,
      name: 'Mangose & Melons'
    }
  ],
  activePage: 'listing' // or 'cart'
}
```

Now we should have a sense of what our reducers will creating. But before we start building our action creators and reducers, take this time to create the store and wrap our `<App>` with the `<Provider>` in `client/index.js`. You should setup your store so you can use the Redux DevTool.


## Add to cart

In this section, you'll create an action creator, a reducer function and a dispatch the action from a click event.

First, create an action creator for an `ADD_TO_CART` action that looks similar to this:

```js
export const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart (id, name) {
  return {
    type: ADD_TO_CART,
    id: id,
    name: name
  }
}
```

The items in the cart can be managed by a `cart` reducer, which probably makes sense as an array of beers and their quantities. This is a reasonable shape for the `cart` once it has items in it:

```js
[
  {
    id: 1,
    name: 'HBIB Ginger Fusion',
    quantity: 3
  }, {
    id: 2,
    name: 'Mangose & Melons',
    quantity: 1
  }
]
```

However, the initial state the reducer returns should be an empty array indicating an empty cart.

When the reducer is processing the `ADD_TO_CART` action, it should default to `1` for the `quantity` of the cart item it's adding.

Add a click event handler to the hyperlink in `client/components/BeerListItem.jsx`. The handler should dispatch the `ADD_TO_CART` action with the `id` and `name` of the beer associated with the clicked link.

When you have this in place, ensure that when you click the beer links, you can see the store's cart changing in the Redux Dev Tools.


## Navigation

In this section, you'll create an action creator, a reducer function and a dispatch the action from the event handler you wrote in the previous section.

Add an `activePage` property to the Redux store by creating a reducer that processes an action that contains the page we're navigating to. The action creator that returns the action to dispatch for navigating between pages could look like this:

```js
export const NAVIGATE = 'NAVIGATE'

export function navigate (activePage) {
  return {
    type: NAVIGATE,
    activePage: activePage // 'listing' or 'cart'
  }
}
```

Now `connect` the `<App />` component and use the value of `activePage` to determine whether to show the `<BeerListing />` or `<Cart />` component. Tip: consider using the ternary operator for this.

In the click event handler in `client/components/BeerListItem.jsx` have it also dispatch the `navigate` action with `activePage` having a value of `'cart'`.

If you try to click the "Add to cart" link for a beer now, you should get an error in your `Cart` component that `props.cart` is undefined. Connect the `Cart` component to the Redux store so it can render the cart.

Now when you add a beer to the cart, you are taken to the cart and the item has been added.

Note: if you refresh the page, you'll empty the cart. So if you want to add and see multiple items in the cart, you'll need to use the Redux DevTool to dispatch the `NAVIGATE` action with a `activePage` of `'listing'`. Then you'll be able to add another beer to the cart.


## Continue shopping

Rather than dispatching actions from the DevTool, add a click event handler to the "Continue shopping" link in the `<Cart>` component. This handler should dispatch the `NAVIGATE` action with a `activePage` of `'listing'`.

Ensure that clicking "Continue shopping" takes you back to the listing so you can add more beers to the cart.


## Avoid duplicate entries

You'll notice that if you add a beer that is already in the cart, it will be added twice and both will have a quantity of `1`. Update your `cart` reducer so it detects if the beer being added is already in the cart. If it is, increase its `quantity` instead of adding a new one. Tip: try to have a plan for how you intend to do this before jumping directly to the code.

Ensure you can now add a beer that's already in the cart and its quantity will be increased each time you add it.


## Remove from cart

Let's make it possible to remove an item from the cart. To do so, you'll create a new action creator, update your existing `cart` reducer function and a dispatch the action from a new click event handler.

Create an action creator for a `REMOVE_FROM_CART` action that looks similar to this:

```js
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function removeFromCart (id) {
  return {
    type: REMOVE_FROM_CART,
    id: id
  }
}
```

Since this operates on the cart, our existing reducer will suffice - it just needs to know how to process this new action. Consider using `filter()` to remove the item from the new state.

Write a click handler for the delete button that dispatches the `removeFromCart` action with the `id` of the item being removed.


## Update the cart

Now let's give the user an easier way of changing the quantities of items in the cart. In this section, you'll create a new action creator, update the existing reducer function and dispatch the new action from an event handler in `<Cart>`. You will also have to manage some component state to keep track of which items have had their quantities updated.

As the user is updating the quantities of the items in their cart, you'll maintain those changes in the Cart's component state. When they click the _Update_ button, that's when you'll dispatch the `updateQuantities` action to update the Redux store. Do not dispatch any actions in the `onChange` event of the inputs.

Before you continue to the next paragraph, consider what the component state needs to look like in order to keep track of the quantities of each cart item. Think through how you're going to update the state for individual item quantities in the `onChange` handler. You won't be able to use the `name` attribute from the input field, because that will be the same for each item. Remember that the `cart` data is being passed in as a `prop`. **This is a really good opportunity for problem solving, so don't cheat yourself out of a chance for some quality learning.**

If you want more of a challenge, you could try to implement this feature from here. If you'd like a little more guidance, keep reading.

Currently, the cart item quantity being rendered is the value from `props.cart`, but because this value can change, it should be rendered from component state. A reasonable approach is to use `props.cart` as the initial value for the component state.

Add a `handleUpdate` event handler in `<Cart>` and call it from the input boxes. Be sure to pass the `id` of the cart item so the function will know which cat item to update. Use the React DevTool to ensure the updates are working as expected.

Create an action creator for an `UPDATE_QUANTITIES` action that looks similar to this:

```js
export const UPDATE_QUANTITIES = 'UPDATE_QUANTITIES'

export function updateQuantities (cart) {
  return {
    type: UPDATE_QUANTITIES,
    cart: cart
  }
}
```

The `cart` parameter passed to `updateQuantities` can have this shape:

```js
[{
  id: 1,
  quantity: 4
}, {
  id: 2,
  quantity: 6
}]
```

Dispatch the `updateQuantities` action from the `onClick` handler of the Update button.

Our existing `cart` reducer can be used once you've added to it how the state should change when this `updateQuantities` action is dispatched. Make these edits and verify the reducer is working correctly using the Redux DevTool if you need to troubleshoot anything.

Verify everything is working as expected and troubleshoot any issues that you notice. Well done!


## Stretch

1. Implement the **Checkout** button on the cart page. Have it go to a thank you page and store the items in the cart as a new `Order` (new reducer). On the thank you page, include a "Home" link so they can return to the listing. Verify your orders are being saved using the Redux DevTool.

1. On the listing page, add an _admin_ link that goes to a kind of Admin Portal used by Sweet As Beers to mark orders as fulfilled or cancelled. On this page, create 3 headers/sections: Pending, Cancelled, and Fulfilled. After a customer has checked out, their order should be in the _pending_ section. Next to each of these orders, provide buttons to `CANCEL_ORDER` and `FULFILL_ORDER`. When an order is cancelled, it should be moved to the cancelled section, and if fulfilled, moved to the Fulfilled section.

Hopefully this exercise has given you an opportunity to become more comfortable and confident with React and managing a store with Redux.
