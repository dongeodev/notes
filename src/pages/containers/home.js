import React, {Component} from 'react'
import HomeLayout from "../components/home-layout";
import RelatedLayout from '../components/related-layout'
import Related from '../components/related'
import LessonWrapper from '../components/lesson-wrapper'

class Home extends Component{
 
  
  render(){
    return(
      <HomeLayout>
        <RelatedLayout>
          <Related cursos={this.props.data.cursos}/>
        </RelatedLayout>
        <LessonWrapper 
          lesson={this.props.data.cursos[0].lesson}
          handleClick={this.handleClick}
          
        />

      </HomeLayout>
    )
  }
}

export default Home