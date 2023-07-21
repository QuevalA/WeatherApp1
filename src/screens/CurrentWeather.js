import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import mainStyles from "../styles/MainStyle";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    tempStyle,
    feels,
    highLow,
    bodyWrapper,
    description,
    message,
    mainIcon,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        mainStyles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/current-background-2.jpg")}
          style={mainStyles.imageLayout}
        >
          <View style={mainStyles.screenWrapper}>
            <Feather
              name={weatherType[weatherCondition.icon]}
              size={80}
              color="#FDF6EF"
              style={mainIcon}
            />
            <Text style={tempStyle}>{temp}</Text>
            <Text style={feels}>{`Feels like ${feels_like}`}</Text>
            <RowText
              textValue1={`High: ${temp_max}`}
              textValue2={`Low: ${temp_min}`}
              bodyTextStyle={highLow}
            />
            <View style={bodyWrapper}>
              <Text style={description}>{weather[0].description}</Text>
              <Text style={message}>
                {weatherType[weatherCondition.message]}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainIcon: {
    justifyContent: "center",
    alignSelf: "center",
  },
  tempStyle: {
    fontSize: 48,
    color: "#000E2E",
    justifyContent: "center",
    alignSelf: "center",
  },
  feels: {
    fontSize: 30,
    color: "#000E2E",
    justifyContent: "center",
    alignSelf: "center",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    fontSize: 20,
    color: "#000E2E",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  description: {
    fontSize: 48,
    color: "#000E2E",
  },
  message: {
    fontSize: 30,
    color: "#000E2E",
  },
});

export default CurrentWeather;
