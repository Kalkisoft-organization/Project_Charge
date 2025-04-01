import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Transaction = () => {

    const navigation = useNavigation();

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const years = [2020, 2021, 2022, 2023, 2024, 2025];

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const transactions = {
        '2024': {
            'March': [{ id: 1, amount: 500, date: '16 March 2024' }]
        }
    };

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerText}>Transaction</Text>
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.yearContainer} >
                {years.map(year => (
                    <TouchableOpacity
                        key={year}
                        style={[styles.yearButton, selectedYear === year && styles.selectedYear]}
                        onPress={() => {
                            setSelectedYear(year);
                            setSelectedMonth(null);
                        }}>
                        <Text style={[styles.yearText, selectedYear === year && styles.selectedYearText]}>{year}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {selectedYear && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.monthContainer}>
                    {months.map(month => (
                        <TouchableOpacity
                            key={month}
                            style={[styles.monthButton, selectedMonth === month && styles.selectedMonth]}
                            onPress={() => setSelectedMonth(month)}>
                            <Text style={[styles.monthText, selectedMonth === month && styles.selectedMonthText]}>{month}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}

            <View style={styles.transactionContainer}>
                {selectedMonth && transactions[selectedYear]?.[selectedMonth] ? (
                    transactions[selectedYear][selectedMonth].map(txn => (
                        <Text key={txn.id} style={styles.transactionText}>{`₹${txn.amount} - ${txn.date}`}</Text>
                    ))
                ) : (
                    <View style={styles.noTransactionContainer}>
                        <Image source={require('../../assets/coin.png')} style={styles.noTransactionImage} />
                        <Text style={styles.noTransactionText}>Uh-oh! No transactions for {selectedMonth || 'this period'}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    },

    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "10%",
        marginBottom: 30,
    },
    headerText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },

    yearContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },

    yearButton: {
        padding: 10,
        backgroundColor: '#DDD',
        marginRight: 6,
        borderRadius: 4,
        width: 85,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
    },

    selectedYear: {
        backgroundColor: '#1A34BD'
    },

    yearText: {
        fontSize: 14,
        color: '#000'
    },

    selectedYearText: {
        color: '#FFF'
    },

    monthContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },

    monthButton: {
        padding: 10,
        backgroundColor: '#ddd',
        marginRight: 5,
        borderRadius: 4,
        width: 85,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
    },

    selectedMonth: {
        backgroundColor: '#1A34BD'
    },

    monthText: {
        fontSize: 14,
        color: '#000'
    },

    selectedMonthText: {
        color: '#FFF'
    },

    transactionContainer: {
        alignItems: 'center',
    },

    transactionText: {
        fontSize: 16,
        marginTop : 30,
    },

    noTransactionContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },

    noTransactionImage: {
        width: 240,
        height: 180,
        marginBottom: 10,
        marginTop : 50,

    },

    noTransactionText: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center'
    }
});

export default Transaction;
