import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import Icon from "@expo/vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import Profiles from "../components/Profiles";
import Messages from "../components/Messages";

const Chat = (props) => {
  const URL = "https://api.github.com/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const pan = useRef(new Animated.ValueXY()).current;
  const list = useRef(new Animated.ValueXY()).current;

  useEffect(function () {
    const getData = async () => {
      const resp = await fetch(URL);
      const data = await resp.json();
      setData(data);
      setLoading(false);
    };
    getData();

    Animated.timing(pan, {
      toValue: { x: -400, y: 0 },
      delay: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(list, {
      toValue: { x: -0, y: 300 },
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={["#ff00ff", "#cc00cc", "#b000af"]}
      style={styles.gradient}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Chat</Text>
        <Icon name="add" color="#fff" size={30} />
      </View>
      <ScrollView
        style={styles.proContainer}
        horizontalshowsHorizontalIndicator={false}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Animated.View style={[pan.getLayout(), styles.card]}>
            {data.map((item, index) => (
              <Profiles
                key={item.id}
                username={item.login}
                uri={item.avatar_uri}
              />
            ))}
          </Animated.View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};
export default Chat;

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
  },
});
