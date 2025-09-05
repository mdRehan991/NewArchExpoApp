# NewArchExpoApp

This is a sample **Expo New Architecture app** built with Expo SDK 53.  
It includes a custom **Expo Native Module** called `hello-module`.

---

## 📦 Included Module

### `hello-module`
A custom Expo module demonstrating:
- Function (`sayHello`).
- When called return a message from native side.

---

## 🚀 Getting Started

### Install dependencies
```sh
yarn install

Android -
yarn android

iOS -
yarn ios

Pod install -
cd ios && pod install && cd ..
```

### Usage
```sh
import { sayHello } from "hello-module";

const msg = sayHello();
Alert.alert("Native says:", msg);
```

### Example
```sh
import { sayHello } from "hello-module";
import { Button, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Say Hello"
        onPress={() => {
          const msg = sayHello();
          Alert.alert("Native says:", msg);
        }}
      />
    </View>
  );
}
```

### Troubleshooting

- If you get errors after modifying native code, try cleaning the build:
```sh
cd ios && pod install --repo-update
cd ..
yarn ios
```
- For Android, clean Gradle:
```sh
cd android && ./gradlew clean
cd ..
yarn android
```
