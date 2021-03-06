import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff4eb;

  background: rgb(24,71,43);
  background: url('/images/bg1.png'), linear-gradient(164deg, rgb(19,60,35) 0%, rgba(22,94,59,1) 100%);

  h1{
    font-size: 50px;
    line-height: 1.2em;
    max-width: 1200px;
    width: 90%;
    margin-bottom: 50px;
  }

  figure{
    width: 90%;
    height: 500px;
    max-width: 1200px;
    background-size: cover;
    background-repeat: none;
    background-position: center;
    border: 1px solid #fff4eb;

    margin-bottom: 50px;
  }

  @media (max-width: 750px){
    h1{
      font-size: 30px;
    }

    figure{
      height: 47vw;
    }
  }
`

export const Content = styled.div`
  width: 90%;
  max-width: 850px;
  box-sizing: border-box;

  div{
    width: 100%;
    margin: 10px 0 30px;
    iframe{
      width: 100%;
      height: 44vw;
      max-height: 445px;
      box-shadow: 0 6px 18px -3px rgb(10,35,20);
    }
  }

  h1{
    font-size: 32px;
    letter-spacing: 1px;
    line-height: 1.2em;
    margin-bottom: 40px;
    font-weight: 700;
  }

  h2{
    margin: 50px 0 20px;
    font-size: 30px;
    font-weight: 700;
    line-height: 1em;
  }

  p{
    font-size: 18px;
    line-height: 1.7em;
    margin-bottom: 20px;

    img{
      max-width: 100%;
    }
  }

  a{
    color: #ff7300;
  }

  @media (max-width:500px){
    h2{
      font-size: 22px;
    }

    p{
      font-size:15px;
      line-height:1.5em;
    }
  }
`