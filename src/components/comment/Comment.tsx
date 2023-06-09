import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content);

    };

    function handleLikeCommet() {
        setLikeCount((state) => {
            return state + 1
        });
    }


    return (

        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/israelsanttana.png" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Israel Santana</strong>
                            <time title='2023-04=04 19:38:30' dateTime='2023-04=04 19:38:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeCommet}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>

            </div>

        </div>
    )
}