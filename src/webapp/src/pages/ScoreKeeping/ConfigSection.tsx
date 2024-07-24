import { useNavigate } from 'react-router-dom';

export const ConfigSection = () => {
    const navigate = useNavigate();
    return (
        <div className="row-component" data-bs-theme="dark">
            <button className="btn" onClick={()=>{navigate('/')}}>Settings</button>
            <button className="btn">Reset Question</button>
        </div>
    );
}