import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  flexible: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  body :{
    flex: 1,
    backgroundColor: "white",
    justifyContent:"center",
  },
  image :{
    height: 130,
    width: 160,
    alignSelf: "auto",
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  title: {
    fontSize: 24,
    color: "purple",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
   
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    color: "black",
    fontSize: 18,
    borderWidth: 1,
    margin: 10,
    padding: 12,
    borderRadius: 4,
    width: "80%",
    height: 48,
  },
  icon: {
    //marginRight: 50,
    //right:0,
    right:50,
    position: "absolute",
  },
  forgotPasswordContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  checkboxContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 6,
  },
  checkBox: {
    marginRight:0,
    margin:10,
    padding:0,
  },
  label :{
    fontSize: 12,
    margin: 8, 
    justifyContent: "space-between",
  },
  sifretext: {
    fontSize: 12,
    color:"blue"
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 10,
    width: "50%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginBottom: 20,
  },
  register: {
    fontSize: 12,
    color: "black",
  },
  girisText: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
    
  },
  link: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 20,
    color: "black",
  },
});

export default styles;
