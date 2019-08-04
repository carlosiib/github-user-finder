import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const  Search =() =>  {
    const githubContext = useContext(GithubContext); 
    const alertContext = useContext(AlertContext); 
    const [text, setText] = useState('');

   
    
     const onChange = e =>{
        //el input del usuario pasa al state
        setText(e.target.value);
    }

     const onSubmit = (e) =>{
        e.preventDefault(); //no recargue la pagina
        if(text === ''){
            //cambio a useState
            //anterior: this.props.setAlert('Please enter a user', 'light')
            alertContext.setAlert('Please enter a user', 'light')
        }else{
            
            githubContext.searchUsers(text);
            
            //Modifcar el state con useState
            //anterior: this.setState({text: ''});
            setText('');
        }
    }
           
        return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <input 
                        type='text' 
                        name='text'
                        placeholder='Search Users...'
                        value={text}
                        onChange={onChange}>
                    </input>
                    <input 
                        className='btn btn-dark btn-block '
                        type='submit'
                        value='Search'
                        >

                    </input>
                </form>
                {githubContext.users.length > 0  && (<button 
                className='btn btn-light btn-block' 
                //sending the prop up (to App)
                onClick={githubContext.clearUsers}>Clear</button> )}             
            </div>
        )   
}
export default Search
