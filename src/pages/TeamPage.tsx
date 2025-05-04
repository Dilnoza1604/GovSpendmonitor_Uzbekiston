import React from 'react';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/mockData';

const TeamPage = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Meet the dedicated individuals working to make public procurement
            data in Uzbekistan more transparent and accessible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
            We're looking for passionate individuals who share our vision of
            transparency and accountability. If you have skills in data analysis,
            development, or design, we'd love to hear from you.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;