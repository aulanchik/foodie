import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    style
}) => {
    const buttonStyle = [
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        style
    ];

    const textStyle = [
        styles.text,
        styles[`${variant}Text`],
        disabled && styles.disabledText
    ];

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: '#FF6B35',
    },
    secondary: {
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    ghost: {
        backgroundColor: 'transparent',
    },
    small: {
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    medium: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    large: {
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontWeight: '600',
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: '#333',
    },
    ghostText: {
        color: '#FF6B35',
    },
    disabledText: {
        color: '#999',
    },
});
