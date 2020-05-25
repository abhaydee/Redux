import React from "react";
import Postform from "./Components/Postform";
import Posts from "./Components/Posts";
import { Provider } from "react-redux";
import Store from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Postform />
          <Posts />
        </div>
      </Provider>
    );
  }
}
export default App;
