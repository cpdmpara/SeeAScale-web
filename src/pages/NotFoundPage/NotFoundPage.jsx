import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div style={{display:"flex", height:"100vh", alignItems:"center", flexDirection: "column", padding:"30px"}}>
            <h1>404 - 페이지를 찾을 수 없습니다</h1>
            <button style={{padding:"20px", backgroundColor:"#E2E2E2", border: "1px solid black", margin:"30px", borderRadius:"16px"}} onClick={() => navigate('/')}>
                메인으로 돌아가기
            </button>
        </div>
    );
}

export default NotFoundPage;
