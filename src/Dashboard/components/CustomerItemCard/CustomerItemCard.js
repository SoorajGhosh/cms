import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs";
import "./CustomerItemCard.css";

const CustomerItemCard = ({item,activeOptions, setActiveOptions}) => {
    
    const openOptionsFn = () => {
        if (activeOptions!==item.id){
            setActiveOptions(item.id)
        } else {
            setActiveOptions(null)
        }
    }

    return (
        <div className="item-card">
            <div className="item-card_details item-card_details_name">
                <div className="item-card_details_name_logo">
                    <img alt="image" src={process.env.PUBLIC_URL + "/assets/profile.jpg"}/>
                </div>
                <div className="item-card_details_name_name">{item.name}</div>
                <div className="item-card_details_name_email">{item.email}</div>
            </div>
            <div className="item-card_details item-card_details_crn">
                <span className="item-card_details_value">{item.crn}</span>
            </div>
            <div className="item-card_details item-card_details_group">
                <span className="item-card_details_value">{item.group}</span>
            </div>
            <div className="item-card_details item-card_details_billing">
                <span className="item-card_details_value">{item.billing}</span>
            </div>
            <div className="item-card_details item-card_details_action">
                {(activeOptions===item.id) &&
                    <div className="item-card_details_action_modal">
                        <span className="item-card_details_action_option">See Details</span>
                        <span className="item-card_details_action_option">View History</span>
                        <span className="item-card_details_action_option">Mark important</span>
                        <span className="item-card_details_action_option">Copy Details</span>
                        <span className="item-card_details_action_option item-card_details_action_option_remove">Remove Transaction</span>
                    </div>
                }
                <span 
                    className="item-card_details_value item-card_details_action_value"
                    onClick={openOptionsFn}
                >
                    <BsThreeDotsVertical/>
                </span>
            </div>
        </div>
    )
}

export default CustomerItemCard
