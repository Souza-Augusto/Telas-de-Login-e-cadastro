import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Signed";

const AuthStack = createNativeStackNavigator();

export default function routes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
