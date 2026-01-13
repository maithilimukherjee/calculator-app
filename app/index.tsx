import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CalcButton from "../components/ui/CalcButton";
import { evaluate } from "mathjs";

export default function Index() {
  const [display, setDisplay] = useState("0");

  // numbers + decimal
  const handleNumberPress = (num: string) => {
    const parts = display.split(/[\+\-\*\/\^\(\)]/);
    const current = parts[parts.length - 1];

    if (num === "." && current.includes(".")) return;

    setDisplay(prev => (prev === "0" ? num : prev + num));
  };

  // operators + ln
  const handleOperatorPress = (op: string) => {
    setDisplay(prev => {
      if (op === "ln(") {
        return prev === "0" ? "ln(" : prev + "ln(";
      }

      const lastChar = prev[prev.length - 1];
      if ("+-*/^".includes(lastChar)) return prev;

      return prev + op;
    });
  };

  // parentheses
  const handleParenPress = (paren: "(" | ")") => {
    setDisplay(prev => (prev === "0" ? paren : prev + paren));
  };

  // constant e
  const handleEPress = () => {
    setDisplay(prev => {
      if (prev === "0") return "e";

      const lastChar = prev[prev.length - 1];
      if (/[0-9\)]/.test(lastChar)) {
        return prev + "*e";
      }
      return prev + "e";
    });
  };

  // percent
  const handlePercentPress = () => {
    setDisplay(prev => {
      const match = prev.match(/(\d+\.?\d*)$/);
      if (!match) return prev;

      const number = match[1];
      const percentValue = String(parseFloat(number) / 100);

      return prev.slice(0, prev.length - number.length) + percentValue;
    });
  };

  const handleClear = () => setDisplay("0");

  const handleClearEntry = () =>
    setDisplay(prev => prev.slice(0, -1) || "0");

  // equals (fixed)
  const handleEquals = () => {
    try {
      let expression = display;

      // remove trailing operators
      while ("+-*/^".includes(expression.slice(-1))) {
        expression = expression.slice(0, -1);
      }

      // convert ln → log
      expression = expression.replace(/ln\(/g, "log(");

      // balance parentheses
      const open = (expression.match(/\(/g) || []).length;
      const close = (expression.match(/\)/g) || []).length;

      if (open > close) {
        expression += ")".repeat(open - close);
      }

      const result = evaluate(expression);
      setDisplay(String(result));
    } catch {
      setDisplay("error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>

      <View style={styles.row}>
        <CalcButton label="0" onPress={() => handleNumberPress("0")} />
        <CalcButton label="1" onPress={() => handleNumberPress("1")} />
        <CalcButton label="2" onPress={() => handleNumberPress("2")} />
        <CalcButton label="+" variant="operator" onPress={() => handleOperatorPress("+")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="3" onPress={() => handleNumberPress("3")} />
        <CalcButton label="4" onPress={() => handleNumberPress("4")} />
        <CalcButton label="5" onPress={() => handleNumberPress("5")} />
        <CalcButton label="-" variant="operator" onPress={() => handleOperatorPress("-")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="6" onPress={() => handleNumberPress("6")} />
        <CalcButton label="7" onPress={() => handleNumberPress("7")} />
        <CalcButton label="8" onPress={() => handleNumberPress("8")} />
        <CalcButton label="*" variant="operator" onPress={() => handleOperatorPress("*")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="9" onPress={() => handleNumberPress("9")} />
        <CalcButton label="." onPress={() => handleNumberPress(".")} />
        <CalcButton label="^" variant="operator" onPress={() => handleOperatorPress("^")} />
        <CalcButton label="/" variant="operator" onPress={() => handleOperatorPress("/")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="(" variant="operator" onPress={() => handleParenPress("(")} />
        <CalcButton label=")" variant="operator" onPress={() => handleParenPress(")")} />
        <CalcButton label="e" variant="operator" onPress={handleEPress} />
        <CalcButton label="%" variant="operator" onPress={handlePercentPress} />
      </View>

      <View style={styles.row}>
        <CalcButton label="ln" variant="operator" onPress={() => handleOperatorPress("ln(")} />
        <CalcButton label="C" variant="operator" onPress={handleClear} />
        <CalcButton label="CE" variant="operator" onPress={handleClearEntry} />
        <CalcButton label="=" variant="operator" onPress={handleEquals} />
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
