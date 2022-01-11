import { useState, useEffect } from 'react';
import getPosts from '../services/post';

const styles = {
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    containerPost: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '30px 20px',
        height: '100%',
        backgroundColor: '#6424FF',
    },
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5px 15px',
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
    },
    autor: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#6424FF',
    },
    datePost: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#ffffff',
    },

  }

const Widget = ({limit}) => {

    const [postList, setPosts] = useState([]);

    useEffect(() => {
        let mounted = true;
        getPosts()
        .then(posts => {
            if (mounted) {
                setPosts(posts);
            }
        })
        return () => mounted = false;
    }, [postList])

    return(
        <div>
            <ul style={styles.ul}>
                {postList.slice(0,limit).map(post => <li key={post.id}>
                <div style={styles.containerPost}>
                    <div style={styles.containerText}>
                    <p>{post.text}</p>
                    <p style={styles.autor}> - {post.user.name}</p>
                    </div>
                    <p style={styles.datePost}>{post.created_at}</p>

                </div>
                </li>)}
            </ul>
        </div>
    )

};

export default Widget;