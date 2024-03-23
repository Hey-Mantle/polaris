
# Mantle App API React Client and Components

A [react](https://react.dev/) interface for interacting with the [Mantle](https://heymantle.com) App API and drop-in components for your billing UI.

## Installation

You can install the Mantle react package using npm:


```bash
$ npm install @heymantle/surface
```

## Usage

Include the `MantleProvider` react context somewhere near the root of your component tree, after you have access to your customer / shop data, you'll need the stored Mantle customer token from the `identify` request you did server-side. For example:

```js
import { MantleProvider } from "@heymantle/react";

const App = (Component) => {
  const [shop, setShop] = useState();

  const fetchShop = async () => {
    const response = await fetch('/api/shop');
    setShop(await response.json());
  }

  useEffect(() => {
    fetchShop();
  }, [])

  if (!shop) {
    return <Loading />;
  }

  ReactDOM.render(
    <BrowserRouter>
      <AppFrame host={host}>
        <MantleProvider
          appId={process.env.MANTLE_APP_ID}
          customerApiToken={shop.mantleApiToken}
          apiUrl={process.env.MANTLE_API_URL}
        >
          <Component />
        </MantleProvider>
      </AppFrame>
    </BrowserRouter>,
    document.getElementById("app-container")
  );
};
```

Furthur down the stack you can then use the `useMantle` hook for most data and operations, for example:

```js
import { useMantle } from "@heymantle/react";

const HomePage = () => {
  const { customer, subscription, subscribe, cancelSubscription, pushEvent } = useMantle();

  useEffect(() => {
    pushEvent({
      eventName: 'page_view',
      properties: {
        path: window.location.href,
      },
    });
  }, [window.location]);

  return (
    <div>
      {customer.subscription ? (
        <div>
          <span>You're currently susbcribed to: {customer.subscription.plan.name}</span>
          <button
            onclick={async () => {
              await cancelSubscription();
            }}
          >
            Cancel subscription
          </button>
        </div>
      ) : (
        <div>
          <a href="/plans">Select plan</a>
        </div>
      )}
    </div>
  )
};
```

## Documentation

Documentation is available at [https://heymantle.com/docs/surfacing-mantle-data](https://heymantle.com/docs/surfacing-mantle-data).
