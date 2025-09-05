import { requireNativeModule } from "expo-modules-core";

// This matches the Name("HelloModule") in HelloModule.kt
const HelloModule = requireNativeModule("HelloModule");

/**
 * Call the native hello() function.
 */
export function sayHello(): string {
  return HelloModule.sayHello();
}
