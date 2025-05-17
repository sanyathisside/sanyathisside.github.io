import React, { useState, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B6B',
    },
    background: {
      default: '#1E1E1E',
      paper: '#2D2D2D',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
  },
});

const AppContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5),
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1E1E1E 0%, #2D2D2D 100%)',
}));

const PortfolioContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 1100,
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  backgroundColor: 'rgba(45, 45, 45, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '@media (max-width: 600px)': {
    height: '100vh',
    borderRadius: 0,
  },
}));

const ContentRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  height: '100%',
  overflow: 'hidden',
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: 210,
  backgroundColor: 'rgba(45, 45, 45, 0.95)',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  backdropFilter: 'blur(10px)',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  '@media (max-width: 600px)': {
    width: 160,
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#1E1E1E',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
}));

const ResponseBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: 'rgba(30, 30, 30, 0.95)',
  borderRadius: '8px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  minHeight: 0,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '& pre': {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
    borderRadius: '8px',
    overflow: 'auto',
    flex: 1,
    fontSize: '14px',
    lineHeight: 1.5,
    maxWidth: '100%',
    minHeight: 0,
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(30, 30, 30, 0.95)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  },
}));

const RequestBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(45, 45, 45, 0.95)',
  borderRadius: '0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const UrlBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  backgroundColor: 'rgba(30, 30, 30, 0.95)',
  borderRadius: '8px',
  padding: theme.spacing(1),
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const MethodSelect = styled(Box)(({ theme }) => ({
  padding: '4px 18px',
  borderRadius: '6px',
  fontWeight: 700,
  fontSize: '0.95rem',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#fff',
  backgroundColor: '#6c757d', // fallback
  border: 'none',
  boxShadow: 'none',
  display: 'inline-block',
  minWidth: '70px',
  textAlign: 'center',
  '&.GET': {
    backgroundColor: '#28a745',
  },
  '&.POST': {
    backgroundColor: '#007bff',
  },
  '&.PUT': {
    backgroundColor: '#ffc107',
    color: '#212529',
  },
  '&.DELETE': {
    backgroundColor: '#dc3545',
  },
}));

const UrlInput = styled(Box)(({ theme }) => ({
  flex: 1,
  color: '#fff',
  fontSize: '0.875rem',
  padding: '6px 12px',
  backgroundColor: '#1E1E1E',
  borderRadius: '4px',
  border: '1px solid #3D3D3D',
}));

const SendButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isloading'
})(({ isloading }) => ({
  backgroundColor: isloading ? '#6c757d' : '#027AFF',
  color: '#fff',
  minWidth: '60px',
  fontWeight: 700,
  fontSize: '0.95rem',
  borderRadius: '6px',
  padding: '4px 14px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: 'none',
  transition: 'all 0.2s cubic-bezier(.4,0,.2,1) 0ms',
  '&:hover': {
    backgroundColor: isloading ? '#565e64' : '#0263c7',
    boxShadow: isloading ? 'none' : '0 2px 8px rgba(2, 122, 255, 0.15)',
  },
  '&.Mui-disabled': {
    backgroundColor: '#7ab8fa',
    color: 'rgba(255,255,255,0.7)',
  },
}));

const customAtomDark = {
  ...atomDark,
  'pre[class*="language-"]': {
    ...atomDark['pre[class*="language-"]'],
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    lineHeight: '2',
  },
  'code[class*="language-"]': {
    ...atomDark['code[class*="language-"]'],
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    lineHeight: '2',
  },
  '.property': {
    color: '#FF6B6B',
    paddingRight: '1em',
    display: 'block',
    marginBottom: '0.5em',
    position: 'relative',
    '&::before': {
      content: '"✨"',
      position: 'absolute',
      left: '-1.5em',
      opacity: 0.7,
    }
  },
  '.string': {
    color: '#61DAFB',
    paddingLeft: '0.5em',
    position: 'relative',
    '&::before': {
      content: '"💫"',
      position: 'absolute',
      left: '-1.5em',
      opacity: 0.7,
    }
  },
  '.number': {
    color: '#4CAF50',
    '&::before': {
      content: '"🔢"',
      marginRight: '0.5em',
      opacity: 0.7,
    }
  },
  '.boolean': {
    color: '#FFC107',
    '&::before': {
      content: '"⭐"',
      marginRight: '0.5em',
      opacity: 0.7,
    }
  },
  '.null': {
    color: '#F44336',
    '&::before': {
      content: '"❌"',
      marginRight: '0.5em',
      opacity: 0.7,
    }
  }
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: selected ? 'rgba(255, 107, 107, 0.15)' : 'transparent',
  '&:hover': {
    backgroundColor: selected ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 255, 255, 0.05)',
  },
  '& .MuiListItemIcon-root': {
    color: selected ? '#FF6B6B' : 'rgba(255, 255, 255, 0.7)',
    transition: 'color 0.2s ease-in-out',
    minWidth: '40px',
  },
  '& .MuiListItemText-primary': {
    color: selected ? '#FF6B6B' : 'rgba(255, 255, 255, 0.9)',
    fontWeight: selected ? 600 : 400,
    transition: 'all 0.2s ease-in-out',
  }
}));

const EmptyState = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: 'text.secondary',
  gap: theme.spacing(3),
  '& .avatar': {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'rgba(45, 45, 45, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(255, 107, 107, 0.3)',
    boxShadow: '0 4px 20px rgba(255, 107, 107, 0.2)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      borderColor: 'rgba(255, 107, 107, 0.5)',
      boxShadow: '0 6px 24px rgba(255, 107, 107, 0.3)',
    },
    '& .icon': {
      fontSize: '48px',
      color: '#FF6B6B',
      opacity: 0.8,
    }
  },
  '& .text': {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    maxWidth: '300px',
    fontWeight: 500,
  }
}));

const ResponseInfoBar = styled(Box)(({ theme, status }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  padding: theme.spacing(1.5, 2),
  background: 'rgba(40, 40, 40, 0.98)',
  borderRadius: '8px 8px 0 0',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  fontSize: '0.97rem',
  color: '#fff',
  fontWeight: 500,
  marginBottom: '0px',
  marginTop: theme.spacing(1),
  '& .label': {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '0.5px',
    opacity: 0.85,
    marginRight: 0,
  },
  '& .right': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  '& .status': {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: status === 200 ? '#28a745' : '#dc3545',
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  '& .time': {
    color: '#61DAFB',
    fontWeight: 600,
  },
  '& .size': {
    color: '#ffc107',
    fontWeight: 600,
  },
}));

const WindowBar = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 28,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 18,
  background: 'rgba(45, 45, 45, 0.95)',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  zIndex: 2,
}));

const MacCircles = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
}));

const MacCircle = styled('span')(({ color }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: color,
  display: 'inline-block',
  border: '1.5px solid rgba(0,0,0,0.08)',
}));

const NavIcon = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  fontSize: 18,
  marginLeft: 10,
  marginRight: 2,
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background 0.15s, color 0.15s',
  padding: 2,
  '&:hover': {
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
  },
}));

function calculateDurationFromStart(startStr) {
  // startStr format: 'Jul 2024' or 'Month YYYY'
  const [monthStr, yearStr] = startStr.split(' ');
  const month = new Date(Date.parse(monthStr + ' 1, 2000')).getMonth();
  const year = parseInt(yearStr, 10);
  const startDate = new Date(year, month);
  const now = new Date();
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months += now.getMonth() - startDate.getMonth();
  months += 1; // include current month
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  if (years === 0) {
    return `${remMonths} month${remMonths !== 1 ? 's' : ''}`;
  }
  return `${years} year${years !== 1 ? 's' : ''} ${remMonths} month${remMonths !== 1 ? 's' : ''}`;
}

function getCurrentTimezoneInfo() {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  const currentTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return { currentTime, timeZone };
}

function App() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('about');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseInfo, setResponseInfo] = useState({ status: 200, time: 0, size: 0 });
  const [history, setHistory] = useState([]);
  const [forwardStack, setForwardStack] = useState([]);
  const cancelRequestRef = useRef(null);

  const endpoints = {
    about: {
      method: 'GET',
      path: '/about',
      description: 'Get information about me',
      response: {
        name: 'Sanya Kumari',
        location: 'Bangalore, India',
        birthdate: '25 Aug',
        profession: 'Software Developer',
        bio: 'I enjoy photography and exploring new places, whether it is a quick weekend trip or a big adventure. I also indulge in leisure writing and reading, or catching up over a good cup of coffee (always up for that)!',
        currentTime: getCurrentTimezoneInfo(),
      }
    },
    skills: {
      method: 'GET',
      path: '/skills',
      description: 'Get my technical skills',
      response: {
        "Concepts": "Data Structures, Algorithms, Object-Oriented Programming, System Design, Data Science",
        "Languages": "JavaScript, C, C++, Java, Python, C#, SQL, Assembly Language",
        "Frameworks/Libraries": "React, Spring, NodeJS, NextJS, Pandas, NumPy, Matplotlib/Seaborn, Scikit-Learn, Redis, Kafka, GraphQL, ELK Stack",
        "Developer Tools/DevOps": "Git, AWS, VS Code, IntelliJ, Anaconda, Grafana, Jenkins, Docker, Kubernetes, CI/CD"
      }
    },
    experience: {
      method: 'GET',
      path: '/experience',
      description: 'Get my work experience',
      response: {
        experience: [
          {
            company: 'Powerplay',
            position: 'Senior Software Engineer',
            duration: `Jul 2024 - Present · ${calculateDurationFromStart('Jul 2024')}`,
            location: 'Bengaluru, Karnataka, India',
            locationType: 'On-site',
            employmentType: 'Full-time',
            skills: []
          },
          {
            company: 'Tekion Corp',
            position: 'Software Engineer',
            duration: 'Jan 2022 - Jul 2024 · 2 years 7 months',
            location: 'Bengaluru, Karnataka, India',
            locationType: 'Hybrid',
            employmentType: 'Full-time',
            skills: [],
          },
          {
            company: 'Adobe',
            position: 'Software Engineer',
            duration: 'Sep 2021 - Jan 2022 · 5 months',
            location: 'Noida, Uttar Pradesh, India',
            locationType: 'Remote',
            employmentType: 'Full-time',
            skills: [],
          },
          {
            company: 'Amazon',
            position: 'SDE Intern',
            duration: 'Jan 2021 - Jul 2021 · 7 months',
            location: 'Bengaluru, Karnataka, India',
            locationType: 'Remote',
            employmentType: 'Internship',
            skills: ['React.js', 'Java', 'Spring Framework', 'Amazon Web Services (AWS)'],
          },
          {
            company: 'Trekmunk',
            position: 'Web Developer',
            duration: 'Nov 2020 - Dec 2020 · 2 months',
            location: 'Delhi, India',
            locationType: 'Remote',
            employmentType: 'Internship',
            skills: []
          },
          {
            company: 'Trekmunk',
            position: 'Web Developer',
            duration: 'Apr 2020 - Jun 2020 · 3 months',
            location: 'Delhi, India',
            locationType: 'Remote',
            employmentType: 'Internship',
            skills: []
          },
          {
            company: 'Power Grid Corporation of India Limited',
            position: 'Summer Trainee',
            duration: 'Jun 2019 - Jul 2019 · 2 months',
            location: 'Gurgaon, India',
            locationType: 'On-site',
            employmentType: 'Internship',
            skills: []
          }
        ]
      }
    },
    education: {
      method: 'GET',
      path: '/education',
      description: 'Get my educational background',
      response: {
        education: [
          {
            institution: 'Thapar Institute of Engineering & Technology',
            degree: 'Bachelor of Engineering - BE, Electrical Engineering',
            year: '2017 - 2021',
            location: 'Patiala, Punjab, India'
          },
          {
            institution: 'Hope Hall Foundation School',
            degree: 'CBSE, XII',
            location: 'Delhi, India'
          }
        ]
      }
    },
    social: {
      method: 'GET',
      path: '/social',
      description: 'Get my social media profiles',
      response: {
        platforms: [
          {
            name: 'GitHub',
            url: 'https://github.com/sanyathisside',
            username: 'sanyathisside'
          },
          {
            name: 'X',
            url: 'https://twitter.com/sanyathisside',
            username: 'sanyathisside'
          },
          {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/sanyathisside',
            username: 'sanyathisside'
          },
          {
            name: 'Instagram',
            url: 'https://instagram.com/sanyathisside',
            username: 'sanyathisside'
          },
          {
            name: 'Snapchat',
            url: 'https://snapchat.com/add/sanyathisside',
            username: 'sanyathisside'
          }
        ]
      }
    },
    contact: {
      method: 'GET',
      path: '/contact',
      description: 'Get my contact details',
      response: {
        email: "sanya25aug@gmail.com",
        location: "Bangalore, India",
        availability: "10 AM to 7 PM"
      }
    }
  };

  const handleEndpointChange = (endpoint) => {
    if (endpoint !== selectedEndpoint) {
      setHistory(prev => [...prev, selectedEndpoint]);
      setForwardStack([]); // clear forward stack on new navigation
      setSelectedEndpoint(endpoint);
      setResponse(null);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setForwardStack(fs => [selectedEndpoint, ...fs]);
      setSelectedEndpoint(prev);
      setResponse(null);
    }
  };

  const handleForward = () => {
    if (forwardStack.length > 0) {
      const next = forwardStack[0];
      setForwardStack(forwardStack.slice(1));
      setHistory(h => [...h, selectedEndpoint]);
      setSelectedEndpoint(next);
      setResponse(null);
    }
  };

  const handleSendRequest = async () => {
    if (isLoading) {
      if (cancelRequestRef.current) {
        cancelRequestRef.current();
      }
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    let cancelled = false;
    cancelRequestRef.current = () => {
      cancelled = true;
    };
    const start = performance.now();
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cancelled) return reject(new Error('Cancelled'));
          resolve();
        }, 1000);
      });
      if (!cancelled) {
        const res = endpoints[selectedEndpoint].response;
        const json = JSON.stringify(res, null, 2);
        const end = performance.now();
        setResponse(res);
        setResponseInfo({
          status: 200,
          time: Math.round(end - start),
          size: new Blob([json]).size,
        });
      }
    } catch (error) {
      setResponse({ error: error.message });
      setResponseInfo({
        status: 400,
        time: 0,
        size: 0,
      });
    } finally {
      setIsLoading(false);
      cancelRequestRef.current = null;
    }
  };

  const getTabDescription = (endpoint) => {
    switch(endpoint) {
      case 'about':
        return {
          icon: <PersonIcon className="icon" />
        };
      case 'skills':
        return {
          icon: <BuildIcon className="icon" />
        };
      case 'experience':
        return {
          icon: <WorkIcon className="icon" />
        };
      case 'education':
        return {
          icon: <SchoolIcon className="icon" />
        };
      case 'social':
        return {
          icon: <LinkIcon className="icon" />
        };
      case 'contact':
        return {
          icon: <EmailIcon className="icon" />
        };
      default:
        return {
          icon: <PersonIcon className="icon" />
        };
    }
  };

  const renderEndpointContent = () => {
    const endpoint = endpoints[selectedEndpoint];
    
    return (
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <RequestBox sx={{ m: 0, borderRadius: 0, borderBottom: '1px solid #3D3D3D' }}>
          <UrlBar>
            <MethodSelect className={endpoint.method}>
              {endpoint.method}
            </MethodSelect>
            <UrlInput>
              {endpoint.path}
            </UrlInput>
            <SendButton
              variant="contained"
              startIcon={<PlayArrowIcon fontSize="small" />}
              onClick={handleSendRequest}
              disabled={false}
              isloading={isLoading ? 1 : 0}
            >
              {isLoading ? 'Cancel' : 'Send'}
            </SendButton>
          </UrlBar>
        </RequestBox>
        
        <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
          {response ? (
            <>
              <ResponseInfoBar status={responseInfo.status}>
                <span className="label">Response</span>
                <span className="right">
                  <span className="status">
                    {responseInfo.status === 200 ? <CheckCircleIcon fontSize="small" style={{ marginRight: 4 }} /> : <ErrorIcon fontSize="small" style={{ marginRight: 4 }} />}
                    {responseInfo.status} {responseInfo.status === 200 ? 'OK' : 'Error'}
                  </span>
                  <span className="time">{responseInfo.time} ms</span>
                  <span className="size">{(responseInfo.size / 1024).toFixed(2)} KB</span>
                </span>
              </ResponseInfoBar>
              <ResponseBox>
                <SyntaxHighlighter
                  language="json"
                  style={customAtomDark}
                  customStyle={{
                    margin: 0,
                    borderRadius: '4px',
                    backgroundColor: 'transparent',
                    padding: '16px',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    height: '100%',
                    overflow: 'auto',
                    maxWidth: '100%',
                  }}
                >
                  {JSON.stringify(response, null, 2)}
                </SyntaxHighlighter>
              </ResponseBox>
            </>
          ) : (
            <EmptyState>
              <Box className="avatar">
                {getTabDescription(selectedEndpoint).icon}
              </Box>
              <Typography className="text" sx={{ color: '#FF6B6B' }}>
                Click Send to get a response
              </Typography>
            </EmptyState>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#1E1E1E",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#FF6B6B",
              },
              links: {
                color: "#FF6B6B",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        <PortfolioContainer elevation={3}>
          <WindowBar>
            <MacCircles>
              <MacCircle color="#FF5F56" />
              <MacCircle color="#FFBD2E" />
              <MacCircle color="#27C93F" />
            </MacCircles>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <NavIcon onClick={handleBack} style={{ opacity: history.length === 0 ? 0.3 : 1, pointerEvents: history.length === 0 ? 'none' : 'auto' }}>
                <ArrowBackIcon fontSize="inherit" />
              </NavIcon>
              <NavIcon onClick={handleForward} style={{ opacity: forwardStack.length === 0 ? 0.3 : 1, pointerEvents: forwardStack.length === 0 ? 'none' : 'auto' }}>
                <ArrowForwardIcon fontSize="inherit" />
              </NavIcon>
            </Box>
            <Box sx={{ flex: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pr: 2 }}>
              <LaptopMacOutlinedIcon fontSize="small" sx={{ color: '#b0b3b8', opacity: 0.7, fontWeight: 300 }} />
              <LocalCafeOutlinedIcon fontSize="small" sx={{ color: '#b0b3b8', opacity: 0.7, fontWeight: 300 }} />
              <DirectionsCarOutlinedIcon fontSize="small" sx={{ color: '#b0b3b8', opacity: 0.7, fontWeight: 300 }} />
              <MenuBookOutlinedIcon fontSize="small" sx={{ color: '#b0b3b8', opacity: 0.7, fontWeight: 300 }} />
            </Box>
          </WindowBar>
          <ContentRow>
            <Sidebar>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: 2.5,
                  paddingBottom: 2.5,
                  paddingLeft: 2,
                  paddingRight: 2,
                  background: 'rgba(45, 45, 45, 0.95)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  boxSizing: 'border-box',
                }}
              >
                <Typography variant="h6" sx={{ color: '#FF6B6B' }}>
                  Sanya
                </Typography>
              </Box>
              <List disablePadding>
                <StyledListItem 
                  button 
                  onClick={() => handleEndpointChange('about')}
                  selected={selectedEndpoint === 'about'}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </StyledListItem>
                <StyledListItem 
                  button 
                  onClick={() => handleEndpointChange('skills')}
                  selected={selectedEndpoint === 'skills'}
                >
                  <ListItemIcon>
                    <BuildIcon />
                  </ListItemIcon>
                  <ListItemText primary="Skills" />
                </StyledListItem>
                <StyledListItem 
                  button 
                  onClick={() => handleEndpointChange('experience')}
                  selected={selectedEndpoint === 'experience'}
                >
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Experience" />
                </StyledListItem>
                <StyledListItem 
                  button 
                  onClick={() => handleEndpointChange('education')}
                  selected={selectedEndpoint === 'education'}
                >
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary="Education" />
                </StyledListItem>
                <StyledListItem 
                  button 
                  onClick={() => handleEndpointChange('social')}
                  selected={selectedEndpoint === 'social'}
                >
                  <ListItemIcon>
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Social" />
                </StyledListItem>
                <StyledListItem 
                  button 
                  onClick={() => handleEndpointChange('contact')}
                  selected={selectedEndpoint === 'contact'}
                >
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </StyledListItem>
              </List>
            </Sidebar>
            
            <MainContent>
              {renderEndpointContent()}
            </MainContent>
          </ContentRow>
        </PortfolioContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; 