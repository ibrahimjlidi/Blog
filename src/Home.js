import { useState ,useEffect} from "react";
import BlogList from "./BlodList";
const Home = () => {
 const [blogs,setBlogs ]=useState([
  {title:'My new Blog',body:'introduction ',author:'Jlidi',id:1},
  {title:'My new Blog2',body:'introduction ',author:'Jlidi2',id:2},
  
]);
 const handleDelete =(id)=>{

   const newBlogs = blogs.filter(blog=>blog.id !== id);
   setBlogs(newBlogs);
}
useEffect(()=>{

console.log('use run');
console.log(blogs);

});
 
    return (
        <div className="home">
           <BlogList blogs={blogs } title="All Blog!!!" handleDelete={handleDelete}/>
           <BlogList blogs={blogs.filter((blog)=>blog.author === 'Jlidi2') } title=" Blog!!!"/>
        </div>
      );
}
 
export default Home;
<div className="home"></div>