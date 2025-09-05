import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 110,
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 30,
  },
  footer: {
    right: 30,
    bottom: 60,
    position: "absolute",
  },
  footerText: {
    color: "#b3b3b3",
    textAlign: "right",
  },
});

export default styles;
