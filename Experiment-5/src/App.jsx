import { Suspense, lazy } from "react";
import ParentCounter from "./components/contextapi/CounterParent";

const LocalCounter = lazy(() =>
  import("./components/localstate/CounterState")
);

const CounterReduxParent = lazy(() =>
  import("./components/redux/CounterGlobalReduxParent")
);

function App() {
  return (
    <>
      <h1>Experiment 5 : Lazy Loading</h1>

      <div className="container">
        {/* Local State Section */}
        <div className="card local">
          <h3>Local State Management</h3>
          <Suspense fallback={<div className="loading">Loading Local Counter...</div>}>
            <LocalCounter cno="Counter 1" />
            <LocalCounter cno="Counter 2" />
          </Suspense>
        </div>

        {/* Context API Section */}
        <div className="card context">
          <h3>Context API</h3>
          <ParentCounter cno="Counter 1" />
          <ParentCounter cno="Counter 2" />
        </div>

        {/* Redux Section */}
        <div className="card redux">
          <h3>Global Redux Store</h3>
          <Suspense fallback={<div className="loading">Loading Redux Counter...</div>}>
            <CounterReduxParent cno="Counter 1" />
            <CounterReduxParent cno="Counter 2" />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
