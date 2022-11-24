import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Registration, Welcome } from "../screens/Signin";
const AuthRoutes = createNativeStackNavigator();

export default function routes() {
  return (
    <AuthRoutes.Navigator initialRouteName="Welcome">
      <AuthRoutes.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthRoutes.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
      <AuthRoutes.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
    </AuthRoutes.Navigator>
  );
}
