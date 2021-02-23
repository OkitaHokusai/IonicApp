import './NotFound.css';
import Circle from '../images/cercuri.png';


const NotFound: React.FC = () => {
    return (
        <div className="not-found"> 
        <img src={Circle} alt="" className="notfound-bg"/>
                <div className="">
                <h1>Algo deu errado :c</h1>
                <h3>Tente reiniciar o aplicativo</h3>
                </div>
        </div>
    );
};
export default NotFound;