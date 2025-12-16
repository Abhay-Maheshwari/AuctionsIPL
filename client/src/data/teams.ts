export interface IPLTeam {
    id: string;
    name: string;
    color: string;
}

export const IPL_TEAMS: IPLTeam[] = [
    { id: 'csk', name: 'Chennai Super Kings', color: '#F9CD05' },
    { id: 'dc', name: 'Delhi Capitals', color: '#17449B' },
    { id: 'gt', name: 'Gujarat Titans', color: '#1B2133' },
    { id: 'kkr', name: 'Kolkata Knight Riders', color: '#3A225D' },
    { id: 'lsg', name: 'Lucknow Super Giants', color: '#0084CA' },
    { id: 'mi', name: 'Mumbai Indians', color: '#004BA0' },
    { id: 'pbks', name: 'Punjab Kings', color: '#DD1F2D' },
    { id: 'rr', name: 'Rajasthan Royals', color: '#EA1B85' },
    { id: 'rcb', name: 'Royal Challengers Bengaluru', color: '#2B2A29' },
    { id: 'srh', name: 'Sunrisers Hyderabad', color: '#F26522' },
];
