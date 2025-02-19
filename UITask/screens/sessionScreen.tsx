import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Icon user & máy tính
import { chatData } from "../data/chatData";

export default function SessionScreen() {
  return (
    <View style={styles.container}>
      {/* Danh sách Query */}
      {chatData.map((chat, index) => (
        <View key={chat.id} style={styles.section}>
          <View style={styles.queryRow}>
            <FontAwesome name="user-circle" size={32} color="#003366" style={styles.userIcon} />
            <View style={styles.queryContainer}>
              <TextInput style={styles.input} value={chat.query} editable={false} />
            </View>
          </View>
          
          {/* Danh sách Chunk */}
          <View style={styles.chunkContainer}>
            <FlatList
              data={chat.chunks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View>
                  <Text style={styles.chunkText}>{item}</Text>
                  {index < chat.chunks.length - 1 && <View style={styles.separator} />}
                </View>
              )}
            />
            <FontAwesome name="desktop" size={32} color="gray" style={styles.computerIcon} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  section: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
  },
  queryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 550,
    marginBottom: 10,
  },
  userIcon: {
    marginRight: 15,
  },
  queryContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "#003366",
  },
  input: {
    fontSize: 16,
    textAlign: "center",
    color: "#003366",
    fontWeight: "bold",
  },
  chunkContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "50%", /* Giảm kích thước khung chứa chunk */
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#003366",
    position: "relative",
  },
  chunkText: {
    fontSize: 16,
    color: "#003366",
    paddingVertical: 10,
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#003366",
    width: "100%",
  },
  computerIcon: {
    position: "absolute",
    right: -50,
    top: "50%",
    transform: [{ translateY: -16 }],
  },
});
