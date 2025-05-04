import React from 'react';
import { TeamMember } from '../utils/types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden h-60">
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl">{member.name}</h3>
        <p className="text-primary-500 font-medium">{member.role}</p>
        <p className="mt-2 text-neutral-700 text-sm">{member.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;