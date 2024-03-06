
import './Topbar.css'
import './Home.css'


const Topbar = (props) => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">
          pEtNeT
          </span>
        </div>
       
        <div className='topright'>
          
          <button onClick={props.xxx}>Log Out</button>
         
        </div>

      </div>
    </div>
  )
}

export default Topbar