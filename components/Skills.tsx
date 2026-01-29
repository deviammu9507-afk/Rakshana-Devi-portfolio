
import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: "90%" },
        { name: "C++", level: "85%" },
        { name: "Java", level: "80%" },
        { name: "Python", level: "75%" }
      ]
    },
    {
      title: "Web & Databases",
      skills: [
        { name: "HTML", level: "95%" },
        { name: "CSS", level: "90%" },
        { name: "JavaScript", level: "80%" },
        { name: "MySQL / SQL", level: "85%" }
      ]
    },
    {
      title: "Core Fundamentals",
      skills: [
        { name: "Software Engineering", level: "85%" },
        { name: "Database Management", level: "80%" },
        { name: "Data Structures", level: "75%" },
        { name: "Communication Systems", level: "70%" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-sm font-bold tracking-[0.2em] text-violet-500 uppercase mb-16 text-center">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-4">{group.title}</h3>
            <div className="space-y-6">
              {group.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-zinc-500">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-violet-600 transition-all duration-1000"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
