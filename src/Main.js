
import Posts from './Posts';


const Main = (props) => {
    return(

         <div className='container'>
         
            <Posts posts={props.data.posts}/>
        </div>
       
    )
};
export default Main;
