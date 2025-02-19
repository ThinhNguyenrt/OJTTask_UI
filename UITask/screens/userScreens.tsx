import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const threads = [
  { id: "1", name: "Thread 1" },
  { id: "2", name: "Thread 2" },
  { id: "3", name: "Thread 3" },
  { id: "4", name: "Thread 4" },
  { id: "5", name: "Thread 5" },
];

export default function UserScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.newButton}>
        <Text style={styles.newText}>(+) New</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <Text style={styles.header}>Chat History</Text>
      <FlatList
        data={threads}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.threadButton}
            onPress={() => navigation.navigate("Session", { threadId: item.id })}
          >
            <Text style={styles.threadText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFE2F3",
    padding: 10,
    alignItems: "center",
  },
  newButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    marginTop:15,
    width: "50%",
    height:50
  },
  newText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "white",
    width: "80%",
    marginVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    alignItems: "center",
    width: "100%",
  },
  threadButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: "center",
  },
  threadText: {
    fontSize: 16,
    color: "#003366",
    textAlign: "center",
  },
});
