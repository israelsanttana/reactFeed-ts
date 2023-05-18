import './global.css'
import styles from './App.module.css'
import { Ssidebar } from './components/sidebar/Sidebar'
import { Header } from './components/header/Header'
import { Post } from './components/post/Post'


const posts = [
  {
    id: 0,
    author: {
      avatarUrl: 'http://github.com/israelsanttana.png',
      name: 'Israel ',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: 'Está lindoooo 👋' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2023-04-11 20:00:00')
  },

  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/israelsanttana.png',
      name: 'Israel ',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: 'ta perfeito 👋' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2023-04-11 20:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Ssidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )

          })}
        </main>
      </div>
    </div>
  )
}


