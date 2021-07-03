import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        color: colors.black,
        marginBottom: 10
    },
    shippingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userDetailsWrapper: {
        flexDirection: 'row',
    },
    userDetailsText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: "#666666",
        marginBottom: 3
    },
    fillContainer: {
        width: 47,
        height: 47,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_l,
        marginRight: 15
    },
    // Payment
    payWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // Products
    products: {
        marginBottom: 15
    },
    prodWrapper: {
        width: "100%",
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    prodImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginRight: 15
    },
    prodName: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.black
    },
    prodPrice: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.black
    },
    // Summary Box
    summaryWrapper: {
        paddingBottom: 10,
        paddingHorizontal: 18,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.background_1
    },
    summaryDetailsItem: {
        paddingBottom: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: colors.gray,
    },
    ItemValue: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.black,
    },
})

export default styles