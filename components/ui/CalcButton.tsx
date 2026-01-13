import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CalcButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "number" | "operator";
};

export default function CalcButton({
  label,
  onPress,
  variant = "number",
}: CalcButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "operator" && styles.operatorButton,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === "operator" && styles.operatorText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 72,
    margin: 6,
    backgroundColor: "#1c1c1e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36,
  },
  operatorButton: {
    backgroundColor: "#2c2c2e",
  },
  text: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "500",
  },
  operatorText: {
    color: "#ff9f0a",
  },
});
