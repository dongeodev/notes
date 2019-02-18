import React, {Component} from 'react'
import HomeLayout from "../components/home-layout";
import RelatedLayout from '../components/related-layout'
import Related from '../components/related'
import LessonWrapper from '../components/lesson-wrapper'
import Header from '../components/header'
import Container from '../components/container'
import Footer from './footer';


class Home extends Component{
  state={
    course:this.props.data.cursos[0]
  }
  handleCourse = (item)=>{
    console.log(item-1)
    switch (item-1){
      case 0:
        this.setState({course: this.props.data.cursos[0]})
        
      break;
      case 1:
        return this.setState({course: this.props.data.cursos[1]})
        
      break;
      case 2:
        this.setState({course: this.props.data.cursos[2]})
        
      break;
      default:
        null
    }

  }
  
  render(){
    return(
      <HomeLayout>
        
        <Header courses={this.props.data.cursos} handleCourse={this.handleCourse}/>
        <Container>

        <RelatedLayout>
          <Related cursos={this.props.data.cursos}/>
        </RelatedLayout>
        <LessonWrapper 
          lesson={this.state.course.lesson}
          handleClick={this.handleClick}
          
          />

        </Container>
        <Footer/>
      </HomeLayout>
    )
  }
}

export default Home