import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 16
    },
    textContainer: {
        width: '70%',
    },
    text: {
        fontSize: 18
    },
    buttonContainer: {
        width: '30%'
    }
});
