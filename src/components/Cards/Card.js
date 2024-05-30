import React from 'react';
import { Card as AntdCard } from 'antd';

const Card = ({ params }) => {
    const props = Object.entries(params).map(([key, value]) => {
        return (
            <div>
                <p>{key}:</p>
                <p>{value}</p>
            </div>
        )
    })
    return (
        <AntdCard title="Card title" bordered={false} style={{ width: 300 }}>
            {props}
        </AntdCard>
    )
};

export default Card;