package expo.modules.hellomodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class HelloModule : Module() {
  override fun definition() = ModuleDefinition {
    // The name used in JS: requireNativeModule('HelloModule')
    Name("HelloModule")

    // Simple synchronous function
    Function("sayHello") {
      "Hello from Kotlin 👋"
    }
  }
}
