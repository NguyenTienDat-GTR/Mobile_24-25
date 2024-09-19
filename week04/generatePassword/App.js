import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [passwordLength, setPasswordLength] = useState(""); // State lưu độ dài mật khẩu
  const [includeLowerCase, setIncludeLowerCase] = useState(false); // State cho lowercase
  const [includeUpperCase, setIncludeUpperCase] = useState(false); // State cho uppercase
  const [includeNumbers, setIncludeNumbers] = useState(false); // State cho numbers
  const [includeSymbols, setIncludeSymbols] = useState(false); // State cho symbols
  const [password, setPassword] = useState(""); // State lưu mật khẩu được tạo

  // Hàm tạo mật khẩu
  const generatePassword = () => {
    let charset = "";
    let generatedPassword = "";

    // Chuyển đổi passwordLength sang số nguyên
    const length = parseInt(passwordLength);

    // Thêm các ký tự vào charset nếu người dùng chọn
    if (includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Nếu không có ký tự nào được chọn hoặc độ dài không hợp lệ, không tạo mật khẩu
    if (!length || charset === "") {
      setPassword("Please select options and valid length.");
      return;
    }

    // Tạo mật khẩu ngẫu nhiên
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }

    setPassword(generatedPassword); // Cập nhật state mật khẩu
  };


  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <Text style={{ color: "white", fontSize: 24 }}>
            Password Generator
          </Text>
        </View>

        <View style={styles.passwordContainer}>
          <Text style={{ color: "white", fontSize: 18 }}>
            {password ? password : "Your password will appear here"}
          </Text>
        </View>

        <View style={styles.optionContainer}>
          <View style={styles.pwlength}>
            <Text style={styles.label}>Password Length:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={passwordLength}
              onChangeText={(text) => setPasswordLength(text)} // Cập nhật state khi người dùng nhập
              placeholder="Enter length"
              maxLength={2} // Giới hạn số ký tự
            />
          </View>

          <View style={styles.switchOption}>
            <Text style={styles.label}>Include lower case letters</Text>
            <Switch
              value={includeLowerCase}
              onValueChange={(value) => setIncludeLowerCase(value)}
            />
          </View>

          <View style={styles.switchOption}>
            <Text style={styles.label}>Include upper case letters</Text>
            <Switch
              value={includeUpperCase}
              onValueChange={(value) => setIncludeUpperCase(value)}
            />
          </View>

          <View style={styles.switchOption}>
            <Text style={styles.label}>Include numbers</Text>
            <Switch
              value={includeNumbers}
              onValueChange={(value) => setIncludeNumbers(value)}
            />
          </View>

          <View style={styles.switchOption}>
            <Text style={styles.label}>Include special symbols</Text>
            <Switch
              value={includeSymbols}
              onValueChange={(value) => setIncludeSymbols(value)}
            />
          </View>
        </View>
        <View style={styles.buttoGenerate}>
          <Pressable style={styles.btn} onPress={generatePassword}>
            <Text style={styles.btnText}>GENERATE PASSWORD</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#3B3B98",
  },
  subContainer: {
    flex: 1,
    backgroundColor: "rgba(35, 35, 91, 1)",
    padding: 20,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  passwordContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(21, 21, 55, 1)",
    padding: 10,
    borderRadius: 10,
  },
  optionContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "auto",
  },
  pwlength: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  switchOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: "1.2rem",
    color: "white",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    width: "40%",
    fontSize: 16,
    textAlign: "center",
  },
  buttoGenerate: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(21, 21, 55, 1)",
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    color: "#FFF",
    padding: 10,
    borderRadius: 5,
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: "1.5rem",
    textAlign: "center",
  },
});
