import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

interface Props{
    children: React.ReactNode,
    className?: string,
}

const LinearGradientWrapper = ({ children, className}: Props) => {
    return (
        <LinearGradient
        colors={['#F4F4F4', '#89cef0', '#0A4A6D']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.linearGradient}
        className={`${className}`}
        >
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
        flex: 1,
    },
})

export default LinearGradientWrapper;
