import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInScreen from "./src/screens/LogInScreen";
import MainScreen from "./src/screens/MainScreen";

const navigator = createStackNavigator(
  {
    LogIn: LogInScreen,
    Main: MainScreen,
  },
  {
    initialRouteName: "LogIn",
    defaultNavigationOptions: {
      title: "Shippyx",
    },
  }
);

export default createAppContainer(navigator);
