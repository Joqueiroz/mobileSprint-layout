import Login from "./screens/LoginScreen";
import Cadastro from "./screens/CadastroScreen";
import Home from "./screens/HomeScreen";
import TelaInicial from "./screens/Telainicial";
import Layout from "./components/Layout";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
      <Stack.Screen name="Login" component={()=>(
          <Layout>
            <Login/>
          </Layout>
        )}/>
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout>
            <Cadastro/>
          </Layout>
        )}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="TelaInicial" component={TelaInicial}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}