import React, { useState } from 'react'
import CustomerItemCard from './components/CustomerItemCard/CustomerItemCard';
import DummyData from "../archive/dummy_data.json"
import "./Dashboard.css"

const Dashboard = () => {
    const [activeOptions, setActiveOptions] = useState(null);
    return (
        <div className="dashboard-container">
            <div className="item-container">
                <div className="item-container-head">
                    <span className="item-container-head_text">Name</span>
                    <span className="item-container-head_text">CRN</span>
                    <span className="item-container-head_text">Group</span>
                    <span className="item-container-head_text">Billing</span>
                    <span className="item-container-head_text item-container-head_text_action">
                        <span>Action</span>
                    </span>
                </div>
                <div className="item-card-container">
                    {DummyData.map((item,i) => 
                    <CustomerItemCard 
                        key={i} 
                        item={item} 
                        activeOptions={activeOptions} 
                        setActiveOptions={setActiveOptions}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
