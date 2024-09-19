import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(141800);
  const pricePerUnit = 141800;

  // Cập nhật tạm tính và thành tiền khi số lượng thay đổi
  useEffect(() => {
    setSubtotal(quantity * pricePerUnit);
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/book.png")}
            style={styles.productImage}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>Nguyen ham tich phan va ung dung</Text>
          <Text style={styles.sellerInfo}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>{pricePerUnit.toLocaleString()} đ</Text>
          <Text style={styles.oldPrice}>145.000 đ</Text>
          <View style={styles.actionsContainer}>
            <View style={styles.quantityContainer}>
              <Pressable style={styles.quantityButton} onPress={decreaseQuantity}>
                <Text style={styles.quantityText}>-</Text>
              </Pressable>
              <Text style={styles.quantityNumber}>{quantity}</Text>
              <Pressable style={styles.quantityButton} onPress={increaseQuantity}>
                <Text style={styles.quantityText}>+</Text>
              </Pressable>
            </View>
            <View style={styles.saveForLaterContainer}>
              <Text style={styles.saveForLater}>Mua sau</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.couponContainer}>
        <Text style={styles.couponText}>Mã giảm giá đã lưu</Text>
        <Text style={styles.couponLink}>Xem tại đây</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.couponButton}>
          <Text style={styles.couponButtonText}>Mã giảm giá</Text>
        </Pressable>
        <Pressable style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </Pressable>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Tạm tính</Text>
          <Text style={styles.summaryPrice}>{subtotal.toLocaleString()} đ</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Thành tiền</Text>
          <Text style={styles.summaryPrice}>{subtotal.toLocaleString()} đ</Text>
        </View>
      </View>

      <View style={styles.orderButtonContainer}>
        <Pressable style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Tiến hành đặt hàng</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "1rem",
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: "1rem",
    gap: "2rem",
  },
  imageContainer: {
    flex: 1,
  },
  productImage: {
    width: "7rem",
    height: "9rem",
  },
  detailsContainer: {
    flex: 3,
    marginLeft: "1rem",
  },
  productTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  sellerInfo: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "0.5rem",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#E53935",
    marginBottom: "0.5rem",
  },
  oldPrice: {
    fontSize: "1rem",
    textDecorationLine: "line-through",
    color: "#777",
    marginBottom: "1rem",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
  },
  quantityButton: {
    width: "2.5rem",
    height: "2.5rem",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: "0.5rem",
  },
  quantityText: {
    fontSize: "1.5rem",
  },
  quantityNumber: {
    fontSize: "1.5rem",
    marginHorizontal: "0.5rem",
  },
  saveForLaterContainer: {
    alignItems: "flex-end",
  },
  saveForLater: {
    fontSize: "1.2rem",
    color: "#007BFF",
  },
  couponContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  couponText: {
    fontSize: "1rem",
  },
  couponLink: {
    fontSize: "1rem",
    color: "#007BFF",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  couponButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "48%",
    height: "3rem",
    borderRadius: "0.5rem",
  },
  applyButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
    width: "48%",
    height: "3rem",
    borderRadius: "0.5rem",
  },
  couponButtonText: {
    fontSize: "1rem",
  },
  applyButtonText: {
    fontSize: "1rem",
    color: "#fff",
  },
  summaryContainer: {
    marginBottom: "1rem",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  summaryText: {
    fontSize: "1rem",
  },
  summaryPrice: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  orderButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  orderButton: {
    width: "80%",
    height: "3rem",
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});
