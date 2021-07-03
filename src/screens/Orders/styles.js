import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: "100%",
        height: 125,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderId: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: colors.black
    },
    date: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.gray
    },
    midWrapper: {
    },
    midItem: {
        flexDirection: 'row',
        width: "50%",
        justifyContent: 'space-between',
    },
    midItemTitle: {
        width: "70%",
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.gray
    },
    midItemVal: {
        width: "30%",
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.black
    },
    bottomWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonWrapper: {
        width: 82,
        height: 30,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.black
    },
})

export default styles