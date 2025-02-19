import { View, Text, FlatList, TextInput, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Icon user & máy tính

const chunks = ["Chunk 1", "Chunk 2", "Chunk 3", "Chunk 4", "Chunk 5"];
const queries = ["Query 1", "Query 2"]; // Danh sách các query

export default function SessionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {queries.map((query, index) => (
        <View key={index} style={styles.queryBlock}>
          {/* Thanh Query */}
          <View style={styles.queryRow}>
            <FontAwesome name="user-circle" size={32} color="#003366" style={styles.userIcon} />
            <View style={styles.queryContainer}>
              <TextInput style={styles.input} placeholder={query} />
            </View>
          </View>

          {/* Danh sách Chunk */}
          <View style={styles.chunkContainer}>
            <FlatList
              data={chunks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => ( // ✅ Sửa i thành index
                <View>
                  <Text style={styles.chunkText}>{item}</Text>
                  {index < chunks.length - 1 && <View style={styles.separator} />}
                </View>
              )}
            />
            <FontAwesome name="desktop" size={32} color="gray" style={styles.computerIcon} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor:"#F5E6CA",
  },
  queryBlock: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  queryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 550,
    marginBottom: 20,
  },
  userIcon: {
    marginRight: 20,
  },
  queryContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  input: {
    fontSize: 16,
    textAlign: "center",
  },
  chunkContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "80%",
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
    top: 10,
  },
});
