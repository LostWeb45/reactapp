import './style.css'


function SquidGame({squad, setSquad}) {


    return ( 
        <div className='block'>
        
            <div className={`red ${squad ? '' : 'active'}`} onClick={() => setSquad(!squad)} >Нажми на меня (Красный)</div>
            
            <div className={`green ${squad ? 'active' : ''}`} onClick={() => setSquad(!squad)}>Нажми на меня (Зеленый)</div>
        
        </div>
     );
}

export default SquidGame;