import React, {Component} from 'react'
import HomeLayout from "../components/home-layout";
import RelatedLayout from '../components/related-layout'
import Related from '../components/related'
import LessonWrapper from '../components/lesson-wrapper'
import Header from '../components/header'
import Container from '../components/container'
import Footer from '../components/footer';


class Home extends Component{
  state={
    course:this.props.data.cursos[0],
    backgroundWrapper: ['LessonWrapper', 'backgroundGit'],
    liMenu: 'git',
  }
  handleCourse = (item)=>{
    console.log(item-1)
    switch (item-1){
      case 0:
        this.setState({
          course: this.props.data.cursos[0],
          backgroundWrapper: ['LessonWrapper', 'backgroundGit'],
          liMenu: 'git',
        })
        
      break;
      case 1:
        this.setState({
          course: this.props.data.cursos[1],
          backgroundWrapper: ['LessonWrapper','backgroundAnimations'],
          liMenu: 'animations',
        })
        
      break;
      case 2:
        this.setState({
          course: this.props.data.cursos[2],
          backgroundWrapper: ['LessonWrapper','backgroundReact'],
          liMenu: 'reactjs',
        })
        
      break;
      default:
        null
    }

  }
  
  render(){
    return(
      <HomeLayout>
        
        <Header courses={this.props.data.cursos} handleCourse={this.handleCourse} />
        <Container>

        <RelatedLayout>
          <Related course={this.state.course}/>
        </RelatedLayout>
        <LessonWrapper 
          lesson={this.state.course.lesson}
          handleClick={this.handleClick}
          backgroundWrapper={this.state.backgroundWrapper}
          />

        </Container>
        <Footer/>
      </HomeLayout>
    )
  }
}

export default Home