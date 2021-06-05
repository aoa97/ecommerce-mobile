import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 126,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 9,
        paddingVertical: 17,
        paddingLeft: 5,
        paddingRight: 20,
        flexDirection: 'row',
    },
    image: {
        width: '26%',
        height: 90,
        resizeMode: 'contain',
        marginRight: 5,
        marginTop: -12
    },
    verticalContainer: {
        justifyContent: 'space-between',
        width: '75%',
    },
    textWrapper: {
        marginBottom: 5
    },
    cartButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    removeWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    removeText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.gray,
        marginLeft: 4
    },
    name: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: colors.black,
    },
    specs: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.gray,
        marginVertical: 3
    },
    price: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color: colors.black,
    },
})

export default styles