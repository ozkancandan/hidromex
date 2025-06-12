import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-secondary mb-2">{project.name}</h3>
        <p className="text-gray-500 text-sm mb-1">
          <span className="font-medium text-gray-700">Lokasyon:</span> {project.location}
        </p>
        {project.capacity && (
          <p className="text-gray-500 text-sm mb-3">
            <span className="font-medium text-gray-700">Kapasite:</span> {project.capacity}
          </p>
        )}
        {project.description && (
             <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
        )}
        <button className="mt-auto w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 text-sm font-medium">
          Proje Detayları
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
