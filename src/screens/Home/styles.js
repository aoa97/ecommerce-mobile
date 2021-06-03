import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textWrapper: {

    },
    message1: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.blue
    },
    message2: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.black
    },
    iconsWrapper: {
        flexDirection: 'row',
        width: 117,
        justifyContent: 'space-between'
    },
    authContainer: {
        marginVertical: 19,
        flexDirection: 'row'
    },
    authBtnWrapper: {
        marginRight: 21,
        alignItems: 'center'
    },
    authBtn: {
        width: 38,
        height: 38,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_l,
    },
    authBtnText: {
        marginTop: 2,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
        color: colors.black,
    },
    carouselProductWrapper: {
        width: 209,
        height: 98,
        marginRight: 17
    },
    carouselOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.4)',
        borderRadius: 5
    },
    carouselProductText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 11,
        color: colors.white,
        width: '50%',
        position: 'absolute',
        bottom: 11,
        left: 14
    },
    popularContainer: {
        marginVertical: 19,
    },
    popularItemsWrapper: {
        marginTop: 10
    },
    bestItemsText: {
        marginBottom: 10
    }
})

export default styles