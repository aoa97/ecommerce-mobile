import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: '35%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    ratingWrapper: {
        marginVertical: 14,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    ratingReviewsBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingReviewsBtnValue: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.gray,
        marginRight: 5
    },
    specsText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        color: colors.black,
    },
    specsWrapper: {
        marginTop: 5,
    },
    specsItem: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.gray_l,
        borderBottomWidth: 1
    },
    specsLastItem: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    specsItemTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: colors.gray,
    },
    specsItemValue: {
        width: '55%',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: colors.black,
    },
    footer: {
        height: 75,
        paddingTop: 10,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    }
})

export default styles