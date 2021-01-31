import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
     <QuizBackground backgroundImage={db.bg}>
         <QuizContainer>
             <Widget>
                  <Widget.Header>
                      <h1>London Calling</h1>
                  </Widget.Header>
                 <Widget.Content>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea harum, repellat ullam cupiditate eligendi pariatur ipsa perferendis quia, quos similique, reiciendis sit quidem a ducimus consectetur. Eligendi accusantium maxime numquam?</p>
                 </Widget.Content>
                 
             </Widget>

              <Widget>
                  <Widget.Header>
                      <h1>Quizes da Galera</h1>
                  </Widget.Header>
                  <Widget.Content>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea harum, repellat ullam cupiditate eligendi pariatur ipsa perferendis quia, quos similique, reiciendis sit quidem a ducimus consectetur. Eligendi accusantium maxime numquam?</p>
                  </Widget.Content>
              </Widget>
              <Footer />
         </QuizContainer>
         <GitHubCorner projectUrl='https://github.com/drix182'></GitHubCorner>

      </QuizBackground>
  )
}
