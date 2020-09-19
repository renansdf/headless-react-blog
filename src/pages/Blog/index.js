import React, { useEffect, useState } from 'react'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'
import NotFound from '../NotFound'
import { Container, PostList, Post, SocialNetworks, BlogBody, Signature } from './styles'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/index'

const Blog = () => {
  const [posts, setPosts] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'post')
      )

      console.log(response);

      if (response) {
        return setPosts(response)
      } else {
        console.warn('Posts not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [])

  if (posts) {
    console.log(posts);
    return (
      <Container>
        <Navbar />
        <BlogBody>

          <header>
            <div>
              <h1>Desenvolvedor full stack e designer de intefaces</h1>
              <p>Escrevo sobre projetos e novidades sobre jogos, aplicações web e eventos.</p>
            </div>

            <img src="images/perfil.jpg" alt="Foto de perfil" />
          </header>

          <PostList>
            {posts.results.map(post => (
              <Post key={post.id}>
                <div>
                  <h1>{post.data.title[0].text}</h1>
                  <Link to={`/post/${post.uid}`} >Leia Mais</Link>
                </div>
                <img src={post.data.cover.url} alt={post.data.cover.alt} />
                <p>{post.data.content[0].text}</p>
                <p>{post.data.content[1].text}</p>
                <Link to={`/post/${post.uid}`} >Leia Mais</Link>
                <strong>{post.data.month}</strong>
              </Post>
            ))}
          </PostList>

          <SocialNetworks>
            <a href="https://github.com/renansdf" target="_blank" rel="noopener noreferrer"><img src="images/github.png" alt="Logo do github" /></a>
            <a href="https://www.linkedin.com/in/renan-freitas-60138b2a/" target="_blank" rel="noopener noreferrer"><img src="images/linkedin.png" alt="Logo do LinkedIn" /></a>
            <a href="https://www.verticecoletivo.com.br/" target="_blank" rel="noopener noreferrer"><img src="images/vertice.png" alt="Logo da Vértice" /></a>
            <a href="mailto:renan@defreitas.xyz" target="_blank" rel="noopener noreferrer"><img src="images/mail.png" alt="Ícone de email" /></a>
          </SocialNetworks>

          <Signature />

        </BlogBody>
      </Container >
      //   <div style={{ backgroundImage: "url(" + doc.data.cover.url + ")" }} ></div>
      //   <Content className="Post">
      //     <h1>{RichText.asText(doc.data.title)}</h1>
      //     <div dangerouslySetInnerHTML={{ __html: doc.data.video.html }} />
      //     <RichText render={doc.data.content} linkResolver={linkResolver} />
      //   </Content>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Blog