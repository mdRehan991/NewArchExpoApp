import styles from "./styles";
import { sayHello } from "hello-module";
import { Button, Alert, View, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Demo Expo App</Text>
      <Text style={styles.subheading}>Featuring: Custom Expo Module</Text>

      <Button
        title="Say Hello"
        onPress={() => {
          const msg = sayHello();
          Alert.alert("Native says:", msg);
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>19.0.0 :React</Text>
        <Text style={styles.footerText}>53.0.22 :Expo</Text>
        <Text style={styles.footerText}>0.79.6 :React Native</Text>
      </View>
    </View>
  );
};

export default Home;
