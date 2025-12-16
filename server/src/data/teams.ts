import { Team, AuctionedPlayer } from '../types/game';
import { IPLPlayer } from './players';
import { v4 as uuidv4 } from 'uuid';

// Helper to create a dummy retained player if full stats aren't available
function createRetainedPlayer(name: string, isOverseas: boolean = false): IPLPlayer {
    return {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        role: 'Batsman', // Default, logic can be refined
        country: isOverseas ? 'Overseas' : 'India',
        basePrice: 0,
        imageUrl: '/players/default.jpg',
        stats: { matches: 0 },
        tags: ['Retained'],
        isOverseas,
        setNo: 0,
        setCode: 'RETAINED'
    };
}

// Helper to create AuctionedPlayer wrapper
function retained(name: string, price: number = 0, isOverseas: boolean = false): AuctionedPlayer {
    return {
        player: createRetainedPlayer(name, isOverseas),
        soldPrice: price,
        soldAt: new Date()
    };
}

export const initialTeams: Omit<Team, 'ownerId' | 'isReady'>[] = [
    {
        id: 'csk',
        name: 'Chennai Super Kings',
        color: '#F9CD05', // Yellow
        budget: 4340, // 43.40 Cr
        spent: 0, // Spent from *remaining* budget is 0. 
        // Note: The prompt gives "Purse remaining". Logic in game uses 'budget' as total cap or remaining?
        // Usually budget is total cap. If we set budget=4340 and spent=0, that works for "Remaining".
        squad: [
            retained('MS Dhoni'), retained('Ruturaj Gaikwad'), retained('Sanju Samson'),
            retained('Ayush Mhatre'), retained('Dewald Brewis', 0, true), retained('Shivam Dube'),
            retained('Urvil Patel'), retained('Noor Ahmad', 0, true), retained('Nathan Ellis', 0, true),
            retained('Shreyas Gopal'), retained('Khaleel Ahmed'), retained('Ramakrishna Ghosh'),
            retained('Mukesh Choudhary'), retained('Jamie Overton', 0, true), retained('Gurjapneet Singh'),
            retained('Anshul Kamboj')
        ]
    },
    {
        id: 'dc',
        name: 'Delhi Capitals',
        color: '#17449B', // Blue
        budget: 2180,
        spent: 0,
        squad: [
            retained('Nitish Rana'), retained('Abishek Porel'), retained('Ajay Mandal'),
            retained('Ashutosh Sharma'), retained('Axar Patel'), retained('Dushmantha Chameera', 0, true),
            retained('Karun Nair'), retained('KL Rahul'), retained('Kuldeep Yadav'),
            retained('Madhav Tiwari'), retained('Mitchell Starc', 0, true), retained('Sameer Rizvi'),
            retained('T Natarajan'), retained('Tripurana Vijay'), retained('Tristan Stubbs', 0, true),
            retained('Vipraj Nigam'), retained('Mukesh Kumar')
        ]
    },
    {
        id: 'gt',
        name: 'Gujarat Titans',
        color: '#1B2133', // Dark Blue/Black
        budget: 1290,
        spent: 0,
        squad: [
            retained('Anuj Rawat'), retained('Glenn Phillips', 0, true), retained('Gurnoor Brar'),
            retained('Ishant Sharma'), retained('Jayant Yadav'), retained('Jos Buttler', 0, true),
            retained('Kagiso Rabada', 0, true), retained('Kumar Kushagra'), retained('Manav Suthar'),
            retained('Mohammed Siraj'), retained('Arshad Khan'), retained('Nishant Sindhu'),
            retained('Prasidh Krishna'), retained('R Sai Kishore'), retained('Rahul Tewatia'),
            retained('Rashid Khan', 0, true), retained('B Sai Sudharsan'), retained('M Shahrukh Khan'),
            retained('Shubman Gill'), retained('Washington Sundar')
        ]
    },
    {
        id: 'kkr',
        name: 'Kolkata Knight Riders',
        color: '#3A225D', // Purple
        budget: 6430,
        spent: 0,
        squad: [
            retained('Ajinkya Rahane'), retained('Angkrish Raghuvanshi'), retained('Anukul Roy'),
            retained('Harshit Rana'), retained('Manish Pandey'), retained('Ramandeep Singh'),
            retained('Rinku Singh'), retained('Rovman Powell', 0, true), retained('Sunil Narine', 0, true),
            retained('Umran Malik'), retained('Vaibhav Arora'), retained('Varun Chakravarthy')
        ]
    },
    {
        id: 'lsg',
        name: 'Lucknow Super Giants',
        color: '#0084CA', // Cyan/Blue
        budget: 2295,
        spent: 0,
        squad: [
            retained('Abdul Samad'), retained('Aiden Markram', 0, true), retained('Akash Singh'),
            retained('Arjun Tendulkar'), retained('Arshin Kulkarni'), retained('Avesh Khan'),
            retained('Ayush Badoni'), retained('Digvesh Rathi'), retained('Himmat Singh'),
            retained('Manimaran Siddharth'), retained('Matthew Breetzke', 0, true), retained('Mayank Yadav'),
            retained('Mohammed Shami'), retained('Mitchell Marsh', 0, true), retained('Mohsin Khan'),
            retained('Nicholas Pooran', 0, true), retained('Prince Yadav'), retained('Rishabh Pant'),
            retained('Shahbaz Ahmed')
        ]
    },
    {
        id: 'mi',
        name: 'Mumbai Indians',
        color: '#004BA0', // Blue
        budget: 275,
        spent: 0,
        squad: [
            retained('Shardul Thakur'), retained('Sherfane Rutherford', 0, true), retained('Mayank Markande'),
            retained('Allah Ghazanfar', 0, true), retained('Ashwani Kumar'), retained('Corbin Bosch', 0, true),
            retained('Deepak Chahar'), retained('Hardik Pandya'), retained('Jasprit Bumrah'),
            retained('Mitchell Santner', 0, true), retained('Naman Dhir'), retained('Raghu Sharma'),
            retained('Raj Bawa'), retained('Robin Minz'), retained('Rohit Sharma'),
            retained('Ryan Rickelton', 0, true), retained('Suryakumar Yadav'), retained('Tilak Varma'),
            retained('Trent Boult', 0, true), retained('Will Jacks', 0, true)
        ]
    },
    {
        id: 'pbks',
        name: 'Punjab Kings',
        color: '#DD1F2D', // Red
        budget: 1150,
        spent: 0,
        squad: [
            retained('Arshdeep Singh'), retained('Azmatullah Omarzai', 0, true), retained('Harnoor Singh Pannu'),
            retained('Harpreet Brar'), retained('Lockie Ferguson', 0, true), retained('Marco Jansen', 0, true),
            retained('Marcus Stoinis', 0, true), retained('Mitch Owen', 0, true), retained('Musheer Khan'),
            retained('Nehal Wadhera'), retained('Prabhsimran Singh'), retained('Priyansh Arya'),
            retained('Pyla Avinash'), retained('Shashank Singh'), retained('Shreyas Iyer'),
            retained('Suryansh Shedge'), retained('Vishnu Vinod'), retained('Vyshak Vijaykumar'),
            retained('Xavier Bartlett', 0, true), retained('Yash Thakur'), retained('Yuzvendra Chahal')
        ]
    },
    {
        id: 'rr',
        name: 'Rajasthan Royals',
        color: '#EA1B85', // Pink
        budget: 1605,
        spent: 0,
        squad: [
            retained('Donovan Ferreira', 0, true), retained('Ravindra Jadeja'), retained('Sam Curran', 0, true),
            retained('Dhruv Jurel'), retained('Jofra Archer', 0, true), retained('Kwena Maphaka', 0, true),
            retained('Lhuan-Dre Pretorius', 0, true), retained('Nandre Burger', 0, true), retained('Riyan Parag'),
            retained('Sandeep Sharma'), retained('Shimron Hetmyer', 0, true), retained('Shubham Dubey'),
            retained('Tushar Deshpande'), retained('Vaibhav Suryavanshi'), retained('Yashasvi Jaiswal'),
            retained('Yudhvir Singh Charak')
        ]
    },
    {
        id: 'rcb',
        name: 'Royal Challengers Bengaluru',
        color: '#2B2A29', // Black/Red
        budget: 1640,
        spent: 0,
        squad: [
            retained('Virat Kohli'), retained('Phil Salt', 0, true), retained('Devdutt Padikkal'),
            retained('Rajat Patidar'), retained('Tim David', 0, true), retained('Krunal Pandya'),
            retained('Romario Shepherd', 0, true), retained('Jitesh Sharma'), retained('Bhuvneshwar Kumar'),
            retained('Yash Dayal'), retained('Josh Hazlewood', 0, true), retained('Suyash Sharma'),
            retained('Abhinandan Singh'), retained('Jacob Bethell', 0, true), retained('Nuwan Thushara', 0, true),
            retained('Rasikh Dar'), retained('Swapnil Singh')
        ]
    },
    {
        id: 'srh',
        name: 'Sunrisers Hyderabad',
        color: '#F26522', // Orange
        budget: 2550,
        spent: 0,
        squad: [
            retained('Abhishek Sharma'), retained('Aniket Verma'), retained('Brydon Carse', 0, true),
            retained('Eshan Malinga', 0, true), retained('Harsh Dubey'), retained('Harshal Patel'),
            retained('Heinrich Klaasen', 0, true), retained('Ishan Kishan'), retained('Jaydev Unadkat'),
            retained('Kamindu Mendis', 0, true), retained('Nitish Kumar Reddy'), retained('Pat Cummins', 0, true),
            retained('R Smaran'), retained('Travis Head', 0, true), retained('Zeeshan Ansari')
        ]
    }
];
