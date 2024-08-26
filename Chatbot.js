import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './Chatbot.css';
import JobLink from './JobLink'


const steps = [
  {
    id: '1',
    message: 'Hi there! Welcome to EnormousIT. Could you share your name with us so we can begin?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '4',
  },
  {
    id: '4',
    message: 'What are you looking for?',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Looking for services', trigger: '6' },
      { value: 2, label: 'Looking for a job', trigger: '7' },
    ],
  },
  {
    id: '6',
    message: 'Here is a list of services we offer',
    trigger:'8'
  },
  {
    id: '8',
    options: [
      { value: 3, label: 'oracle services', trigger:'9'},
      { value: 4, label: 'Microsoft Technology services', trigger:'10'},
      { value: 5, label: 'SAP Technology services',trigger:'11' },
      { value: 6, label: 'Big Data',trigger:'12'},
      { value: 7, label: 'Business Intelligence and Data Warehousing Solution',trigger:'12'},
      { value: 8, label: 'Web Offerings and Mobile Applications',trigger:'12'},
      { value: 9, label: 'Talent As A Service(Taas)',trigger:'12'},
      { value: 10, label: 'Cyber security',trigger:'12'},
      { value: 11, label: 'Quality Assurance and Testing Services',trigger:'12' },
    ],
  },
  {
    id: '9',
    options: [
      { value: 12, label: 'Oracle Cloud Applications', trigger:'12'},
      { value: 13, label: 'Oracle Managed services', trigger:'12'},
      { value: 14, label: 'Additional Oracle Services',trigger:'12' },
    ]
  },
  {
    id:'10',
    options: [
      { value: 15, label: 'Microsoft Custom Application Development', trigger:'12'},
      { value: 16, label: 'Microsoft Enterprise Architecture Services', trigger:'12'},
      { value: 17, label: 'Microsoft Business Intelligence',trigger:'12' },
      { value: 18, label: 'Microsoft Product solutions',trigger:'12' },
    ]
  },
  {
    id: '11',
    options: [
      { value: 19, label: 'SAP ERP Implementation and Management', trigger:'12'},
      { value: 20, label: 'SAP S/4HANA Migration', trigger:'12'},
      { value: 21, label: 'SAP Cloud',trigger:'12' },
      { value: 22, label: 'SAP Analytics and Business Intelligence', trigger:'12'},
      { value: 23, label: 'SAP Integration Services', trigger:'12'},
      { value: 24, label: 'SAP Training Support',trigger:'12' },
    ]
  },
  {
    id: '12',
    message: 'Thank you for showing your interest with us you can reach out to us at info@enormousit.com or mktg@enormousit.com or call us on +91-40-48553545',
  },
  {
    id: '7',
    component:<JobLink />,
    end: true,
  }
];

const theme = {
  background: '#d2d4d9',
  headerBgColor: '#292929',
  headerFontSize: '20px',
  botBubbleColor: '#0098D4',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#4f706f',
  userFontColor: 'white',
};

const config = {
  botAvatar: "chatbotf.png",
  floating: true,
};

function App() {
  return (
    <div className='chat'>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Live Chat"
          steps={steps}
          {...config}
          className="chatbot"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;



