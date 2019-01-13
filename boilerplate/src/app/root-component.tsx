import "../i18n"
import * as React from "react"
import { RootNavigator } from "../navigation"

/**
 * This is the root component of our app.
 */
export class RootComponent extends React.Component {
  /**
   * When the component is mounted. This happens asynchronously and simply
   * re-renders when we're good to go.
   */
  async componentDidMount() {}

  render() {
    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color.
    //
    // This step should be completely covered over by the splash screen though.
    //
    // You're welcome to swap in your own component to render if your boot up
    // sequence is too slow though.

    // TODO: Commented by Henry - to add Redux or GraphQL?
    // if (!rootStore) {
    //   return null
    // }

    // otherwise, we're ready to render the app

    return <RootNavigator />
  }
}
