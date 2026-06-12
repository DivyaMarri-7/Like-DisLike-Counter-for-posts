# Interactive Like/Dislike Counter Web App

A modern, highly polished React application containing three independent post cards. Each card manages its own separate like/dislike counts with isolated React state (`useState`) and features vibrant, interactive hover animations styled entirely with **inline CSS** (no external styling frameworks required).

---

## ✨ Features

- 🦄 **State Isolation**: Each post card operates completely independently. Liking or disliking one post does not affect any of the other posts.
- 🔄 **Smart Voting System**:
  - Toggling: Clicking "Like" or "Dislike" multiple times toggles the action on/off (adds or removes the vote).
  - Mutual Exclusion: A user can either Like or Dislike a post. Selecting one cancels the other automatically (e.g., clicking Dislike on a liked post automatically decrements the like count and increments the dislike count).
- 🎨 **Premium Modern Design**:
  - Light mode application background for clean visual hierarchy.
  - High-end dark glassmorphic cards (`#1e1e2e` charcoal theme) that pop out from the white background.
  - Linear avatar gradients matching each post's unique theme.
  - Micro-animations: Smooth scale increases, border highlights, and box-shadow depth increases on hover.
  - Native SVG icons built directly into the JSX markup for crisp rendering at any screen resolution.

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, icons)
│   ├── cyberpunk.png       # Neon City post cover image
│   ├── nature.png          # Cabin nature retreat post cover image
│   └── space.png           # Space exploration robot post cover image
├── src/
│   ├── components/
│   │   └── PostCard.jsx    # Component representing an individual post card with its own state & styles
│   ├── App.jsx             # Main container page holding the layout, header, and grid of posts
│   ├── main.jsx            # Entry point mounting the React app
│   └── index.css           # Minimal styles reset (margins, padding, page background reset)
├── package.json            # Project dependencies and script declarations
└── README.md               # Documentation (this file!)
```

---

## ⚙️ How to Setup and Run Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or above) installed on your system.

### 2. Clone/Open Workspace
Open your terminal or command prompt inside the project folder:
```bash
cd "Counter for posts"
```

### 3. Install Dependencies
Install all required package dependencies:
```bash
npm install
```

### 4. Run the Development Server
Start the local Vite server:
```bash
npm run dev
```
Once started, open your web browser and navigate to the local link shown in your terminal, which is usually:
👉 **[http://localhost:5173/](http://localhost:5173/)**

### 5. Build for Production
To bundle the application into optimized static assets for hosting:
```bash
npm run build
```

---

## 💡 Code Explanation (For Beginners)

Here is a quick look at how the key mechanisms in this project work:

### 1. Managing Independent State (`useState`)
In [`src/components/PostCard.jsx`](file:///c:/Users/MARRIDIVYA/OneDrive/Documents/kl-assignments/Counter%20for%20posts/src/components/PostCard.jsx), each card is instantiated separately. Because state is declared *inside* the component, every card maintains its own isolated counters:
```jsx
// Declared inside PostCard component - completely isolated per card instance!
const [likes, setLikes] = useState(initialLikes);
const [dislikes, setDislikes] = useState(initialDislikes);
const [liked, setLiked] = useState(false);
const [disliked, setDisliked] = useState(false);
```

### 2. Smart Like/Dislike Toggle Logic
To prevent a user from voting multiple times and to allow switching votes, we implement conditional handlers:
```jsx
const handleLike = () => {
  if (liked) {
    setLikes(prev => prev - 1); // Remove like if clicked again
    setLiked(false);
  } else {
    setLikes(prev => prev + 1); // Add like
    setLiked(true);
    if (disliked) {
      setDislikes(prev => prev - 1); // Remove dislike if it was active
      setDisliked(false);
    }
  }
};
```

### 3. Dynamic Inline Hover Styles
Since we don't use external CSS styles, interactive hover effects are managed by tracking mouse movements using React events and updating a state variables `isCardHovered`, `isLikeHovered`, etc.:
```jsx
const [isCardHovered, setIsCardHovered] = useState(false);

const styles = {
  card: {
    backgroundColor: '#1e1e2e',
    // Dynamic styles based on hover state:
    transform: isCardHovered ? 'translateY(-6px)' : 'translateY(0)',
    boxShadow: isCardHovered ? '0 20px 32px rgba(0, 0, 0, 0.4)' : '0 12px 24px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s ease',
  }
};

return (
  <article 
    style={styles.card}
    onMouseEnter={() => setIsCardHovered(true)}
    onMouseLeave={() => setIsCardHovered(false)}
  >
    {/* Card Content */}
  </article>
);
```
