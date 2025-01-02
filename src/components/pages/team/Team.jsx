"use client"
import React, { useEffect, useState } from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json'
import SingleTeam1 from './SingleTeam1';
import TeamTitle from './TeamTitle';
import axios from 'axios';

const Team = ({ sectionClass, teamTitle }) => {

    const [teamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/teams-list`
                );
                setTeamData(data);
            } catch (error) {
                console.error("Error fetching team data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className={`team-style-one-area default-padding-top pb-70 pb-xs-0 bg-contain-center ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: `url(/assets/img/shape/18.png)` }}>

                {teamTitle ? <TeamTitle /> : <></>}

                <div className="container">
                    <div className="row">
                        {teamData.map(team =>
                            <div className="col-xl-3 col-md-6" key={team.id}>
                                <SingleTeam1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team