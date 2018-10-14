import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
    primary: '#fff',
    secondary: '#fff',
    dark: '#222',
    light: '#ccc',
    background: '#eee'
}

export const fonts = {
    input: 16,
    regular: 14,
    medium: 12,
    small: 11,
    tiny: 10,
};

export const metrics = {
    smallMargin: 5,
    baseMargin: 10,
    doubleBaseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    tabBarHeight: 54,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
    baseRadius: 3,
};

export const general = {
    container: {
        flex: 1,
        padding: 10,
        marginTop: metrics.statusBarHeight,
        paddingTop: metrics.statusBarHeight,
        backgroundColor: colors.background,
    },
    section: {
        margin: metrics.doubleBaseMargin,
    },
    sectionTitle: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: fonts.regular,
        alignSelf: 'center',
        marginBottom: metrics.doubleBaseMargin,
    },
};