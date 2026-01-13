import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CalcButton from "../../components/ui/CalcButton";

export default function Index() {

  const [display, setDisplay] = useState("0");



  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>

      <View style={styles.row}>
        <CalcButton label="0" onPress={() => {}}></CalcButton>
        <CalcButton label="1" onPress={() => setDisplay(prev => prev === "0" ? "1" : prev + "1")} />
        <CalcButton label="2" onPress={() => setDisplay(prev => prev === "0" ? "2" : prev + "2")} />
        <CalcButton label="+" variant="operator" onPress={() => {}} />
      </View>
      <View style={styles.row}>
          <CalcButton label="3" onPress={()=>{}} />
          <CalcButton label="4" onPress={()=>{}} />
          <CalcButton label="5" onPress={()=>{}} />
          <CalcButton label="-" variant="operator" onPress={()=>{}} />
      </View>
      <View style={styles.row}>
          <CalcButton label="6" onPress={()=>{}} />
          <CalcButton label="7" onPress={()=>{}} />
          <CalcButton label="8" onPress={()=>{}} />
          <CalcButton label="*" variant="operator" onPress={()=>{}} />
      </View>
      <View style={styles.row}>
          <CalcButton label="9" onPress={()=>{}} />
          <CalcButton label="." onPress={()=>{}} />
          <CalcButton label="^" variant="operator" onPress={()=>{}} />
          <CalcButton label="/" variant="operator" onPress={()=>{}} />
      </View>
      <View style={styles.row}>
          <CalcButton label="ln" variant="operator" onPress={()=>{}} />
          <CalcButton label="C" variant="operator" onPress={()=>{}} />
          <CalcButton label="CE" variant="operator" onPress={()=>{}} />
          <CalcButton label="=" variant="operator" onPress={()=>{}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "flex-end",
  },
  display: {
    color: "#fff",
    fontSize: 56,
    textAlign: "right",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
});
