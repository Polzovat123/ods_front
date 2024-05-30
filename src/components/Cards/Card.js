import React from 'react';
import { Card as AntCard} from 'antd';

const Card = ({ params }) => {
    const props = Object.entries(params).map(([key, value]) => {
        return (
            <div key={key}>
                <p>{key}:</p>
                <p>{value}</p>
            </div>
        )
    })
    return (
        <AntCard title="Card title" bordered={false} style={{ width: 300 }}>
            {props}
        </AntCard>
    )
};

export default Card;