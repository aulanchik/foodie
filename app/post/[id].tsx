import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { mockPosts } from '@/data/mockData';
import { Post } from '@/types';

const getTypeIcon = (type: Post['type']) => {
    switch (type) {
        case 'recipe': return 'restaurant';
        case 'supplier_review': return 'storefront';
        case 'meal_plan': return 'calendar';
        case 'food_waste': return 'leaf';
        case 'event': return 'calendar-outline';
        default: return 'restaurant';
    }
};

const getTypeLabel = (type: Post['type']) => {
    switch (type) {
        case 'recipe': return 'Recipe';
        case 'supplier_review': return 'Supplier Review';
        case 'meal_plan': return 'Meal Plan';
        case 'food_waste': return 'Food Waste Win';
        case 'event': return 'Event';
        default: return 'Post';
    }
};

export default function PostDetailScreen() {
    const { id } = useLocalSearchParams();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const { width: screenWidth } = useWindowDimensions();
    const [columnCount, setColumnCount] = useState(1);

    const post = mockPosts.find(p => p.id === id);

    useEffect(() => {
        setColumnCount(screenWidth > 600 ? 2 : 1);
    }, [screenWidth]);

    if (!post) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.notFoundText}>Post not found</Text>
            </View>
        );
    }

    const renderRecipeDetails = () => {
        if (!post.recipeDetails) return null;

        // Split ingredients into columns if needed
        const ingredientsColumns = [];
        if (columnCount > 1) {
            const midPoint = Math.ceil(post.recipeDetails.ingredients.length / columnCount);
            for (let i = 0; i < columnCount; i++) {
                const start = i * midPoint;
                const end = start + midPoint;
                ingredientsColumns.push(post.recipeDetails.ingredients.slice(start, end));
            }
        } else {
            ingredientsColumns.push(post.recipeDetails.ingredients);
        }

        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingredients</Text>

                <View style={styles.ingredientsGrid}>
                    {ingredientsColumns.map((column, columnIndex) => (
                        <View key={`column-${columnIndex}`} style={[
                            styles.ingredientColumn,
                            columnIndex < columnCount - 1 && styles.columnSpacing
                        ]}>
                            {column.map((ingredient, index) => (
                                <View key={`ingredient-${columnIndex}-${index}`} style={styles.ingredientItem}>
                                    <View style={styles.bulletPoint} />
                                    <Text style={styles.ingredientText}>{ingredient}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Instructions</Text>
                {post.recipeDetails.instructions.map((step, index) => (
                    <View key={`step-${index}`} style={styles.stepItem}>
                        <Text style={styles.stepNumber}>{index + 1}.</Text>
                        <Text style={styles.stepText}>{step}</Text>
                    </View>
                ))}

                {post.recipeDetails.prepTime && (
                    <View style={styles.detailsContainer}>
                        {post.recipeDetails.prepTime && (
                            <View style={styles.detailItem}>
                                <Ionicons name="time-outline" size={20} color="#FF6B35" />
                                <Text style={styles.detailText}>Prep: {post.recipeDetails.prepTime} min</Text>
                            </View>
                        )}
                        {post.recipeDetails.cookTime && (
                            <View style={styles.detailItem}>
                                <Ionicons name="time" size={20} color="#FF6B35" />
                                <Text style={styles.detailText}>Cook: {post.recipeDetails.cookTime} min</Text>
                            </View>
                        )}
                        {post.recipeDetails.servings && (
                            <View style={styles.detailItem}>
                                <Ionicons name="restaurant-outline" size={20} color="#FF6B35" />
                                <Text style={styles.detailText}>Serves: {post.recipeDetails.servings}</Text>
                            </View>
                        )}
                    </View>
                )}
            </View>
        );
    };

    const renderImageGallery = () => {
        if (post.images.length <= 0) return null;

        return (
            <View style={styles.galleryContainer}>
                <Image
                    source={{ uri: post.images[activeImageIndex] }}
                    style={styles.mainImage}
                    resizeMode="cover"
                />

                <FlatList
                    horizontal
                    data={post.images}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setActiveImageIndex(index)}
                            activeOpacity={0.8}
                        >
                            <Image
                                source={{ uri: item }}
                                style={[
                                    styles.thumbnail,
                                    index === activeImageIndex && styles.activeThumbnail
                                ]}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.thumbnailContainer}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
                    <View style={styles.userDetails}>
                        <Text style={styles.displayName}>{post.user.displayName}</Text>
                        <Text style={styles.username}>@{post.user.username}</Text>
                    </View>
                </View>

                <View style={styles.typeContainer}>
                    <Ionicons name={getTypeIcon(post.type)} size={16} color="#FF6B35" />
                    <Text style={styles.typeLabel}>{getTypeLabel(post.type)}</Text>
                </View>
            </View>

            <Text style={styles.content}>{post.content}</Text>

            {renderImageGallery()}

            {renderRecipeDetails()}

            {post.tags.length > 0 && (
                <View style={styles.tagsContainer}>
                    {post.tags.map((tag, index) => (
                        <View key={`tag-${index}`} style={styles.tag}>
                            <Text style={styles.tagText}>#{tag}</Text>
                        </View>
                    ))}
                </View>
            )}

            {post.location && (
                <View style={styles.locationContainer}>
                    <Entypo name="location-pin" size={18} color="#666" />
                    <Text style={styles.locationText}>{post.location}</Text>
                </View>
            )}

            <View style={styles.footer}>
                <Text style={styles.timeAgo}>
                    Posted on {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    notFoundText: {
        fontSize: 18,
        color: '#666',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    userDetails: {
        flex: 1,
    },
    displayName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    username: {
        fontSize: 14,
        color: '#666',
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF5F2',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 16,
    },
    typeLabel: {
        fontSize: 14,
        color: '#FF6B35',
        marginLeft: 4,
        fontWeight: '500',
    },
    content: {
        fontSize: 18,
        lineHeight: 26,
        color: '#333',
        marginBottom: 20,
    },
    galleryContainer: {
        marginBottom: 20,
    },
    mainImage: {
        width: '100%',
        height: 300,
        borderRadius: 12,
        marginBottom: 12,
    },
    thumbnailContainer: {
        paddingVertical: 8,
    },
    thumbnail: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    activeThumbnail: {
        borderWidth: 2,
        borderColor: '#FF6B35',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    tag: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        fontSize: 14,
        color: '#666',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
    },
    locationText: {
        marginLeft: 6,
        color: '#666',
        fontSize: 16,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 16,
    },
    timeAgo: {
        fontSize: 14,
        color: '#999',
    },
    section: {
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    ingredientsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    ingredientColumn: {
        flex: 1,
    },
    columnSpacing: {
        marginRight: 16,
    },
    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bulletPoint: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF6B35',
        marginTop: 8,
        marginRight: 12,
    },
    ingredientText: {
        fontSize: 16,
        flex: 1,
        color: '#444',
        lineHeight: 24,
    },
    stepItem: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'flex-start',
    },
    stepNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
        color: '#FF6B35',
    },
    stepText: {
        fontSize: 16,
        flex: 1,
        color: '#444',
        lineHeight: 24,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
    },
    detailItem: {
        alignItems: 'center',
    },
    detailText: {
        marginTop: 4,
        fontSize: 14,
        color: '#666',
    },
});
