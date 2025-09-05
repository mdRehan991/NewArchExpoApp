import ExpoModulesCore

public class HelloModule: Module {
  public func definition() -> ModuleDefinition {
    Name("HelloModule")

    // Sync function
    Function("sayHello") {
      return "Hello world 👋 from Swift!"
    }
  }
}
