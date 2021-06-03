import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 60,
        flex: 1,
        backgroundColor: colors.black,
    },
    textWrapper: {
        alignItems: 'center'
    },
    subtitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.gray,
        marginTop: 8
    },
    formWrapper: {
        marginTop: 20
    },
    input: {
        width: "100%",
        height: 49,
        borderRadius: 5,
        paddingLeft: 20,
        marginTop: 28,
        backgroundColor: "#262A34",
        color: "#FFF"
    },
    forgot: {
        marginTop: 10,
        alignItems: 'flex-end',
    },
    btnWrapper: {
        width: "100%",
        height: 49,
        borderRadius: 5,
        backgroundColor:  colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28
    },
    btnText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: colors.white,
    },
    dontWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dontWrapper: {
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dontText: {
        marginRight: 5,
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.white,
    },
    dontLink: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: "#5468FF",
    },
})

export default styles