
import soft_dev from "../Assets/software_developer.jpg";
import frontend from "../Assets/frontend_dev.png";
import health from "../Assets/health.avif";
import ca from "../Assets/ca.avif";
import lawyer from "../Assets/lawyer.webp";
import finance from "../Assets/finance.avif";

const jobs = [
    {
        id: 1,
        title: 'Software Developer',
        application_deadline: '20 September 2023',
        location: 'Indore',
        category: 'technical',
        src: soft_dev
    },
    {
        id: 2,
        title: 'Front End Developer',
        application_deadline: '17 July 2023',
        location: 'Banglore',
        category: 'technical',
        src: frontend
    },
    {
        id: 3,
        title: 'Senior Health Manager',
        application_deadline: '05 July 2023',
        location: 'Surat',
        category: 'health',
        src: health
    },
    {
        id: 4,
        title: 'Financial Advisor',
        application_deadline: 'Expired',
        location: 'NCR',
        category: 'finance',
        src: finance
    },
    {
        id: 5,
        title: 'Senior Advocate',
        application_deadline: '4 August 2023',
        location: 'Mumbai',
        category: 'law',
        src: lawyer
    },

    {
        id: 6,
        title: 'Charted Accounted',
        application_deadline: '3 September 2023',
        location: 'Jaipur',
        category: 'management',
        src: ca
    },

]

const location = [
    {
        id: 1,
        address: 'Banglore',
        value: 'Banglore'
    },
    {
        id: 2,
        address: 'Delhi',
        value: 'Delhi'
    },
    {
        id: 3,
        address: 'Pune',
        value: 'Pune'
    },
    {
        id: 4,
        address: 'Mumbai',
        value: 'Mumbai'
    },
    {
        id: 5,
        address: 'Jaipur',
        value: 'Jaipur'
    },
    {
        id: 6,
        address: 'Hyderabad',
        value: 'Hyderabad'
    }
]

const category = [
    {
        id: 1,
        category: 'Technical',
        value: 'technical',
    },
    {
        id: 2,
        category: 'Health',
        value: 'health'
    },
    {
        id: 3,
        category: 'Management',
        value: 'management'
    },
    {
        id: 4,
        category: 'Finance',
        value: 'finance'
    },
    {
        id: 5,
        category: 'Law',
        value: 'law'
    },

]

 
export {jobs , category, location} ;

