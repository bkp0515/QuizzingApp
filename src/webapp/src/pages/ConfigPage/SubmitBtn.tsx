import { useNavigate } from 'react-router-dom';

export const SubmitBtn = () => {
    const navigate = useNavigate();
    return (
        <button className="btn" onClick={()=>{navigate('/ScoreKeeping')}}>Create Scoresheet</button>
    );
}