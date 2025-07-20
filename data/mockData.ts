import { User, Post, Comment, Supplier } from '@/types';

export const mockUsers: User[] = [
    {
        id: '1',
        username: 'foodie_sarah',
        displayName: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        bio: 'Local food enthusiast & sustainable cooking advocate',
        location: 'Brooklyn, NY',
        followersCount: 1240,
        followingCount: 892,
        postsCount: 156,
        isFollowing: false,
        isCurrentUser: true
    },
    {
        id: '2',
        username: 'chef_marco',
        displayName: 'Marco Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        bio: 'Professional chef sharing local ingredient secrets',
        location: 'Queens, NY',
        followersCount: 2840,
        followingCount: 456,
        postsCount: 289,
        isFollowing: true,
        isCurrentUser: false
    },
    {
        id: '3',
        username: 'green_thumb_anna',
        displayName: 'Anna Williams',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        bio: 'Urban gardener & zero-waste advocate',
        location: 'Manhattan, NY',
        followersCount: 892,
        followingCount: 1034,
        postsCount: 127,
        isFollowing: false,
        isCurrentUser: false
    }
];

export const mockPosts: Post[] = [
    {
        id: '1',
        user: mockUsers[0],
        content: "My favorite vegan lasagna recipe! It's packed with flavor and perfect for family dinners. I've been perfecting this recipe for years.",
        images: [
            'https://images.unsplash.com/photo-1522666257812-173fdc2d11fe',
            'https://images.unsplash.com/photo-1654657639692-1cccc800046c',
            'https://images.unsplash.com/photo-1625215740221-1800b95852f8'
        ],
        type: 'recipe',
        tags: ['vegan', 'healthy', 'italian', 'dinner'],
        likes: 42,
        comments: 8,
        saved: 15,
        createdAt: new Date().toISOString(),
        location: 'Brooklyn, NY',
        isLiked: false,
        isSaved: true,
        recipeDetails: {
            ingredients: [
                '9 lasagna noodles',
                '2 tbsp olive oil',
                '1 onion, diced',
                '3 cloves garlic, minced',
                '1 zucchini, diced',
                '1 carrot, grated',
                '1 bell pepper, diced',
                '24 oz marinara sauce',
                '16 oz firm tofu, crumbled',
                '2 cups spinach',
                '1 cup vegan ricotta',
                '1 cup vegan mozzarella',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C).',
                'Cook lasagna noodles according to package directions. Drain and set aside.',
                'Heat olive oil in a large skillet over medium heat. Add onion and garlic, sauté until fragrant.',
                'Add zucchini, carrot, and bell pepper. Cook for 5-7 minutes until vegetables are tender.',
                'Stir in marinara sauce, crumbled tofu, and spinach. Simmer for 10 minutes.',
                'In a 9x13 baking dish, spread a thin layer of the vegetable sauce.',
                'Place 3 lasagna noodles over the sauce. Spread half of the remaining vegetable sauce over noodles.',
                'Dollop half of the vegan ricotta over the sauce and spread gently.',
                'Repeat layers: noodles, vegetable sauce, ricotta.',
                'Top with final layer of noodles and sprinkle with vegan mozzarella.',
                'Cover with foil and bake for 25 minutes.',
                'Remove foil and bake for another 10 minutes until cheese is melted and bubbly.',
                'Let stand for 10 minutes before serving. Enjoy!'
            ],
            prepTime: 30,
            cookTime: 45,
            servings: 6
        }
    },
    {
        id: '2',
        user: mockUsers[1],
        content: 'Just discovered this incredible farmers market in Queens! Fresh organic vegetables and the vendors are so knowledgeable 🥕',
        images: [
            'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop'
        ],
        type: 'supplier_review',
        tags: ['farmersmarket', 'organic', 'queens', 'vegetables'],
        likes: 67,
        comments: 12,
        saved: 23,
        createdAt: '2024-01-14T09:30:00Z',
        location: 'Queens, NY',
        isLiked: true,
        isSaved: false
    },
    {
        id: '3',
        user: mockUsers[2],
        content: 'Meal prep Sunday using only ingredients from within 10 miles! This week: roasted root vegetables, quinoa salad, and homemade bread 🍞',
        images: [
            'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop'
        ],
        type: 'meal_plan',
        tags: ['mealprep', 'local', 'sustainable', 'quinoa'],
        likes: 34,
        comments: 5,
        saved: 18,
        createdAt: '2024-01-13T18:20:00Z',
        location: 'Manhattan, NY',
        isLiked: false,
        isSaved: true,
        recipeDetails: {
            ingredients: [
                '2 cups mixed root vegetables (carrots, parsnips, sweet potatoes)',
                '1 cup quinoa',
                '2 cups vegetable broth',
                '1/4 cup olive oil',
                '2 tbsp balsamic vinegar',
                '1 cup cherry tomatoes, halved',
                '1/2 cup cucumber, diced',
                '1/4 cup red onion, finely chopped',
                '2 cups whole wheat flour',
                '1 packet active dry yeast',
                '1 tsp salt'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C).',
                'Chop root vegetables into 1-inch cubes and toss with 2 tbsp olive oil, salt, and pepper.',
                'Roast vegetables for 25-30 minutes until tender and caramelized.',
                'Rinse quinoa thoroughly and combine with vegetable broth in a saucepan.',
                'Bring to boil, then reduce heat and simmer for 15 minutes.',
                'Fluff quinoa with fork and let cool.',
                'Combine quinoa with tomatoes, cucumber, and red onion. Dress with olive oil and balsamic vinegar.',
                'For bread: Mix flour, yeast, salt, and warm water. Knead for 10 minutes.',
                'Let dough rise for 1 hour, then shape and bake at 375°F (190°C) for 30 minutes.'
            ],
            prepTime: 45,
            cookTime: 60,
            servings: 4
        }
    },
    {
        id: '4',
        user: mockUsers[0],
        content: "Turned yesterday's leftover vegetables into this amazing stir-fry! Zero waste cooking at its finest 🌱",
        images: [
            'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1634034379073-f689b460a3fc?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=400&h=400&fit=crop'
        ],
        type: 'food_waste',
        tags: ['zerowaste', 'stirfry', 'leftovers', 'sustainable'],
        likes: 28,
        comments: 3,
        saved: 9,
        createdAt: '2024-01-12T14:15:00Z',
        location: 'Brooklyn, NY',
        isLiked: true,
        isSaved: false
    },
    {
        id: '5',
        user: mockUsers[1],
        content: "Don't miss the Brooklyn Food Festival this weekend! Amazing local vendors and cooking demonstrations 🎪",
        images: [
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop'
        ],
        type: 'event',
        tags: ['festival', 'brooklyn', 'local', 'vendors'],
        likes: 89,
        comments: 15,
        saved: 45,
        createdAt: '2024-01-11T10:00:00Z',
        location: 'Brooklyn, NY',
        isLiked: false,
        isSaved: true
    }
];

export const mockSuppliers: Supplier[] = [
    {
        id: '1',
        name: 'Green Valley Farm',
        type: 'farmer',
        rating: 4.8,
        location: 'Upstate NY',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=200&h=200&fit=crop',
        description: 'Organic vegetables and herbs grown with sustainable practices',
        hours: 'Mon-Sat 8AM-6PM',
        contact: '(555) 123-4567'
    },
    {
        id: '2',
        name: 'Borough Market',
        type: 'market',
        rating: 4.6,
        location: 'Queens, NY',
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=200&h=200&fit=crop',
        description: 'Local farmers market with fresh produce and artisanal foods',
        hours: 'Sat-Sun 9AM-4PM',
        contact: 'info@boroughmarket.com'
    },
    {
        id: '3',
        name: 'Artisan Bakery',
        type: 'bakery',
        rating: 4.9,
        location: 'Brooklyn, NY',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop',
        description: 'Fresh baked bread and pastries using local ingredients',
        hours: 'Daily 6AM-8PM',
        contact: '(555) 987-6543'
    },
    {
        id: '4',
        name: 'Farm to Table Restaurant',
        type: 'restaurant',
        rating: 4.7,
        location: 'Manhattan, NY',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop',
        description: 'Seasonal menu featuring ingredients from local farms',
        hours: 'Tue-Sun 5PM-10PM',
        contact: 'reservations@farmtotable.com'
    }
];

export const mockComments: Comment[] = [
    {
        id: '1',
        user: mockUsers[1],
        content: 'This looks absolutely delicious! Do you have the recipe?',
        createdAt: '2024-01-15T11:00:00Z',
        likes: 5
    },
    {
        id: '2',
        user: mockUsers[2],
        content: 'Green Valley Farm is amazing! I get my vegetables there too.',
        createdAt: '2024-01-15T11:30:00Z',
        likes: 3
    },
    {
        id: '3',
        user: mockUsers[0],
        content: 'Thanks! I\'ll share the recipe in my next post 😊',
        createdAt: '2024-01-15T12:00:00Z',
        likes: 2
    }
];
