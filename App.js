import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInScreen from "./src/screens/LogInScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    LogIn: LogInScreen,
    List: ListScreen
  },
  {
    initialRouteName: "LogIn",
    defaultNavigationOptions: {
      title: "Shippyx",
    },
  }
);

export default createAppContainer(navigator);
