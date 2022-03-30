import './deletetask.css'

const Deletetask = () => {
    const task = JSON.parse(sessionStorage.getItem('deletetask'))
    const key = JSON.parse(sessionStorage.getItem('key'))

    const rota = key.username.replace(/\s/g, '').toLowerCase()

    return (
        <form action={`http://localhost:4000/delete${rota}`} className='deletetask-component' method='post'> 
            <input name='deletetaskid' className='some' type="text" readOnly value={task.id} />
           <div className='answer'>
               <h2>Tem certeza que deseja <span className='redcolor' >DELETAR</span> a task <br /> "{task.tittletask}" ?</h2>
           </div>
           <div className='box-buttons-deletetask'>
               <input className='submit' type="submit" value="Yes" />
               <a className='cancel' href={`/plat/${key.id}`}>Cancel</a>
           </div>
        </form>
    );
}

export default Deletetask;