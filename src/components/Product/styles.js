import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    container: {
        width: 371,
        height: 94,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 9,
        paddingVertical: 17,
        paddingLeft: 5,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: '30%',
        height: 78,
        resizeMode: 'contain'
    },
    textWrapper: {
        width: "60%",
        height: "100%",
        justifyContent: 'space-between',
    },
    likeIcon: {
        alignSelf: 'flex-start'
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
    },
    price: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color: colors.black,
    },
})

export default styles