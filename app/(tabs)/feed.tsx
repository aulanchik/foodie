import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, RefreshControl } from 'react-native';
import { router } from 'expo-router';
import { PostCard } from '@/components/feed/PostCard';
import { mockPosts } from '@/data/mockData';
import { Post } from '@/types';

export default function FeedScreen() {
    const [posts, setPosts] = useState<Post[]>(mockPosts);
    const [refreshing, setRefreshing] = useState(false);

    const handleLike = (postId: string) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? {
                        ...post,
                        isLiked: !post.isLiked,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1
                    }
                    : post
            )
        );
    };

    const handleSave = (postId: string) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? {
                        ...post,
                        isSaved: !post.isSaved,
                        saved: post.isSaved ? post.saved - 1 : post.saved + 1
                    }
                    : post
            )
        );
    };

    const handleComment = (postId: string) => {
        router.push(`/post/${postId}`);
    };

    const handlePostPress = (postId: string) => {
        router.push(`/post/${postId}`);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
            >
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onPress={handlePostPress}
                        onLike={handleLike}
                        onSave={handleSave}
                        onComment={handleComment}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    scrollView: {
        flex: 1,
    },
});
