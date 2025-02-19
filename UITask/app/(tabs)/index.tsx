import { View, StyleSheet } from "react-native";
import UserScreen from "../../screens/userScreens";
import SessionScreen from "../../screens/sessionScreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Sidebar User */}
      <View style={styles.sidebar}>
        <UserScreen />
      </View>

      {/* Màn hình Session */}
      <View style={styles.session}>
        <SessionScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#003366",
  },
  session: {
    width: "70%",
  },
});
