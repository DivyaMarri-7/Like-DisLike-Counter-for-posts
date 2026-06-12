import { useState } from 'react';

export default function PostCard({ title, text, image, author, date, avatarGradient, initialLikes = 0, initialDislikes = 0 }) {
  // Local state for counts and user actions
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // States for handling hover effects via inline CSS
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isLikeHovered, setIsLikeHovered] = useState(false);
  const [isDislikeHovered, setIsDislikeHovered] = useState(false);

  // Handler for Like action
  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1);
      setLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setLiked(true);
      // If user had disliked, remove dislike
      if (disliked) {
        setDislikes(prev => prev - 1);
        setDisliked(false);
      }
    }
  };

  // Handler for Dislike action
  const handleDislike = () => {
    if (disliked) {
      setDislikes(prev => prev - 1);
      setDisliked(false);
    } else {
      setDislikes(prev => prev + 1);
      setDisliked(true);
      // If user had liked, remove like
      if (liked) {
        setLikes(prev => prev - 1);
        setLiked(false);
      }
    }
  };

  // Inline CSS Styles object
  const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1e1e2e',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '24px',
      color: '#f3f4f6',
      textAlign: 'left',
      boxShadow: isCardHovered 
        ? '0 20px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(192, 132, 252, 0.1)' 
        : '0 12px 24px rgba(0, 0, 0, 0.25)',
      transform: isCardHovered ? 'translateY(-6px)' : 'translateY(0)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '380px',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    avatar: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: avatarGradient || 'linear-gradient(135deg, #c084fc, #6366f1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#ffffff',
      marginRight: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    meta: {
      display: 'flex',
      flexDirection: 'column',
    },
    authorName: {
      fontWeight: '600',
      fontSize: '15px',
      color: '#f3f4f6',
      margin: 0,
      lineHeight: '1.2',
    },
    postDate: {
      fontSize: '12px',
      color: '#9ca3af',
      margin: '4px 0 0 0',
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '16px',
      height: '180px',
      boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    postImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    title: {
      fontSize: '18px',
      fontWeight: '700',
      margin: '0 0 8px 0',
      color: '#ffffff',
      letterSpacing: '-0.3px',
      lineHeight: '1.3',
    },
    bodyText: {
      fontSize: '14px',
      color: '#d1d5db',
      lineHeight: '1.6',
      margin: '0 0 20px 0',
      flexGrow: 1,
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      paddingTop: '16px',
      marginTop: 'auto',
    },
    button: (isActive, isHovered, type) => {
      let bg = 'rgba(255, 255, 255, 0.05)';
      let border = '1px solid rgba(255, 255, 255, 0.08)';
      let color = '#d1d5db';

      if (isActive) {
        if (type === 'like') {
          bg = 'linear-gradient(135deg, #a855f7, #6366f1)';
          border = '1px solid transparent';
          color = '#ffffff';
        } else {
          bg = 'linear-gradient(135deg, #f59e0b, #ef4444)';
          border = '1px solid transparent';
          color = '#ffffff';
        }
      } else if (isHovered) {
        bg = 'rgba(255, 255, 255, 0.12)';
        border = '1px solid rgba(255, 255, 255, 0.15)';
        color = '#ffffff';
      }

      return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '10px 16px',
        borderRadius: '30px',
        border,
        background: bg,
        color,
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        outline: 'none',
        flex: 1,
        boxShadow: isActive ? '0 4px 12px rgba(99, 102, 241, 0.3)' : 'none',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
      };
    },
    badge: {
      background: 'rgba(0, 0, 0, 0.2)',
      padding: '2px 8px',
      borderRadius: '20px',
      fontSize: '12px',
    }
  };

  // Extract author initials for avatar
  const initials = author ? author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'U';

  return (
    <article 
      style={styles.card}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.avatar}>{initials}</div>
        <div style={styles.meta}>
          <h3 style={styles.authorName}>{author}</h3>
          <p style={styles.postDate}>{date}</p>
        </div>
      </header>

      {/* Image */}
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.postImg} />
      </div>

      {/* Content */}
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.bodyText}>{text}</p>

      {/* Actions */}
      <div style={styles.actions}>
        {/* Like Button */}
        <button
          type="button"
          style={styles.button(liked, isLikeHovered, 'like')}
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
          onMouseEnter={() => setIsLikeHovered(true)}
          onMouseLeave={() => setIsLikeHovered(false)}
          aria-label="Like post"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          <span>Like</span>
          <span style={styles.badge}>{likes}</span>
        </button>

        {/* Dislike Button */}
        <button
          type="button"
          style={styles.button(disliked, isDislikeHovered, 'dislike')}
          onClick={(e) => {
            e.stopPropagation();
            handleDislike();
          }}
          onMouseEnter={() => setIsDislikeHovered(true)}
          onMouseLeave={() => setIsDislikeHovered(false)}
          aria-label="Dislike post"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={disliked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm12-7h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
          </svg>
          <span>Dislike</span>
          <span style={styles.badge}>{dislikes}</span>
        </button>
      </div>
    </article>
  );
}
