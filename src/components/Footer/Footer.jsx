import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="circle">
                <div className='icon' onClick={() => navigate('/add-task')}>+</div>
            </div>
        </div>
    )

}
