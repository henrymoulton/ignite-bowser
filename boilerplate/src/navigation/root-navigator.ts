import { createAppContainer, createStackNavigator } from "react-navigation"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      exampleStack: { screen: ExampleNavigator },
    },
    {
      headerMode: "none",
      navigationOptions: { gesturesEnabled: false },
    },
  ),
)
