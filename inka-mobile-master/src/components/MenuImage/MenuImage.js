import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const MenuImage = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
      <Image
        style={styles.headerButtonImage}
        source={require("../../../assets/icons/menu.png")}
      />
    </TouchableOpacity>
  );
};

MenuImage.propTypes = {
  onPress: PropTypes.func,
};

export default MenuImage;
