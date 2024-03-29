import { View, SafeAreaView } from "react-native";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthButtons } from "../../components/Auth/AuthButtons/AuthButtons";
import { AuthScreenProps } from "../../interfaces";
import { DontHaveAnAccountButton } from "../../components/Buttons/DontHaveAnAccountButton/DontHaveAnAccountButton";
import { AvatarHeading } from "../../components/Auth/AvatarHeading/AvatarHeading";
import * as AppleAuthentication from 'expo-apple-authentication';
import { AppleSignInButton } from "../../components/Auth/AppleSignInButton/AppleSignInButton";
import { useEffect, useState } from "react";


export const ChooseSignInMethodScreen = ({ navigation }: AuthScreenProps) => {
  const [appleSignInIsAvailable, setAppleSignInIsAvailable] = useState(false);
  const theme = useTheme();


  useEffect(() => {
    const checkAppleSignInAvailability = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setAppleSignInIsAvailable(isAvailable);
    };

    checkAppleSignInAvailability();
  }, []);

  const goToChooseSignUpMethod = () => {
    navigation.navigate("SignUp");
  };

  const goToSignInEmailPassword = () => {
    navigation.navigate("SignInEmailPassword");
  };

  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.colors.background, flex: 1 }]}
    >
      <View style={styles.container}>
        <AvatarHeading title="Choose a method of signing in" icon="lock"/>
        <View style={styles.buttonsView}>
          {appleSignInIsAvailable &&  <AppleSignInButton /> }
          <AuthButtons />
        </View>
        <View style={styles.alreadyHaveAccountView}>
          <DontHaveAnAccountButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonsView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  alreadyHaveAccountView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 20,
  },
});
