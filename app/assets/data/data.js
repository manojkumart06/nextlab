import superteam from '../images/superteam.png'
import deanlist from '../images/deanlist.png'
import deribet from '../images/deribet.png'
import pstake from '../images/pstake.png'
import viewprofile from '../images/viewprofile.png'
import dashboard from '../images/dashboard.png'
import code from '../images/code.png'
import logout from '../images/logout.png'

// Navigation items for the navbar
export const navItems = [
  { label: "Home", link: "#" },
  { label: "Blockchain", link: "#" },
  { label: "Developers", link: "#" },
  { label: "More", link: "#" },
  { label: "About", link: "#" }
];

// Data for different projects or contests
export const data = [
    {
      "image": superteam, 
      "title": "Design Earn's Talent Leaderboard",
      "by": "Superteam",
      "date": "04/04/2023",
      "reward": "700",
      "place": "1st Place",
      "tags": ["Design"],
      "participants": 36
    },
    {
      "image": deanlist, 
      "title": "Armada UI/UX Review",
      "by": "Dean's List Dao",
      "date": "21/03/2023",
      "reward": "",
      "place": "",
      "tags": ["Design"],
      "participants": 7
    },
    {
      "image": deribet, 
      "title": "Create a Frame for Farcaster",
      "by": "Deribet",
      "date": "14/03/2023",
      "reward": "500",
      "place": "1st Place",
      "tags": ["Frontend", "Backend", "Blockchain"],
      "participants": 20
    },
    {
      "image": pstake, 
      "title": "Write a thread with memes for PP Program on Solana",
      "by": "pSTAKE Finance",
      "date": "06/03/2023",
      "reward": "100",
      "place": "3rd Place",
      "tags": ["Content"],
      "participants": 12
    }
  ]
  
// Data for user information including nested menu items
export const users = [
    { fname: 'Olivia', lname : 'Rhye', email: 'olivia@jiffyscan.xyz',
        children : [
            {
                label: 'View profile',
                link : '#' ,
                image : viewprofile,
            },
            {
                label: 'Dashboard',
                link : '#' ,
                image :dashboard,
            },
            {
                label: 'API',
                link : '#' ,
                image : code,
            },
            {
                label: 'Log out',
                link : '#' ,
                image : logout,
            },

        ]
     },
  ]