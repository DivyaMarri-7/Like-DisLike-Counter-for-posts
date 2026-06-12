import { useState } from 'react';
import PostCard from './components/PostCard';

function App() {
  const posts = [
    {
      id: 1,
      title: "The Neon Horizon: Living in 2088",
      text: "Strolling through the lower levels of Neo-Chiba. The rain never stops, but the holographic signs glow brighter than ever. What do you think about the flying transit system?",
      image: "/cyberpunk.png",
      author: "Sannidhi Suresh",
      date: "2 hours ago",
      avatarGradient: "linear-gradient(135deg, #a855f7, #ec4899)",
      initialLikes: 142,
      initialDislikes: 4
    },
    {
      id: 2,
      title: "Autumn Whispers in the Pacific NW",
      text: "Finally disconnected from the grid at this gorgeous A-frame cabin. Nothing but pine scent, misty lake mornings, and a fireplace that crackles all night. Pure bliss.",
      image: "/nature.png",
      author: "Elisha",
      date: "Yesterday",
      avatarGradient: "linear-gradient(135deg, #10b981, #059669)",
      initialLikes: 98,
      initialDislikes: 0
    },
    {
      id: 3,
      title: "Curiosity v2.0 Logs: Kepler-186f",
      text: "Encountered a new species of bioluminescent flora today! They react to low frequency sound waves. Taking soil samples now before the secondary moon sets.",
      image: "/space.png",
      author: "Prem Kumar",
      date: "3 days ago",
      avatarGradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      initialLikes: 356,
      initialDislikes: 12
    }
  ];

  const styles = {
    wrapper: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#111827',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      maxWidth: '800px',
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(124, 58, 237, 0.06)',
      border: '1px solid rgba(124, 58, 237, 0.2)',
      color: '#7c3aed',
      padding: '6px 16px',
      borderRadius: '30px',
      fontSize: '13px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '16px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '900',
      margin: '0 0 16px 0',
      letterSpacing: '-1.5px',
      background: 'linear-gradient(135deg, #0f0f15 30%, #7c3aed 70%, #4f46e5 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.15',
    },
    subtitle: {
      fontSize: '18px',
      color: '#4b5563',
      margin: '0 auto',
      lineHeight: '1.6',
      maxWidth: '540px',
    },
    grid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '30px',
      width: '100%',
      maxWidth: '1200px',
      marginTop: '10px',
    },
    footer: {
      marginTop: '80px',
      fontSize: '14px',
      color: '#6b7280',
      textAlign: 'center',
      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      paddingTop: '24px',
      width: '100%',
      maxWidth: '400px',
    },
    link: {
      color: '#a855f7',
      textDecoration: 'none',
      fontWeight: '500',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Header section */}
      <header style={styles.header}>
        <span style={styles.badge}>React Interactive Sandbox</span>
        <h1 style={styles.title}>Explore & Rate</h1>
        <p style={styles.subtitle}>
          Read through our curated creators' posts. Support them by leaving a Like or a Dislike.
        </p>
      </header>

      {/* Grid container of posts */}
      <main style={styles.grid}>
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            text={post.text}
            image={post.image}
            author={post.author}
            date={post.date}
            avatarGradient={post.avatarGradient}
            initialLikes={post.initialLikes}
            initialDislikes={post.initialDislikes}
          />
        ))}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Built with ❤️ using React, JSX & Inline CSS</p>
      </footer>
    </div>
  );
}

export default App;
