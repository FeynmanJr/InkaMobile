import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  goBack: {
    alignSelf: "flex-start",
    flex: 0,
    textAlign: "left",
    height: 50,
  },
  goBackText: {
    color: "black",
    fontSize: 15,
    height: 50,
  },
  Image: {
    alignSelf: "center",
    height: 100,
    width: 150,
    marginBottom: 32,
    // margin-top: 10px;
    // margin: 16px,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 60,
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  forgotPasswordText: {
    fontSize: 22,
    fontWeight: 500,
    color: "purple",
  },
  recover: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  recoverText: {
    fontSize: 14,
    fontWeight: 400,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  sendEmail: {
    backgroundColor: "white",
    borderBottomColor: "black",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 10,
    width: 300,
    alignSelf: "center",
    marginBottom: 25,
  },
  sendEmailText: {
    color: "black",
    fontSize: 18,
  },
  sendMailButton: {
    backgroundColor: "purple",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignSelf: "center",
  },
  sendMailButtonText: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
  },
  alreadyHaveAccButton: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    width: 250,
    alignSelf: "center",
  },
  alreadyHaveAccText: {
    textAlign: "center",
    fontSize: 15,
    color: "black",
  },
  link: {
    fontSize: 14,
    color: "black",
    paddingTop: 120,
    alignItems: "flex-start",
    alignSelf: "flex-end",
  },
});
export default styles;
