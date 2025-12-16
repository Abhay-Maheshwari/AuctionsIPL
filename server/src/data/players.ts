// IPL Player Database - TATA IPL 2026 Auction List
export interface IPLPlayer {
    id: string;
    name: string;
    role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
    country: string;
    basePrice: number; // in lakhs
    imageUrl: string;
    stats: {
        matches: number;
        runs?: number;
        wickets?: number;
        average?: number;
        strikeRate?: number;
        economy?: number;
    };
    tags: string[];
    isOverseas: boolean;
    setNo: number;
    setCode: string;
}

export const iplPlayers: IPLPlayer[] = [
    // SET 1: BA1
    { id: 'devon-conway', name: 'Devon Conway', role: 'Batsman', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 1, setCode: 'BA1', imageUrl: '/players/default.jpg', stats: { matches: 62 }, tags: ['Capped'] },
    { id: 'jake-fraser-mcgurk', name: 'Jake Fraser-McGurk', role: 'Batsman', country: 'Australia', basePrice: 200, isOverseas: true, setNo: 1, setCode: 'BA1', imageUrl: '/players/default.jpg', stats: { matches: 15 }, tags: ['Capped'] },
    { id: 'cameron-green', name: 'Cameron Green', role: 'Batsman', country: 'Australia', basePrice: 200, isOverseas: true, setNo: 1, setCode: 'BA1', imageUrl: '/players/default.jpg', stats: { matches: 21 }, tags: ['Capped'] },
    { id: 'sarfaraz-khan', name: 'Sarfaraz Khan', role: 'Batsman', country: 'India', basePrice: 75, isOverseas: false, setNo: 1, setCode: 'BA1', imageUrl: '/players/default.jpg', stats: { matches: 50 }, tags: ['Capped'] },
    { id: 'david-miller', name: 'David Miller', role: 'Batsman', country: 'South Africa', basePrice: 200, isOverseas: true, setNo: 1, setCode: 'BA1', imageUrl: '/players/default.jpg', stats: { matches: 141 }, tags: ['Capped'] },
    { id: 'prithvi-shaw', name: 'Prithvi Shaw', role: 'Batsman', country: 'India', basePrice: 75, isOverseas: false, setNo: 1, setCode: 'BA1', imageUrl: '/players/default.jpg', stats: { matches: 79 }, tags: ['Capped'] },

    // SET 2: AL1
    { id: 'gus-atkinson', name: 'Gus Atkinson', role: 'All-rounder', country: 'England', basePrice: 200, isOverseas: true, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 4 }, tags: ['Capped'] },
    { id: 'wanindu-hasaranga', name: 'Wanindu Hasaranga', role: 'All-rounder', country: 'Sri Lanka', basePrice: 200, isOverseas: true, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 37 }, tags: ['Capped'] },
    { id: 'deepak-hooda', name: 'Deepak Hooda', role: 'All-rounder', country: 'India', basePrice: 75, isOverseas: false, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 125 }, tags: ['Capped'] },
    { id: 'venkatesh-iyer', name: 'Venkatesh Iyer', role: 'All-rounder', country: 'India', basePrice: 200, isOverseas: false, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 62 }, tags: ['Capped'] },
    { id: 'liam-livingstone', name: 'Liam Livingstone', role: 'All-rounder', country: 'England', basePrice: 200, isOverseas: true, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 49 }, tags: ['Capped'] },
    { id: 'wiaan-mulder', name: 'Wiaan Mulder', role: 'All-rounder', country: 'South Africa', basePrice: 100, isOverseas: true, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'rachin-ravindra', name: 'Rachin Ravindra', role: 'All-rounder', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 2, setCode: 'AL1', imageUrl: '/players/default.jpg', stats: { matches: 18 }, tags: ['Capped'] },

    // SET 3: WK1
    { id: 'finn-allen', name: 'Finn Allen', role: 'Wicket-keeper', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 52 }, tags: ['Capped'] },
    { id: 'jonny-bairstow', name: 'Jonny Bairstow', role: 'Wicket-keeper', country: 'England', basePrice: 100, isOverseas: true, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 52 }, tags: ['Capped'] },
    { id: 'k.s.-bharat', name: 'K.S. Bharat', role: 'Wicket-keeper', country: 'India', basePrice: 75, isOverseas: false, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 10 }, tags: ['Capped'] },
    { id: 'quinton-de-kock', name: 'Quinton De Kock', role: 'Wicket-keeper', country: 'South Africa', basePrice: 100, isOverseas: true, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 115 }, tags: ['Capped'] },
    { id: 'ben-duckett', name: 'Ben Duckett', role: 'Wicket-keeper', country: 'England', basePrice: 200, isOverseas: true, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 31 }, tags: ['Capped'] },
    { id: 'rahmanullah-gurbaz', name: 'Rahmanullah Gurbaz', role: 'Wicket-keeper', country: 'Afghanistan', basePrice: 150, isOverseas: true, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 19 }, tags: ['Capped'] },
    { id: 'jamie-smith', name: 'Jamie Smith', role: 'Wicket-keeper', country: 'England', basePrice: 200, isOverseas: true, setNo: 3, setCode: 'WK1', imageUrl: '/players/default.jpg', stats: { matches: 19 }, tags: ['Capped'] },

    // SET 4: FA1
    { id: 'gerald-coetzee', name: 'Gerald Coetzee', role: 'Bowler', country: 'South Africa', basePrice: 200, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 14 }, tags: ['Capped'] },
    { id: 'akash-deep', name: 'Akash Deep', role: 'Bowler', country: 'India', basePrice: 100, isOverseas: false, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 14 }, tags: ['Capped'] },
    { id: 'jacob-duffy', name: 'Jacob Duffy', role: 'Bowler', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 38 }, tags: ['Capped'] },
    { id: 'fazalhaq-farooqi', name: 'Fazalhaq Farooqi', role: 'Bowler', country: 'Afghanistan', basePrice: 100, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Capped'] },
    { id: 'matt-henry', name: 'Matt Henry', role: 'Bowler', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 6 }, tags: ['Capped'] },
    { id: 'spencer-johnson', name: 'Spencer Johnson', role: 'Bowler', country: 'Australia', basePrice: 150, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 9 }, tags: ['Capped'] },
    { id: 'shivam-mavi', name: 'Shivam Mavi', role: 'Bowler', country: 'India', basePrice: 75, isOverseas: false, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 32 }, tags: ['Capped'] },
    { id: 'anrich-nortje', name: 'Anrich Nortje', role: 'Bowler', country: 'South Africa', basePrice: 200, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 48 }, tags: ['Capped'] },
    { id: 'matheesha-pathirana', name: 'Matheesha Pathirana', role: 'Bowler', country: 'Sri Lanka', basePrice: 200, isOverseas: true, setNo: 4, setCode: 'FA1', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Capped'] },

    // SET 5: SP1
    { id: 'ravi-bishnoi', name: 'Ravi Bishnoi', role: 'Bowler', country: 'India', basePrice: 200, isOverseas: false, setNo: 5, setCode: 'SP1', imageUrl: '/players/default.jpg', stats: { matches: 11 }, tags: ['Capped'] },
    { id: 'rahul-chahar', name: 'Rahul Chahar', role: 'Bowler', country: 'India', basePrice: 100, isOverseas: false, setNo: 5, setCode: 'SP1', imageUrl: '/players/default.jpg', stats: { matches: 37 }, tags: ['Capped'] },
    { id: 'akeal-hosein', name: 'Akeal Hosein', role: 'Bowler', country: 'West Indies', basePrice: 200, isOverseas: true, setNo: 5, setCode: 'SP1', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'mujeeb-rahman', name: 'Mujeeb Rahman', role: 'Bowler', country: 'Afghanistan', basePrice: 200, isOverseas: true, setNo: 5, setCode: 'SP1', imageUrl: '/players/default.jpg', stats: { matches: 20 }, tags: ['Capped'] },
    { id: 'maheesh-theekshana', name: 'Maheesh Theekshana', role: 'Bowler', country: 'Sri Lanka', basePrice: 200, isOverseas: true, setNo: 5, setCode: 'SP1', imageUrl: '/players/default.jpg', stats: { matches: 38 }, tags: ['Capped'] },

    // SET 6: UBA1
    { id: 'aarya-desai', name: 'Aarya Desai', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 6, setCode: 'UBA1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'yash-dhull', name: 'Yash Dhull', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 6, setCode: 'UBA1', imageUrl: '/players/default.jpg', stats: { matches: 4 }, tags: ['Uncapped'] },
    { id: 'abhinav-manohar', name: 'Abhinav Manohar', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 6, setCode: 'UBA1', imageUrl: '/players/default.jpg', stats: { matches: 26 }, tags: ['Uncapped'] },
    { id: 'anmolpreet-singh', name: 'Anmolpreet Singh', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 6, setCode: 'UBA1', imageUrl: '/players/default.jpg', stats: { matches: 9 }, tags: ['Uncapped'] },
    { id: 'atharva-taide', name: 'Atharva Taide', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 6, setCode: 'UBA1', imageUrl: '/players/default.jpg', stats: { matches: 10 }, tags: ['Uncapped'] },
    { id: 'abhinav-tejrana', name: 'Abhinav Tejrana', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 6, setCode: 'UBA1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 7: UAL1
    { id: 'auqib-dar', name: 'Auqib Dar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rajvardhan-hangargekar', name: 'Rajvardhan Hangargekar', role: 'All-rounder', country: 'India', basePrice: 40, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },
    { id: 'tanush-kotian', name: 'Tanush Kotian', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },
    { id: 'shivang-kumar', name: 'Shivang Kumar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mahipal-lomror', name: 'Mahipal Lomror', role: 'All-rounder', country: 'India', basePrice: 50, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 40 }, tags: ['Uncapped'] },
    { id: 'kamlesh-nagarkoti', name: 'Kamlesh Nagarkoti', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Uncapped'] },
    { id: 'vijay-shankar', name: 'Vijay Shankar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 78 }, tags: ['Uncapped'] },
    { id: 'sanvir-singh', name: 'Sanvir Singh', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 6 }, tags: ['Uncapped'] },
    { id: 'edhen-tom', name: 'Edhen Tom', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'prashant-veer', name: 'Prashant Veer', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 7, setCode: 'UAL1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 8: UWK1
    { id: 'ruchit-ahir', name: 'Ruchit Ahir', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 8, setCode: 'UWK1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vansh-bedi', name: 'Vansh Bedi', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 8, setCode: 'UWK1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mukul-choudhary', name: 'Mukul Choudhary', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 8, setCode: 'UWK1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'tushar-raheja', name: 'Tushar Raheja', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 8, setCode: 'UWK1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kartik-sharma', name: 'Kartik Sharma', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 8, setCode: 'UWK1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'tejasvi-singh', name: 'Tejasvi Singh', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 8, setCode: 'UWK1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 9: UFA1
    { id: 'raj-limbani', name: 'Raj Limbani', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'akash-madhwal', name: 'Akash Madhwal', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 15 }, tags: ['Uncapped'] },
    { id: 'sushant-mishra', name: 'Sushant Mishra', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ashok-sharma', name: 'Ashok Sharma', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'simarjeet-singh', name: 'Simarjeet Singh', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 14 }, tags: ['Uncapped'] },
    { id: 'naman-tiwari', name: 'Naman Tiwari', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kartik-tyagi', name: 'Kartik Tyagi', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 9, setCode: 'UFA1', imageUrl: '/players/default.jpg', stats: { matches: 20 }, tags: ['Uncapped'] },

    // SET 10: USP1
    { id: 'yash-raj-punja', name: 'Yash Raj Punja', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vignesh-puthur', name: 'Vignesh Puthur', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 5 }, tags: ['Uncapped'] },
    { id: 'karn-sharma', name: 'Karn Sharma', role: 'Bowler', country: 'India', basePrice: 50, isOverseas: false, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 90 }, tags: ['Uncapped'] },
    { id: 'shivam-shukla', name: 'Shivam Shukla', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kumar-kartikeya-singh', name: 'Kumar Kartikeya Singh', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 16 }, tags: ['Uncapped'] },
    { id: 'prashant-solanki', name: 'Prashant Solanki', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },
    { id: 'wahidullah-zadran', name: 'Wahidullah Zadran', role: 'Bowler', country: 'Afghanistan', basePrice: 30, isOverseas: true, setNo: 10, setCode: 'USP1', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 11: BA2
    { id: 'mayank-agarawal', name: 'Mayank Agarawal', role: 'Batsman', country: 'India', basePrice: 75, isOverseas: false, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 131 }, tags: ['Capped'] },
    { id: 'sediqullah-atal', name: 'Sediqullah Atal', role: 'Batsman', country: 'Afghanistan', basePrice: 75, isOverseas: true, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'ackeem-auguste', name: 'Ackeem Auguste', role: 'Batsman', country: 'West Indies', basePrice: 75, isOverseas: true, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 9 }, tags: ['Capped'] },
    { id: 'reeza-hendricks', name: 'Reeza Hendricks', role: 'Batsman', country: 'South Africa', basePrice: 100, isOverseas: true, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 87 }, tags: ['Capped'] },
    { id: 'pathum-nissanka', name: 'Pathum Nissanka', role: 'Batsman', country: 'Sri Lanka', basePrice: 75, isOverseas: true, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 78 }, tags: ['Capped'] },
    { id: 'tim-robinson', name: 'Tim Robinson', role: 'Batsman', country: 'New Zealand', basePrice: 75, isOverseas: true, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 24 }, tags: ['Capped'] },
    { id: 'steve-smith', name: 'Steve Smith', role: 'Batsman', country: 'Australia', basePrice: 200, isOverseas: true, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 67 }, tags: ['Capped'] },
    { id: 'rahul-tripathi', name: 'Rahul Tripathi', role: 'Batsman', country: 'India', basePrice: 75, isOverseas: false, setNo: 11, setCode: 'BA2', imageUrl: '/players/default.jpg', stats: { matches: 100 }, tags: ['Capped'] },

    // SET 12: AL2
    { id: 'sean-abbott', name: 'Sean Abbott', role: 'All-rounder', country: 'Australia', basePrice: 200, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Capped'] },
    { id: 'michael-bracewell', name: 'Michael Bracewell', role: 'All-rounder', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 47 }, tags: ['Capped'] },
    { id: 'ben-dwarshuis', name: 'Ben Dwarshuis', role: 'All-rounder', country: 'Australia', basePrice: 100, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 13 }, tags: ['Capped'] },
    { id: 'zak-foulkes', name: 'Zak Foulkes', role: 'All-rounder', country: 'New Zealand', basePrice: 75, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 6 }, tags: ['Capped'] },
    { id: 'jason-holder', name: 'Jason Holder', role: 'All-rounder', country: 'West Indies', basePrice: 200, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 86 }, tags: ['Capped'] },
    { id: 'daryl-mitchell', name: 'Daryl Mitchell', role: 'All-rounder', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 90 }, tags: ['Capped'] },
    { id: 'daniel-sams', name: 'Daniel Sams', role: 'All-rounder', country: 'Australia', basePrice: 100, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 10 }, tags: ['Capped'] },
    { id: 'dasun-shanaka', name: 'Dasun Shanaka', role: 'All-rounder', country: 'Sri Lanka', basePrice: 75, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 118 }, tags: ['Capped'] },
    { id: 'matthew-short', name: 'Matthew Short', role: 'All-rounder', country: 'Australia', basePrice: 150, isOverseas: true, setNo: 12, setCode: 'AL2', imageUrl: '/players/default.jpg', stats: { matches: 18 }, tags: ['Capped'] },

    // SET 13: WK2
    { id: 'tom-banton', name: 'Tom Banton', role: 'Wicket-keeper', country: 'England', basePrice: 200, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Capped'] },
    { id: 'jordan-cox', name: 'Jordan Cox', role: 'Wicket-keeper', country: 'England', basePrice: 75, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Capped'] },
    { id: 'shai-hope', name: 'Shai Hope', role: 'Wicket-keeper', country: 'West Indies', basePrice: 200, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 58 }, tags: ['Capped'] },
    { id: 'josh-inglis', name: 'Josh Inglis', role: 'Wicket-keeper', country: 'Australia', basePrice: 200, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 41 }, tags: ['Capped'] },
    { id: 'ben-mcdermott', name: 'Ben McDermott', role: 'Wicket-keeper', country: 'Australia', basePrice: 75, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 25 }, tags: ['Capped'] },
    { id: 'kusal-mendis', name: 'Kusal Mendis', role: 'Wicket-keeper', country: 'Sri Lanka', basePrice: 75, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 94 }, tags: ['Capped'] },
    { id: 'kusal-perera', name: 'Kusal Perera', role: 'Wicket-keeper', country: 'Sri Lanka', basePrice: 100, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 93 }, tags: ['Capped'] },
    { id: 'tim-seifert', name: 'Tim Seifert', role: 'Wicket-keeper', country: 'New Zealand', basePrice: 150, isOverseas: true, setNo: 13, setCode: 'WK2', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Capped'] },

    // SET 14: FA2
    { id: 'kyle-jamieson', name: 'Kyle Jamieson', role: 'Bowler', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 23 }, tags: ['Capped'] },
    { id: 'saqib-mahmood', name: 'Saqib Mahmood', role: 'Bowler', country: 'England', basePrice: 150, isOverseas: true, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 19 }, tags: ['Capped'] },
    { id: 'adam-milne', name: 'Adam Milne', role: 'Bowler', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 10 }, tags: ['Capped'] },
    { id: 'lungisani-ngidi', name: 'Lungisani Ngidi', role: 'Bowler', country: 'South Africa', basePrice: 200, isOverseas: true, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 52 }, tags: ['Capped'] },
    { id: 'william-orourke', name: 'William Orourke', role: 'Bowler', country: 'New Zealand', basePrice: 200, isOverseas: true, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 7 }, tags: ['Capped'] },
    { id: 'mustafizur-rahman', name: 'Mustafizur Rahman', role: 'Bowler', country: 'Bangladesh', basePrice: 200, isOverseas: true, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 124 }, tags: ['Capped'] },
    { id: 'chetan-sakariya', name: 'Chetan Sakariya', role: 'Bowler', country: 'India', basePrice: 75, isOverseas: false, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Capped'] },
    { id: 'kuldeep-sen', name: 'Kuldeep Sen', role: 'Bowler', country: 'India', basePrice: 75, isOverseas: false, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Capped'] },
    { id: 'umesh-yadav', name: 'Umesh Yadav', role: 'Bowler', country: 'India', basePrice: 150, isOverseas: false, setNo: 14, setCode: 'FA2', imageUrl: '/players/default.jpg', stats: { matches: 9 }, tags: ['Capped'] },

    // SET 15: SP2
    { id: 'qais-ahmad', name: 'Qais Ahmad', role: 'Bowler', country: 'Afghanistan', basePrice: 75, isOverseas: true, setNo: 15, setCode: 'SP2', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Capped'] },
    { id: 'rishad-hossain', name: 'Rishad Hossain', role: 'Bowler', country: 'Bangladesh', basePrice: 75, isOverseas: true, setNo: 15, setCode: 'SP2', imageUrl: '/players/default.jpg', stats: { matches: 54 }, tags: ['Capped'] },
    { id: 'mohammad-waqar-salamkheil', name: 'Mohammad Waqar Salamkheil', role: 'Bowler', country: 'Afghanistan', basePrice: 100, isOverseas: true, setNo: 15, setCode: 'SP2', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'viyaskanth-vijayakanth', name: 'Viyaskanth Vijayakanth', role: 'Bowler', country: 'Sri Lanka', basePrice: 75, isOverseas: true, setNo: 15, setCode: 'SP2', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Capped'] },

    // SET 16: UBA2
    { id: 'ankit-kumar', name: 'Ankit Kumar', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rohan-kunnummal', name: 'Rohan Kunnummal', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'danish-malewar', name: 'Danish Malewar', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'pukhraj-mann', name: 'Pukhraj Mann', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'salman-nizar', name: 'Salman Nizar', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'aman-rao-perala', name: 'Aman Rao Perala', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'akshat-raghuwanshi', name: 'Akshat Raghuwanshi', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'manan-vohra', name: 'Manan Vohra', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 16, setCode: 'UBA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 17: UAL2
    { id: 'yuvraj-chaudhary', name: 'Yuvraj Chaudhary', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'satvik-deswal', name: 'Satvik Deswal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'aman-khan', name: 'Aman Khan', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Uncapped'] },
    { id: 'darshan-nalkande', name: 'Darshan Nalkande', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 5 }, tags: ['Uncapped'] },
    { id: 'vicky-ostwal', name: 'Vicky Ostwal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sairaj-patil', name: 'Sairaj Patil', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'suyash-prabhudessai', name: 'Suyash Prabhudessai', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 11 }, tags: ['Uncapped'] },
    { id: 'mayank-rawat', name: 'Mayank Rawat', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'harsh-tyagi', name: 'Harsh Tyagi', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mangesh-yadav', name: 'Mangesh Yadav', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 17, setCode: 'UAL2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 18: UWK2
    { id: 'salil-arora', name: 'Salil Arora', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ricky-bhui', name: 'Ricky Bhui', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rahul-buddhi', name: 'Rahul Buddhi', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'saurav-chuahan', name: 'Saurav Chuahan', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Uncapped'] },
    { id: 'yashvardhan-dalal', name: 'Yashvardhan Dalal', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'abhishek-pathak', name: 'Abhishek Pathak', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kunal-rathore', name: 'Kunal Rathore', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ravi-singh', name: 'Ravi Singh', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 18, setCode: 'UWK2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 19: UFA2
    { id: 'k.m-asif', name: 'K.M Asif', role: 'Bowler', country: 'India', basePrice: 40, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 7 }, tags: ['Uncapped'] },
    { id: 'sakib-hussain', name: 'Sakib Hussain', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mohammad-izhar', name: 'Mohammad Izhar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vidwath-kaverappa', name: 'Vidwath Kaverappa', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },
    { id: 'vijay-kumar', name: 'Vijay Kumar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vidyadhar-patil', name: 'Vidyadhar Patil', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'pv.satyanarayana-raju', name: 'PV.Satyanarayana Raju', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },
    { id: 'onkar-tarmale', name: 'Onkar Tarmale', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'prithviraj-yarra', name: 'Prithviraj Yarra', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 19, setCode: 'UFA2', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },

    // SET 20: USP2
    { id: 'shubham-agrawal', name: 'Shubham Agrawal', role: 'Bowler', country: 'India', basePrice: 40, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'murugan-ashwin', name: 'Murugan Ashwin', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 44 }, tags: ['Uncapped'] },
    { id: 'tejas-baroka', name: 'Tejas Baroka', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },
    { id: 'k.c.-cariappa', name: 'K.C. Cariappa', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 11 }, tags: ['Uncapped'] },
    { id: 'kartik-chadha', name: 'Kartik Chadha', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'pravin-dubey', name: 'Pravin Dubey', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 5 }, tags: ['Uncapped'] },
    { id: 'mohit-rathee', name: 'Mohit Rathee', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },
    { id: 'himanshu-sharma', name: 'Himanshu Sharma', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },
    { id: 'bailapudi-yeswanth', name: 'Bailapudi Yeswanth', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 20, setCode: 'USP2', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 21: AL3
    { id: 'rehan-ahmed', name: 'Rehan Ahmed', role: 'All-rounder', country: 'England', basePrice: 75, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Capped'] },
    { id: 'cooper-connolly', name: 'Cooper Connolly', role: 'All-rounder', country: 'Australia', basePrice: 200, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 6 }, tags: ['Capped'] },
    { id: 'tom-curran', name: 'Tom Curran', role: 'All-rounder', country: 'England', basePrice: 200, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 30 }, tags: ['Capped'] },
    { id: 'bevon-john-jacobs', name: 'Bevon-John Jacobs', role: 'All-rounder', country: 'New Zealand', basePrice: 75, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Capped'] },
    { id: 'daniel-lawrence', name: 'Daniel Lawrence', role: 'All-rounder', country: 'England', basePrice: 200, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 14 }, tags: ['Capped'] },
    { id: 'george-linde', name: 'George Linde', role: 'All-rounder', country: 'South Africa', basePrice: 100, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 25 }, tags: ['Capped'] },
    { id: 'gulbadin-naib', name: 'Gulbadin Naib', role: 'All-rounder', country: 'Afghanistan', basePrice: 100, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 78 }, tags: ['Capped'] },
    { id: 'william-sutherland', name: 'William Sutherland', role: 'All-rounder', country: 'Australia', basePrice: 100, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Capped'] },
    { id: 'beau-webster', name: 'Beau Webster', role: 'All-rounder', country: 'Australia', basePrice: 125, isOverseas: true, setNo: 21, setCode: 'AL3', imageUrl: '/players/default.jpg', stats: { matches: 7 }, tags: ['Capped'] },

    // SET 22: FA3
    { id: 'taskin-ahmed', name: 'Taskin Ahmed', role: 'Bowler', country: 'Bangladesh', basePrice: 75, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 86 }, tags: ['Capped'] },
    { id: 'richard-gleeson', name: 'Richard Gleeson', role: 'Bowler', country: 'England', basePrice: 75, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Capped'] },
    { id: 'alzarri-joseph', name: 'Alzarri Joseph', role: 'Bowler', country: 'West Indies', basePrice: 200, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 45 }, tags: ['Capped'] },
    { id: 'shamar-joseph', name: 'Shamar Joseph', role: 'Bowler', country: 'West Indies', basePrice: 75, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Capped'] },
    { id: 'riley-meredith', name: 'Riley Meredith', role: 'Bowler', country: 'Australia', basePrice: 150, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 18 }, tags: ['Capped'] },
    { id: 'jhye-richardson', name: 'Jhye Richardson', role: 'Bowler', country: 'Australia', basePrice: 150, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 18 }, tags: ['Capped'] },
    { id: 'navdeep-saini', name: 'Navdeep Saini', role: 'Bowler', country: 'India', basePrice: 75, isOverseas: false, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 11 }, tags: ['Capped'] },
    { id: 'naveen-ul-haq', name: 'Naveen Ul Haq', role: 'Bowler', country: 'Afghanistan', basePrice: 200, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 18 }, tags: ['Capped'] },
    { id: 'luke-wood', name: 'Luke Wood', role: 'Bowler', country: 'England', basePrice: 75, isOverseas: true, setNo: 22, setCode: 'FA3', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Capped'] },

    // SET 23: UBA3
    { id: 'kunal-chandela', name: 'Kunal Chandela', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ayush-doseja', name: 'Ayush Doseja', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'qamran-iqbal', name: 'Qamran Iqbal', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'm.dheeraj-kumar', name: 'M.Dheeraj Kumar', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'bhanu-pania', name: 'Bhanu Pania', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sahil-parakh', name: 'Sahil Parakh', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'arsh-kabir-ranga', name: 'Arsh Kabir Ranga', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'adarsh-singh', name: 'Adarsh Singh', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 23, setCode: 'UBA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 24: UAL3
    { id: 'manoj-bhandage', name: 'Manoj Bhandage', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mayank-dagar', name: 'Mayank Dagar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'raghav-goyal', name: 'Raghav Goyal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'manvanth-kumar', name: 'Manvanth Kumar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'abid-mushtaq', name: 'Abid Mushtaq', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'jalaj-saxena', name: 'Jalaj Saxena', role: 'All-rounder', country: 'India', basePrice: 40, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'atit-sheth', name: 'Atit Sheth', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'hritik-shokeen', name: 'Hritik Shokeen', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'jagadeesha-suchith', name: 'Jagadeesha Suchith', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'tanay-thyagarajann', name: 'Tanay Thyagarajann', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 24, setCode: 'UAL3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 25: UWK3
    { id: 'joe-clarke', name: 'Joe Clarke', role: 'Wicket-keeper', country: 'England', basePrice: 50, isOverseas: true, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'connor-esterhuizen', name: 'Connor Esterhuizen', role: 'Wicket-keeper', country: 'South Africa', basePrice: 30, isOverseas: true, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ajitesh-guruswamy', name: 'Ajitesh Guruswamy', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'siddharth-joon', name: 'Siddharth Joon', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'tom-moores', name: 'Tom Moores', role: 'Wicket-keeper', country: 'England', basePrice: 40, isOverseas: true, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'bipin-saurabh', name: 'Bipin Saurabh', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vishnu-solanki', name: 'Vishnu Solanki', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'hardik-tamore', name: 'Hardik Tamore', role: 'Wicket-keeper', country: 'India', basePrice: 30, isOverseas: false, setNo: 25, setCode: 'UWK3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 26: UFA3
    { id: 'sayan-ghosh', name: 'Sayan Ghosh', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'money-grewal', name: 'Money Grewal', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'arpit-guleria', name: 'Arpit Guleria', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sunil-kumar', name: 'Sunil Kumar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'tristan-luus', name: 'Tristan Luus', role: 'Bowler', country: 'South Africa', basePrice: 30, isOverseas: true, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'divesh-sharma', name: 'Divesh Sharma', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'abhilash-shetty', name: 'Abhilash Shetty', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'irfan-umair', name: 'Irfan Umair', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kuldip-yadav', name: 'Kuldip Yadav', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 26, setCode: 'UFA3', imageUrl: '/players/default.jpg', stats: { matches: 3 }, tags: ['Uncapped'] },

    // SET 27: USP3
    { id: 'manan-bhardwaj', name: 'Manan Bhardwaj', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shreyas-chavan', name: 'Shreyas Chavan', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'parikshit-dhanak', name: 'Parikshit Dhanak', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'chintal-gandhi', name: 'Chintal Gandhi', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'dharmendrasinh-jadeja', name: 'Dharmendrasinh Jadeja', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'amit-kumar', name: 'Amit Kumar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vishal-nishad', name: 'Vishal Nishad', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'saumy-pandey', name: 'Saumy Pandey', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'jhathavedh-subramanyan', name: 'Jhathavedh Subramanyan', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 27, setCode: 'USP3', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 28: AL4
    { id: 'muhammad-abbas', name: 'Muhammad Abbas', role: 'All-rounder', country: 'New Zealand', basePrice: 75, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Capped'] },
    { id: 'charith-asalanka', name: 'Charith Asalanka', role: 'All-rounder', country: 'Sri Lanka', basePrice: 100, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 70 }, tags: ['Capped'] },
    { id: 'roston-chase', name: 'Roston Chase', role: 'All-rounder', country: 'West Indies', basePrice: 125, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 49 }, tags: ['Capped'] },
    { id: 'liam-dawson', name: 'Liam Dawson', role: 'All-rounder', country: 'England', basePrice: 200, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 21 }, tags: ['Capped'] },
    { id: 'george-garton', name: 'George Garton', role: 'All-rounder', country: 'England', basePrice: 75, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 5 }, tags: ['Capped'] },
    { id: 'kyle-mayers', name: 'Kyle Mayers', role: 'All-rounder', country: 'West Indies', basePrice: 125, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 41 }, tags: ['Capped'] },
    { id: 'dwaine-pretorius', name: 'Dwaine Pretorius', role: 'All-rounder', country: 'South Africa', basePrice: 100, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 30 }, tags: ['Capped'] },
    { id: 'nathan-smith', name: 'Nathan Smith', role: 'All-rounder', country: 'New Zealand', basePrice: 75, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Capped'] },
    { id: 'dunith-wellalage', name: 'Dunith Wellalage', role: 'All-rounder', country: 'Sri Lanka', basePrice: 75, isOverseas: true, setNo: 28, setCode: 'AL4', imageUrl: '/players/default.jpg', stats: { matches: 6 }, tags: ['Capped'] },

    // SET 29: FA4
    { id: 'jason-behrendorff', name: 'Jason Behrendorff', role: 'Bowler', country: 'Australia', basePrice: 150, isOverseas: true, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 17 }, tags: ['Capped'] },
    { id: 'tanzim-hasan-sakib', name: 'Tanzim Hasan Sakib', role: 'Bowler', country: 'Bangladesh', basePrice: 75, isOverseas: true, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 39 }, tags: ['Capped'] },
    { id: 'matthew-potts', name: 'Matthew Potts', role: 'Bowler', country: 'England', basePrice: 75, isOverseas: true, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'nahid-rana', name: 'Nahid Rana', role: 'Bowler', country: 'Bangladesh', basePrice: 75, isOverseas: true, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'olly-stone', name: 'Olly Stone', role: 'Bowler', country: 'England', basePrice: 125, isOverseas: true, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Capped'] },
    { id: 'joshua-tongue', name: 'Joshua Tongue', role: 'Bowler', country: 'England', basePrice: 100, isOverseas: true, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Capped'] },
    { id: 'sandeep-warrier', name: 'Sandeep Warrier', role: 'Bowler', country: 'India', basePrice: 75, isOverseas: false, setNo: 29, setCode: 'FA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Capped'] },

    // SET 30: UBA4
    { id: 'sachin-dhas', name: 'Sachin Dhas', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'miles-hammond', name: 'Miles Hammond', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ahammed-imran', name: 'Ahammed Imran', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vishvarajsinh-jadeja', name: 'Vishvarajsinh Jadeja', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ayaz-khan', name: 'Ayaz Khan', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'daniel-lategan', name: 'Daniel Lategan', role: 'Batsman', country: 'England', basePrice: 30, isOverseas: true, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'siddhant-rana', name: 'Siddhant Rana', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'aaron-varghese', name: 'Aaron Varghese', role: 'Batsman', country: 'India', basePrice: 30, isOverseas: false, setNo: 30, setCode: 'UBA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 31: UAL4
    { id: 'atharva-ankolekar', name: 'Atharva Ankolekar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'abdul-bazith', name: 'Abdul Bazith', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },
    { id: 'karan-lal', name: 'Karan Lal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shams-mulani', name: 'Shams Mulani', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },
    { id: 'ripal-patel', name: 'Ripal Patel', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 9 }, tags: ['Uncapped'] },
    { id: 'prince-rai', name: 'Prince Rai', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vivrant-sharma', name: 'Vivrant Sharma', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Uncapped'] },
    { id: 'utkarsh-singh', name: 'Utkarsh Singh', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ayush-vartak', name: 'Ayush Vartak', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sanjay-yadav', name: 'Sanjay Yadav', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 31, setCode: 'UAL4', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },

    // SET 32: UFA4
    { id: 'sayed-irfan-aftab', name: 'Sayed Irfan Aftab', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'esakkimuthu-ayyakutti', name: 'Esakkimuthu Ayyakutti', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'praful-hinge', name: 'Praful Hinge', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'pankaj-jaswal', name: 'Pankaj Jaswal', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kulwant-khejroliya', name: 'Kulwant Khejroliya', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 8 }, tags: ['Uncapped'] },
    { id: 'ravi-kumar', name: 'Ravi Kumar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rajan-kumar', name: 'Rajan Kumar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'safvan-patel', name: 'Safvan Patel', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ishan-porel', name: 'Ishan Porel', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 32, setCode: 'UFA4', imageUrl: '/players/default.jpg', stats: { matches: 1 }, tags: ['Uncapped'] },

    // SET 33: USP4
    { id: 'purav-agarwal', name: 'Purav Agarwal', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'jikku-bright', name: 'Jikku Bright', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'yash-dicholkar', name: 'Yash Dicholkar', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'arab-gul', name: 'Arab Gul', role: 'Bowler', country: 'Afghanistan', basePrice: 40, isOverseas: true, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rakibul-hasan', name: 'Rakibul Hasan', role: 'Bowler', country: 'Bangladesh', basePrice: 30, isOverseas: true, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'traveen-mathew', name: 'Traveen Mathew', role: 'Bowler', country: 'Sri Lanka', basePrice: 30, isOverseas: true, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'naman-pushpak', name: 'Naman Pushpak', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'izaz-sawariya', name: 'Izaz Sawariya', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'roshan-wagshare', name: 'Roshan Wagshare', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 33, setCode: 'USP4', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 34: FA5
    { id: 'wesley-agar', name: 'Wesley Agar', role: 'Bowler', country: 'Australia', basePrice: 75, isOverseas: true, setNo: 34, setCode: 'FA5', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Capped'] },
    { id: 'binura-fernando', name: 'Binura Fernando', role: 'Bowler', country: 'Sri Lanka', basePrice: 75, isOverseas: true, setNo: 34, setCode: 'FA5', imageUrl: '/players/default.jpg', stats: { matches: 4 }, tags: ['Capped'] },
    { id: 'md-shoriful-islam', name: 'Md Shoriful Islam', role: 'Bowler', country: 'Bangladesh', basePrice: 75, isOverseas: true, setNo: 34, setCode: 'FA5', imageUrl: '/players/default.jpg', stats: { matches: 12 }, tags: ['Capped'] },
    { id: 'joshua-little', name: 'Joshua Little', role: 'Bowler', country: 'Ireland', basePrice: 75, isOverseas: true, setNo: 34, setCode: 'FA5', imageUrl: '/players/default.jpg', stats: { matches: 42 }, tags: ['Capped'] },
    { id: 'obed-mccoy', name: 'Obed McCoy', role: 'Bowler', country: 'West Indies', basePrice: 75, isOverseas: true, setNo: 34, setCode: 'FA5', imageUrl: '/players/default.jpg', stats: { matches: 2 }, tags: ['Capped'] },
    { id: 'billy-stanlake', name: 'Billy Stanlake', role: 'Bowler', country: 'Australia', basePrice: 75, isOverseas: true, setNo: 34, setCode: 'FA5', imageUrl: '/players/default.jpg', stats: { matches: 7 }, tags: ['Capped'] },

    // SET 35: UAL5
    { id: 'r.s-ambrish', name: 'R.S Ambrish', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'nikhil-chaudhary', name: 'Nikhil Chaudhary', role: 'All-rounder', country: 'India', basePrice: 40, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'krains-fuletra', name: 'Krains Fuletra', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'macneil-noronha', name: 'Macneil Noronha', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'r-rajkumar', name: 'R Rajkumar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ninad-rathva', name: 'Ninad Rathva', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sunny-sandhu', name: 'Sunny Sandhu', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shivalik-sharma', name: 'Shivalik Sharma', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'siddharth-yadav', name: 'Siddharth Yadav', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'r.sonu-yadav', name: 'R.Sonu Yadav', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 35, setCode: 'UAL5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 36: UFA5
    { id: 'waseem-khanday', name: 'Waseem Khanday', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'atif-mushtaq', name: 'Atif Mushtaq', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'atal-rai', name: 'Atal Rai', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'c.rakshann-readdi', name: 'C.Rakshann Readdi', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'manish-reddy', name: 'Manish Reddy', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'nishanth-saranu', name: 'Nishanth Saranu', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'deependra-singh', name: 'Deependra Singh', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rajat-verma', name: 'Rajat Verma', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rohit-yadav', name: 'Rohit Yadav', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 36, setCode: 'UFA5', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 37: UAL6
    { id: 'emanjot-chahal', name: 'Emanjot Chahal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shubhang-hegde', name: 'Shubhang Hegde', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'bal-krishna', name: 'Bal Krishna', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vihaan-malhotra', name: 'Vihaan Malhotra', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'khilan-patel', name: 'Khilan Patel', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'delano-potgieter', name: 'Delano Potgieter', role: 'All-rounder', country: 'South Africa', basePrice: 30, isOverseas: true, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'hardik-raj', name: 'Hardik Raj', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sarthak-ranjan', name: 'Sarthak Ranjan', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'parth-rekhade', name: 'Parth Rekhade', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'tiaan-van-vuuren', name: 'Tiaan Van Vuuren', role: 'All-rounder', country: 'South Africa', basePrice: 30, isOverseas: true, setNo: 37, setCode: 'UAL6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 38: UFA6
    { id: 'shreevatsha-acharya', name: 'Shreevatsha Acharya', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sadek-hussain', name: 'Sadek Hussain', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shubham-kapse', name: 'Shubham Kapse', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'aaqib-khan', name: 'Aaqib Khan', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sabir-khan', name: 'Sabir Khan', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'bayanda-majola', name: 'Bayanda Majola', role: 'Bowler', country: 'South Africa', basePrice: 30, isOverseas: true, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'srihari-nair', name: 'Srihari Nair', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'brijesh-sharma', name: 'Brijesh Sharma', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'aman-shekhawat', name: 'Aman Shekhawat', role: 'Bowler', country: 'India', basePrice: 30, isOverseas: false, setNo: 38, setCode: 'UFA6', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 39: UAL7
    { id: 'himanshu-bisht', name: 'Himanshu Bisht', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shreyan-chakraborty', name: 'Shreyan Chakraborty', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'kanishk-chouhan', name: 'Kanishk Chouhan', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mayank-gusain', name: 'Mayank Gusain', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'akash-pugazhanthi', name: 'Akash Pugazhanthi', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'abhimanyusingh-rajput', name: 'Abhimanyusingh Rajput', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shubham-rana', name: 'Shubham Rana', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'arpit-rana', name: 'Arpit Rana', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'maramreddy-reddy', name: 'Maramreddy Reddy', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sagar-solanki', name: 'Sagar Solanki', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 39, setCode: 'UAL7', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 40: UAL8
    { id: 'aryaman-singh-dhaliwal', name: 'Aryaman Singh Dhaliwal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'daksh-kamra', name: 'Daksh Kamra', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'vishal-mandwal', name: 'Vishal Mandwal', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'arfaz-mohammad', name: 'Arfaz Mohammad', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'hemang-patel', name: 'Hemang Patel', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'mridul-surroch', name: 'Mridul Surroch', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'anuj-thakral', name: 'Anuj Thakral', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'parth-vats', name: 'Parth Vats', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'lalit-yadav', name: 'Lalit Yadav', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'nitin-sai-yadav', name: 'Nitin Sai Yadav', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 40, setCode: 'UAL8', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 41: UAL9
    { id: 'krish-bhagat', name: 'Krish Bhagat', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'prerit-dutta', name: 'Prerit Dutta', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'sammar-gajjar', name: 'Sammar Gajjar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'nasir-lone', name: 'Nasir Lone', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ishan-mulchandani', name: 'Ishan Mulchandani', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'akhil-scaria', name: 'Akhil Scaria', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'muhammed-sharafuddeen', name: 'Muhammed Sharafuddeen', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'k.ajay-singh', name: 'K.Ajay Singh', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'ritik-tada', name: 'Ritik Tada', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'luckyrajsinh-vaghela', name: 'Luckyrajsinh Vaghela', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 41, setCode: 'UAL9', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },

    // SET 42: UAL10
    { id: 'mohamed-ali', name: 'Mohamed Ali', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'madhav-bajaj', name: 'Madhav Bajaj', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'akshu-bajwa', name: 'Akshu Bajwa', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'varun-raj-singh-bisht', name: 'Varun Raj Singh Bisht', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'rishabh-chauhan', name: 'Rishabh Chauhan', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'jack-edwards', name: 'Jack Edwards', role: 'All-rounder', country: 'Australia', basePrice: 50, isOverseas: true, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'dian-forrester', name: 'Dian Forrester', role: 'All-rounder', country: 'South Africa', basePrice: 30, isOverseas: true, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'dhurmil-matkar', name: 'Dhurmil Matkar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'shiva-singh', name: 'Shiva Singh', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
    { id: 'parikshit-valsangkar', name: 'Parikshit Valsangkar', role: 'All-rounder', country: 'India', basePrice: 30, isOverseas: false, setNo: 42, setCode: 'UAL10', imageUrl: '/players/default.jpg', stats: { matches: 0 }, tags: ['Uncapped'] },
];

export function getPlayerById(id: string): IPLPlayer | undefined {
    return iplPlayers.find(p => p.id === id);
}

export function getPlayersByRole(role: IPLPlayer['role']): IPLPlayer[] {
    return iplPlayers.filter(p => p.role === role);
}

export function shufflePlayers(players: IPLPlayer[]): IPLPlayer[] {
    // Group by Set
    const sets = new Map<number, IPLPlayer[]>();
    players.forEach(p => {
        if (!sets.has(p.setNo)) sets.set(p.setNo, []);
        sets.get(p.setNo)!.push(p);
    });

    // Sort keys by SetNo (ascending)
    const sortedSetNos = Array.from(sets.keys()).sort((a, b) => a - b);

    let queue: IPLPlayer[] = [];
    for (const setNo of sortedSetNos) {
        const group = sets.get(setNo)!;
        // Shuffle within the group
        for (let i = group.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [group[i], group[j]] = [group[j], group[i]];
        }
        queue = queue.concat(group);
    }
    return queue;
}
