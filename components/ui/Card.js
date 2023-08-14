import { StyleSheet, View } from "react-native"
import color from "../../constants/colors"

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',/** defaul is stretch */
        padding: 16,
        marginTop: 36,
        backgroundColor: color.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        shadowColor: color.primaryBlack,
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})