
import {useNavigate } from 'react-router-dom';
import Second1 from './Second1';
function Second(){
  const userDetail = JSON.parse(localStorage.getItem('userDetail'));
  const navigate=useNavigate()
  if(!userDetail){
    navigate('/second');

    return (
    <div>
 <h1>Redirecting...</h1>
<p>Please enter your details before accessing the second page.</p>
  
 </div>
 );
    
    }
  return(
    <div className="second">
      <Second1 />
    </div>
  )
}
export default Second