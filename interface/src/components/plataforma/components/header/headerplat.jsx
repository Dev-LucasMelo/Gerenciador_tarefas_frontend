import './headerplat.css'

const Headerplat = () => {
    return (
        <header className='headerplat-component' >
            <input className='addnewtask' type="text" placeholder='Title of task' /> 
            <input className='addnewtask-button' type='submit' value='Add' />
        </header>
    );
}

export default Headerplat;