import { Text, StyleSheet } from "react-native";

import color from "../../constants/colors";

export default Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: 'bold',
    color: color.primaryWhite,
    textAlign: "center",
    borderWidth: 2,
    borderColor: color.primaryWhite,
    padding: 12,
    borderRadius: 5,
  },
});
