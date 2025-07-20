# foodie

`foodie` is a mobile application built with Expo and React Native, designed as a social platform for food lovers. It allows users to share and discover recipes, review local food suppliers, create meal plans, and find food-related events. The application features a dynamic feed, detailed post views, and comprehensive user profiles.

## Key Features

- **Interactive Feed**: Browse a scrollable feed of posts from different users.
- **Detailed Post View**: Tap on any post to see full details, including multi-image galleries, recipe instructions, ingredients, and tags.
- **Multiple Post Types**: Create different kinds of content, including recipes, supplier reviews, meal plans, food waste reduction tips, and events.
- **User Engagement**: Like, comment on, and save posts to interact with the community.
- **User Profiles**: View user profiles with their posts, stats (followers, following), bio, and story highlights.
- **Discovery**: A dedicated screen to find local suppliers and trending recipes.
- **Responsive Layout**: The post detail view adapts its layout for different screen sizes, displaying ingredients in multiple columns on larger devices.

## Tech Stack

- **Framework**: React Native & Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **UI Components**: Custom components built with React Native, styled using `StyleSheet`.
- **Icons**: `@expo/vector-icons` (Ionicons, Entypo)
- **Data**: The application currently uses mock data for demonstration purposes.

## Project Structure

The repository is organized into the following main directories:

-   `app/`: Contains all the screens and navigation logic, structured using Expo Router's file-based routing.
    -   `(tabs)/`: Defines the main tab navigation layout (Feed, Discover, Profile).
    -   `post/`: Contains the dynamic route for the post detail screen.
-   `components/`: Reusable UI components.
    -   `common/`: General-purpose components like `Button`.
    -   `feed/`: Components specific to the feed, such as `PostCard` and `PostActions`.
-   `data/`: Includes mock data for users, posts, and suppliers.
-   `types/`: TypeScript type definitions for the application's data models.
-   `constants/`: Global constants like color schemes.
-   `assets/`: Static assets like fonts and images.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

-   Node.js (LTS version recommended)
-   [pnpm](https://pnpm.io/installation)
-   [Expo Go app](https://expo.dev/expo-go) on your mobile device (for testing on iOS/Android)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/aulanchik/foodie.git
    cd foodie
    ```

2.  Install the dependencies using pnpm:
    ```bash
    pnpm install
    ```

### Running the Application

Once the dependencies are installed, you can run the application using the following scripts:

```bash
# Start the Expo development server
pnpm start

# Start the app on Android
pnpm android

# Start the app on iOS
pnpm ios

# Start the app in a web browser
pnpm web
```

After running `pnpm start`, you can scan the QR code with the Expo Go app on your phone to launch the application.
