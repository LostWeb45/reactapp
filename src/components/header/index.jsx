import './style.css'

function Header({links}) {


    return (
        <div className="header">
            {
            links.map((link) => {
                return <h2 key={link.href}>{link.title}</h2>
            })
            }

            {/* <h2>Лучший</h2>
            <h2>счетчик</h2>
            <h2>евер</h2> */}

        
        </div>
      );
}

export default Header;