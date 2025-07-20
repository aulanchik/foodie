import { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {

    const [activeTab, setActiveTab] = useState('grid');

    const renderContent = () => {
        switch (activeTab) {
            case 'reels':
                return (
                    <View style={styles.gridContainer}>
                        {[1, 2, 3, 4].map(item => (
                            <View key={`reel-${item}`} style={styles.gridItem}>
                                <View style={styles.reelPlaceholder}>
                                    <Ionicons name="play" size={36} color="white" />
                                </View>
                            </View>
                        ))}
                    </View>
                );
            case 'saved':
                return (
                    <View style={styles.gridContainer}>
                        {[1, 2, 3, 4, 5, 6].map(item => (
                            <View key={`saved-${item}`} style={styles.gridItem}>
                                <View style={[styles.imagePlaceholder, { backgroundColor: '#e0f7fa' }]} />
                            </View>
                        ))}
                    </View>
                );
            default: // grid
                return (
                    <View style={styles.gridContainer}>
                        {[1, 2, 3, 4, 5, 6].map(item => (
                            <View key={`grid-${item}`} style={styles.gridItem}>
                                <View style={styles.imagePlaceholder} />
                            </View>
                        ))}
                    </View>
                );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/women/65.jpg' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editIcon}>
                            <Ionicons name="pencil" size={18} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>Sarah Chen</Text>
                    <Text style={styles.handler}>@foodie_sarah</Text>
                    <Text style={styles.bio}>UX Designer | Photographer | Traveler</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>247</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>4.2K</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>872</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </View>
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.shareButton]}>
                        <Ionicons name="share-social" size={20} color='#ffffff' />
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Story Highlights</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {[1, 2, 3, 4].map(item => (
                            <View key={item} style={styles.highlightItem}>
                                <View style={styles.highlightCircle}>
                                    <Ionicons name="add" size={28} color="black" />
                                </View>
                                <Text style={styles.highlightText}>New</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <View style={styles.section}>
                        <View style={styles.tabBar}>
                            <TouchableOpacity
                                style={[styles.tabItem, activeTab === 'grid' && styles.tabItemActive]}
                                onPress={() => setActiveTab('grid')}
                            >
                                <Ionicons
                                    name="grid"
                                    size={24}
                                    color={activeTab === 'grid' ? 'black' : '#6c757d'}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.tabItem, activeTab === 'reels' && styles.tabItemActive]}
                                onPress={() => setActiveTab('reels')}
                            >
                                <Ionicons
                                    name="tv"
                                    size={24}
                                    color={activeTab === 'reels' ? 'black' : '#6c757d'}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.tabItem, activeTab === 'saved' && styles.tabItemActive]}
                                onPress={() => setActiveTab('saved')}
                            >
                                <Ionicons
                                    name="bookmark"
                                    size={24}
                                    color={activeTab === 'saved' ? 'black' : '#6c757d'}
                                />
                            </TouchableOpacity>
                        </View>
                        {renderContent()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1
    },
    header: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 125,
        height: 125,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#e1e4e8',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#3897f0',
        borderRadius: 20,
        padding: 6,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    handler: {
        fontSize: 16,
        color: '#666',
        marginBottom: 6
    },
    bio: {
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'center',
        paddingHorizontal: 40,
        lineHeight: 22,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        marginBottom: 16,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#6c757d',
    },
    actionsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#3897f0',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eaeaea',
        alignItems: 'center',
        marginRight: 8,
    },
    shareButton: {
        flex: 0,
        width: 50,
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff'
    },
    section: {
        marginBottom: 24,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 16,
    },
    highlightItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    highlightCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    highlightText: {
        fontSize: 13,
    },
    tabBar: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#eaeaea',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
    },
    tabItemActive: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderTopWidth: 2,
        borderColor: 'black',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    gridItem: {
        width: '33%',
        aspectRatio: 1,
        padding: 1,
    },
    imagePlaceholder: {
        flex: 1,
        backgroundColor: '#e1e4e8',
        borderRadius: 2,
    },
    reelPlaceholder: {
        flex: 1,
        backgroundColor: '#212121',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
