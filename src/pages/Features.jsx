import React from 'react';
import FeatureCard from './Cards/featureCard';


const FeaturesPage = () => {
  const features = [
    {
      title: 'Online Courses',
      description: 'Access a wide range of online courses on various subjects.',
      icon: 'fa fa-graduation-cap',
    },
    {
      title: 'Interactive Lessons',
      description: 'Engage in interactive lessons with multimedia content.',
      icon: 'fa fa-chalkboard',
    },
    {
      title: 'Progress Tracking',
      description: 'Track your progress and monitor your learning journey.',
      icon: 'fa fa-chart-line',
    },
    {
      title: 'Discussion Forums',
      description: 'Participate in discussion forums to connect with other learners.',
      icon: 'fa fa-comments',
    },
    {
      title: 'Certification',
      description: 'Earn certificates upon completion of courses.',
      icon: 'fa fa-certificate',
    },
    {
        title: 'Challanging',
        description: 'Challanging courses with Varouis quizz.',
        icon: 'fa fa-certificate',
      },
  ];

  return (
    <div className="features-page" data-aos="fade-up"  data-aos-duration="1500">
      <h1 className="features-page__title">Features</h1>
      <div className="features-page__grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
