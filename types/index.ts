export interface User {
    id: string;
    username: string;
    displayName: string;
    avatar?: string;
    bio?: string;
    location?: string;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    isFollowing?: boolean;
    isCurrentUser?: boolean;
}

export interface Post {
    id: string;
    user: User;
    content: string;
    images: string[];
    type: 'recipe' | 'supplier_review' | 'meal_plan' | 'food_waste' | 'event';
    tags: string[];
    likes: number;
    comments: number;
    saved: number;
    createdAt: string;
    location?: string;
    isLiked?: boolean;
    isSaved?: boolean;
    recipeDetails?: RecipeDetails;
}

export interface Comment {
    id: string;
    user: User;
    content: string;
    createdAt: string;
    likes: number;
    replies?: Comment[];
}

export interface Supplier {
    id: string;
    name: string;
    type: 'farmer' | 'market' | 'restaurant' | 'bakery';
    rating: number;
    location: string;
    image?: string;
    description?: string;
    hours?: string;
    contact?: string;
}

export interface CreatePostData {
    content: string;
    images: string[];
    type: Post['type'];
    tags: string[];
    location?: string;
}

export interface RecipeDetails {
    ingredients: string[];
    instructions: string[];
    prepTime?: number;
    cookTime?: number;
    servings?: number;
}
