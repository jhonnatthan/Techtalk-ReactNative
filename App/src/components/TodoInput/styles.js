import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 20
    },
    inputContainer: {
        width: '80%',
        height: '100%',
    },
    input: {
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.03)'
    }
});
