
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Post } from '@/types';

interface PostActionsProps {
    post: Post;
    onLike: (postId: string) => void;
    onSave: (postId: string) => void;
    onComment: (postId: string) => void;
}

export const PostActions: React.FC<PostActionsProps> = ({
    post,
    onLike,
    onSave,
    onComment
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.action}
                onPress={() => onLike(post.id)}
            >
                <Ionicons
                    name={post.isLiked ? 'heart' : 'heart-outline'}
                    size={20}
                    color={post.isLiked ? '#FF6B35' : '#666'}
                />
                <Text style={[styles.actionText, post.isLiked && styles.activeText]}>
                    {post.likes}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.action}
                onPress={() => onComment(post.id)}
            >
                <Ionicons name="chatbubble-outline" size={20} color="#666" />
                <Text style={styles.actionText}>{post.comments}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.action}
                onPress={() => onSave(post.id)}
            >
                <Ionicons
                    name={post.isSaved ? 'bookmark' : 'bookmark-outline'}
                    size={20}
                    color={post.isSaved ? '#FF6B35' : '#666'}
                />
                <Text style={[styles.actionText, post.isSaved && styles.activeText]}>
                    {post.saved}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        marginTop: 8,
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    actionText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    activeText: {
        color: '#FF6B35',
    },
});
