import React, {Component} from 'react'
import HomeLayout from "../components/home-layout";
import RelatedLayout from '../components/related-layout'
import Related from '../components/related'
import LessonWrapper from '../components/lesson-wrapper'
import Header from '../components/header'
import Container from '../components/container'
import Footer from './footer';


class Home extends Component{
 
  
  render(){
    return(
      <HomeLayout>
        
        <Header courses={this.props.data.cursos}/>
        <Container>

        <RelatedLayout>
          <Related cursos={this.props.data.cursos}/>
        </RelatedLayout>
        <LessonWrapper 
          lesson={this.props.data.cursos[0].lesson}
          handleClick={this.handleClick}
          
          />

        </Container>
        <Footer/>
      </HomeLayout>
    )
  }
}

export default Home