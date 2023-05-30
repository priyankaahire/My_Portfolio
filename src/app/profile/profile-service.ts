import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


  about = `Software Developer with 6+ years of experience.
  #Worked with Software Development Life Cycle(SDLC) and agile methodologies
  Expertise in Angular 2+ All versions, Javascript, Node JS, CSS3, SASS and UI with Responsive Designs.
  #Have good understanding of PHP, Python, Reactjs, Jquery, Bootstrap, MongoDB, and MYSQL.
  #Worked on tools like Git.
  #A good team player with good communication, always ready to help people.`
  
  aboutTag =`I'm technophile person.Lover of innovation and everything related to new knowledge.Face problems with a smile and give 100% to solve them as soon as possible.`

  basicInformation:any = [
    {
      "dob":"August 01, 1992",
      "email": "psahire01@gmail.com",
      "phone":"+91 8551841285",
      "address":"Roystone society Magrapatta Hadpasar Pune Maharasharta 411028",
      "language": "English, Hindi, Marathi"
    }
  ]
  resumeurl = "https://drive.google.com/file/d/1BWp41qiuTlTzgt9NEbFehKy7bEpuJ61Z/view"
  projects:any = [
    {
      id: 1,
      title: 'Snow Fall effect',
      subtitle: 'Javscript',
      livedemo: 'https://priyankaahire.github.io/Frontend_Projects/Day3_SnowFall/',
      githurl: 'https://github.com/priyankaahire/Frontend_Projects/tree/master/Day3_SnowFall',
      mediumlink: '',
      //clipUrl: 'assets/resources/media/snowfall.webm', //assets/resources/media/snowfall.webm
      imgUrl:'assets/resources/images/snowfall.PNG',
      tech: 'HTML, CSS, Javascript, Particles JS, Animation',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
    {
      id: 3,
      title: 'Admin UI',
      subtitle:"Angular",
      livedemo: 'https://priyankaahire.github.io/Frontend_Projects/Day1_ExpandingCards/',
      githurl: 'https://github.com/priyankaahire/Frontend_Projects/tree/master/Day1_ExpandingCards',
      mediumlink: '',
      tech: 'Angular 2+, Typescript, Html, CSS',
      imgUrl: '',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
    {
      id:4,
      title:'Coronavirus Tracker app',
      subtitle:"Ionic Framework",
      livedemo: '',
      githurl: 'https://github.com/priyankaahire/CoronavirusTracker',
      mediumlink: '',
      tech: 'Typescript, Cordova, Node.js, Chart.js, Firebase',
      imgUrl: 'assets/resources/images/coronavirustrack.png',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',

    },
    {
      id: 2,
      title: 'Expanding Crads',
      subtitle:"Javascript",
      livedemo: 'https://priyankaahire.github.io/Frontend_Projects/Day1_ExpandingCards/',
      githurl: 'https://github.com/priyankaahire/Frontend_Projects/tree/master/Day1_ExpandingCards',
      mediumlink: '',
      tech: 'HTML, CSS, Javascript, Animation',
      imgUrl: 'assets/resources/images/expanding_cards.PNG',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
    
  ]
  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '90'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '60'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80'
    },
    {
      'id': '4',
      'skill': 'MYSQL,MONOGO',
      'progress': '25'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '40'
    },
    {
      'id': '6',
      'skill': 'PYTHON',
      'progress': '10'
    }
  ];
  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2013 - 2015',
      'education': 'Master\'s Degree',
      'stream': 'M.Sc. (Scientific Computing)',
      'institution': 'Interdisciplinary School of Scientific Computing, Pune',
      'info': `Interdisciplinary School of Scientific Computing is department of Pune University`,
      'percentage': "64%"
      
    },
    {
        'id': '2',
        'from_to_year': '2011 - 2013',
        'education': 'Bachelor\'s Degree',
        'stream': 'B.Sc. (Computer Scinece)',
        'institution': 'M.S.G College, Malegaon, Nashik',
        'info': `M.S.G College in Maharashatra Completed B.Sc in Computer scinece.`,
        'percentage': "69%"
      },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'H.S.C (Science)',
      'institution': 'M.S.G College, Malegaon, Nashik.',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry There was also a good base on physics, mathematics and chemistry.`,
      'percentage': "74%"
    },
    {
      'id': '3',
      'from_to_year': '2007 - 2008',
      'education': 'Secondary  School',
      'stream': 'S.S.C',
      'institution': 'T.R.High School, Malegaon, Nashik.',
      'info': `The Secondary aims at Maths , English , Science and Languages`,
      'percentage': "83.69%"
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Amdocs',
      location: 'Pune',
      timeline: 'Aug 2022 to Present',
      role: 'Software Developer',
      technologies: "Angular , Node JS , MongoDB",
      work: 'Working as a full stack developer .Responsible for handling the UI in Angualr +2 version and Managing the api calls in NodeJs.'
    },
    {
      id: 2,
      company: 'Asset Vantage Pvt. Ltd ',
      location: 'Pune',
      timeline: 'December 2016 to August 2022.',
      role: 'Software Developer',
      technologies: "Angular, PHP, MySql",
      work: 'Working as a Front end developer .Responsible for handling the UI in Angualr, Javascript and Managing the api calls in PHP.'

    },
    {
      id: 3,
      company: 'Sanmol a software & solution Pvt. Ltd',
      location: 'Pune',
      timeline: 'September 2015 to December 2016',
      role: 'Software Developer',
      technologies: "Angular, PHP, MySql",
      work: 'Working as a Front end developer .Responsible for handling the UI in Angualr and Managing the api calls in PHP.'

    }
  ]
  recommendations:any = [
    {
      name:"Ashutosh Sharma",
      profile:"",
      comment:`Working with team members like Priyanka make positive office culture a reality. One of the rare people who is
       always jolly and smiling no matter how stressful things are. Combination of positive attitude, ready to learn and share. She takes her task with complete ownership and responsibilities. If Priyanka is working on an assignment, 
      I was confident that we would get the correct output with quality. It was my pleasure to work with Priyanka.`
    },
    {
      name:"Swinal Dbritto",
      profile:"",
      comment:`Priyanka always takes all feedback/suggestions in positive manner and has helped to make things better, a resource with great attitude.`
    }
  ]
  getSkills(): Observable<any> {
    return this.skillsData;
  }
  getProjects(): Observable<any> {
    return this.projects;
  }
  getEducation(): Observable<any> {
    return this.educationData;
  }
  getExprience(): Observable<any> {
    return this.exprienceData;
  }
  getBasicInformation(): Observable<any> {
    return this.basicInformation;
  }
  getRecommendations(): Observable<any> {
    return this.recommendations;
  }
  getScoreColor(number:any, type="pf-badge"){
    let color_class = '';
     //% Color class avilable inside the style.css file
     if(0 <= number && number <= 30){
       color_class = (type=="pf-badge" || type=="pf-text") ? type+'-red' : "red-"+type+" red-"+type+"-border"
     }
     else if(31 <= number && number <= 74){
       color_class = (type=="pf-badge" || type=="pf-text") ? type+'-yellow' : "yellow-"+type+" yellow-"+type+"-border"
     }
     else if(75 <= number && number <= 100){
       color_class = (type=="pf-badge" || type=="pf-text") ? type+'-green' : "green-"+type+" green-"+type+"-border"
     }
     return color_class
   }
}