import { StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
    summaryWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: colors.white,
    },
    summaryDetailsItem: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.gray_l,
        borderBottomWidth: 1,
    },
    ItemTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.gray,
    },
    ItemValue: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.black,
    },
})

export default styles