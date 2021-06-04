import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 25,
        color: colors.black,
        width: '80%'
    },
    searchBoxWrapper: {
        width: "100%",
        height: 49,
        borderRadius: 5,
        paddingLeft: 20,
        marginVertical: 20,
        backgroundColor: colors.gray_l,
        color: colors.black,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBoxInput: {
        fontFamily: 'Montserrat-Medium',
        width: "100%",
        marginLeft: 5,
        fontSize: 17
    }
})

export default styles