import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { PostActions } from './PostActions';
import { Post } from '@/types';

interface PostCardProps {
    post: Post;
    onPress: (postId: string) => void;
    onLike: (postId: string) => void;
    onSave: (postId: string) => void;
    onComment: (postId: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
    post,
    onPress,
    onLike,
    onSave,
    onComment
}) => {
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

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(post.id)}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
                    <View style={styles.userDetails}>
                        <Text style={styles.displayName}>{post.user.displayName}</Text>
                        <Text style={styles.username}>@{post.user.username}</Text>
                    </View>
                    <View style={styles.typeContainer}>
                        <Ionicons name={getTypeIcon(post.type)} size={16} color="#FF6B35" />
                        <Text style={styles.typeLabel}>{getTypeLabel(post.type)}</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.content}>{post.content}</Text>

            {post.images.length > 0 && (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: post.images[0] }} style={styles.image} />
                </View>
            )}

            {post.tags.length > 0 && (
                <View style={styles.tagsContainer}>
                    {post.tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>#{tag}</Text>
                        </View>
                    ))}
                </View>
            )}

            <PostActions
                post={post}
                onLike={onLike}
                onSave={onSave}
                onComment={onComment}
            />

            <View style={styles.footer}>
                <Text style={styles.timeAgo}>
                    {new Date(post.createdAt).toLocaleDateString()}
                </Text>
                {post.location && (
                    <View style={styles.locationContainer}>
                        <Entypo name="location-pin" size={18} color="#666" />
                        <Text style={styles.locationText}>{post.location}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    userDetails: {
        flex: 1,
    },
    displayName: {
        fontSize: 16,
        fontWeight: '600',
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
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    typeLabel: {
        fontSize: 12,
        color: '#FF6B35',
        marginLeft: 4,
        fontWeight: '500',
    },
    content: {
        fontSize: 16,
        lineHeight: 22,
        color: '#333',
        marginBottom: 12,
    },
    imageContainer: {
        marginBottom: 12,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 12,
    },
    tag: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 8,
        marginBottom: 4,
    },
    tagText: {
        fontSize: 12,
        color: '#666',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    timeAgo: {
        fontSize: 12,
        color: '#999',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    locationText: {
        marginLeft: 4,
        color: '#666',
        fontSize: 14,
    },
});
