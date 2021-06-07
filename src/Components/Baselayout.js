import Menu from './Menu'

const Baselayout = (props) => {
    return ( 
        <div className="App">
            <Menu/>
            {props.children}
        </div>
     );
}
 
export default Baselayout;