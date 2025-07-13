import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="text-lg font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
