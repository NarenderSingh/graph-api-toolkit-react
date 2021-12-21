import React, { useEffect, useState } from "react";
import { Login, Agenda } from "@microsoft/mgt-react";
import { Providers, ProviderState } from "@microsoft/mgt-element";

export const useIsSignedIn = (): [boolean] => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };
  }, []);

  return [isSignedIn];
};

const App = () => {
  const [isSignedIn] = useIsSignedIn();
  return (
    <React.Fragment>
      <div className="App">
        <header>
          <Login />
        </header>
        {isSignedIn && <Agenda />}
      </div>
    </React.Fragment>
  );
};

export default App;
