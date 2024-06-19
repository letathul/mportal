import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SamlpeDataService {
  constructor() {}

  sampledata = [
    {
      id: '1',
      title: 'Frontend Developer',
      companyName: 'Tech Innovators',
      location: 'New York, NY',
      workType: 'hybrid',
      jobType: 'full-time',
      jobCategory: {
        id: '1',
        name: 'Software Development',
      },
      educationQualification: "Bachelor's in Computer Science",
      jobDescription: 'Develop and maintain web applications.',
      payScale: '$80,000 - $100,000',
      skills: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    },
    {
      id: '2',
      title: 'Remote Nurse',
      companyName: 'Health Plus',
      location: 'San Francisco, CA',
      workType: 'remote',
      jobType: 'part-time',
      jobCategory: {
        id: '2',
        name: 'Healthcare',
      },
      educationQualification: "Bachelor's in Nursing",
      jobDescription: 'Provide remote healthcare services.',
      payScale: '$60,000 - $80,000',
      skills: ['Nursing', 'Telehealth', 'Patient Care'],
    },
    {
      id: '3',
      title: 'High School Teacher',
      companyName: 'EduCorp',
      location: 'Chicago, IL',
      workType: 'onsite',
      jobType: 'permanent',
      jobCategory: {
        id: '3',
        name: 'Education',
      },
      educationQualification: "Master's in Education",
      jobDescription: 'Teach and develop curriculum for high school students.',
      payScale: '$50,000 - $70,000',
      skills: ['Teaching', 'Curriculum Development', 'Classroom Management'],
    },
    {
      id: '4',
      title: 'Financial Analyst',
      companyName: 'Finance Pros',
      location: 'Boston, MA',
      workType: 'hybrid',
      jobType: 'full-time',
      jobCategory: {
        id: '4',
        name: 'Finance',
      },
      educationQualification: "Bachelor's in Finance",
      jobDescription: 'Analyze financial data and prepare reports.',
      payScale: '$70,000 - $90,000',
      skills: ['Financial Analysis', 'Excel', 'Data Analysis'],
    },
    {
      id: '5',
      title: 'Marketing Specialist',
      companyName: 'Marketing Gurus',
      location: 'Seattle, WA',
      workType: 'remote',
      jobType: 'part-time',
      jobCategory: {
        id: '5',
        name: 'Marketing',
      },
      educationQualification: "Bachelor's in Marketing",
      jobDescription: 'Plan and execute marketing campaigns.',
      payScale: '$50,000 - $70,000',
      skills: ['SEO', 'Content Marketing', 'Social Media'],
    },
    {
      id: '6',
      title: 'Store Manager',
      companyName: 'Retail Giants',
      location: 'Los Angeles, CA',
      workType: 'onsite',
      jobType: 'full-time',
      jobCategory: {
        id: '6',
        name: 'Retail',
      },
      educationQualification: 'High School Diploma',
      jobDescription: 'Manage store operations and staff.',
      payScale: '$40,000 - $60,000',
      skills: ['Customer Service', 'Inventory Management', 'Sales'],
    },
    {
      id: '7',
      title: 'Graphic Designer',
      companyName: 'Creative Minds',
      location: 'Austin, TX',
      workType: 'hybrid',
      jobType: 'permanent',
      jobCategory: {
        id: '7',
        name: 'Design',
      },
      educationQualification: "Bachelor's in Graphic Design",
      jobDescription: 'Create visual content for marketing materials.',
      payScale: '$50,000 - $70,000',
      skills: ['Graphic Design', 'Photoshop', 'Illustrator'],
    },
    {
      id: '8',
      title: 'Mobile Developer',
      companyName: 'Tech Innovators',
      location: 'New York, NY',
      workType: 'remote',
      jobType: 'full-time',
      jobCategory: {
        id: '1',
        name: 'Software Development',
      },
      educationQualification: "Bachelor's in Computer Science",
      jobDescription: 'Develop mobile applications.',
      payScale: '$90,000 - $110,000',
      skills: ['Java', 'Kotlin', 'Android'],
    },
    {
      id: '9',
      title: 'Renewable Energy Engineer',
      companyName: 'Green Energy',
      location: 'Denver, CO',
      workType: 'onsite',
      jobType: 'permanent',
      jobCategory: {
        id: '8',
        name: 'Engineering',
      },
      educationQualification: "Bachelor's in Electrical Engineering",
      jobDescription: 'Design and implement renewable energy systems.',
      payScale: '$70,000 - $90,000',
      skills: ['Electrical Engineering', 'CAD', 'Project Management'],
    },
    {
      id: '10',
      title: 'Supply Chain Coordinator',
      companyName: 'Logistics Solutions',
      location: 'Miami, FL',
      workType: 'hybrid',
      jobType: 'part-time',
      jobCategory: {
        id: '9',
        name: 'Logistics',
      },
      educationQualification: "Bachelor's in Logistics",
      jobDescription: 'Coordinate and manage supply chain operations.',
      payScale: '$50,000 - $70,000',
      skills: ['Supply Chain Management', 'Logistics', 'Inventory Control'],
    },
    {
      id: '11',
      title: 'Telehealth Nurse',
      companyName: 'Health Plus',
      location: 'San Francisco, CA',
      workType: 'remote',
      jobType: 'permanent',
      jobCategory: {
        id: '2',
        name: 'Healthcare',
      },
      educationQualification: "Bachelor's in Nursing",
      jobDescription: 'Provide telehealth services to patients.',
      payScale: '$70,000 - $90,000',
      skills: ['Nursing', 'Telehealth', 'Patient Care'],
    },
    {
      id: '12',
      title: 'Portfolio Manager',
      companyName: 'Finance Pros',
      location: 'Boston, MA',
      workType: 'onsite',
      jobType: 'full-time',
      jobCategory: {
        id: '4',
        name: 'Finance',
      },
      educationQualification: "Master's in Finance",
      jobDescription: 'Manage financial portfolios and advise clients.',
      payScale: '$90,000 - $120,000',
      skills: [
        'Financial Analysis',
        'Investment Management',
        'Client Relations',
      ],
    },
    {
      id: '13',
      title: 'Education Program Assistant',
      companyName: 'EduCorp',
      location: 'Chicago, IL',
      workType: 'hybrid',
      jobType: 'part-time',
      jobCategory: {
        id: '3',
        name: 'Education',
      },
      educationQualification: "Bachelor's in Education",
      jobDescription: 'Assist in developing educational programs.',
      payScale: '$40,000 - $60,000',
      skills: ['Teaching', 'Curriculum Development', 'Classroom Management'],
    },
    {
      id: '14',
      title: 'Customer Service Representative',
      companyName: 'Retail Giants',
      location: 'Los Angeles, CA',
      workType: 'onsite',
      jobType: 'full-time',
      jobCategory: {
        id: '6',
        name: 'Retail',
      },
      educationQualification: 'High School Diploma',
      jobDescription: 'Provide excellent customer service.',
      payScale: '$30,000 - $50,000',
      skills: ['Customer Service', 'Sales', 'Inventory Management'],
    },
    {
      id: '15',
      title: 'Brand Designer',
      companyName: 'Creative Minds',
      location: 'Austin, TX',
      workType: 'hybrid',
      jobType: 'permanent',
      jobCategory: {
        id: '7',
        name: 'Design',
      },
      educationQualification: "Bachelor's in Graphic Design",
      jobDescription: 'Design logos and branding materials.',
      payScale: '$60,000 - $80,000',
      skills: ['Graphic Design', 'Photoshop', 'Illustrator'],
    },
    {
      id: '16',
      title: 'Lead Developer',
      companyName: 'Tech Innovators',
      location: 'New York, NY',
      workType: 'remote',
      jobType: 'full-time',
      jobCategory: {
        id: '1',
        name: 'Software Development',
      },
      educationQualification: "Master's in Computer Science",
      jobDescription: 'Lead a team of software developers.',
      payScale: '$110,000 - $130,000',
      skills: ['Leadership', 'JavaScript', 'Angular'],
    },
    {
      id: '17',
      title: 'Mechanical Engineer',
      companyName: 'Green Energy',
      location: 'Denver, CO',
      workType: 'onsite',
      jobType: 'permanent',
      jobCategory: {
        id: '8',
        name: 'Engineering',
      },
      educationQualification: "Master's in Mechanical Engineering",
      jobDescription: 'Develop sustainable energy solutions.',
      payScale: '$80,000 - $100,000',
      skills: ['Mechanical Engineering', 'CAD', 'Project Management'],
    },
    {
      id: '18',
      title: 'Supply Chain Manager',
      companyName: 'Logistics Solutions',
      location: 'Miami, FL',
      workType: 'hybrid',
      jobType: 'full-time',
      jobCategory: {
        id: '9',
        name: 'Logistics',
      },
      educationQualification: "Master's in Logistics",
      jobDescription: 'Optimize supply chain processes.',
      payScale: '$70,000 - $90,000',
      skills: ['Supply Chain Management', 'Logistics', 'Process Optimization'],
    },
    {
      id: '19',
      title: 'Public Health Educator',
      companyName: 'Health Plus',
      location: 'San Francisco, CA',
      workType: 'remote',
      jobType: 'part-time',
      jobCategory: {
        id: '2',
        name: 'Healthcare',
      },
      educationQualification: "Master's in Public Health",
      jobDescription: 'Develop health education programs.',
      payScale: '$60,000 - $80,000',
      skills: ['Public Health', 'Program Development', 'Community Outreach'],
    },
    {
      id: '20',
      title: 'Market Research Analyst',
      companyName: 'Finance Pros',
      location: 'Boston, MA',
      workType: 'onsite',
      jobType: 'full-time',
      jobCategory: {
        id: '4',
        name: 'Finance',
      },
      educationQualification: "Master's in Finance",
      jobDescription: 'Conduct market research and financial modeling.',
      payScale: '$80,000 - $100,000',
      skills: ['Market Research', 'Financial Modeling', 'Excel'],
    },
  ];
}
