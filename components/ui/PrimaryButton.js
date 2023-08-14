import { Pressable, StyleSheet, Text, View } from "react-native"

import color from "../../constants/colors"

const PrimaryButton = ({children,onPress}) => {
    const pressHandler = () => {
        console.log("Pressed!!!")
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
                android_ripple={{color: color.primary600}}
                onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: color.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: color.primaryWhite,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})