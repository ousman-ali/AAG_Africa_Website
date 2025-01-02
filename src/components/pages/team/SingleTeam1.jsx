import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShareStyle3 from '../../utilities/SocialShareStyle3';

const SingleTeam1 = ({ team }) => {
    const { id, activeClass, memberThumb, designation, name } = team

    return (
        <>
            <div className={`team-style-one`}>
                <div className="thumb">
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${team.image}`} width={800} height={800} alt="Image Not Found" />
                    <div className="social">
                        <ul>
                            <SocialShareStyle3 Links = {team} />
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <span>{team.position}</span>
                    <h4><Link href="#">{team.full_name}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeam1;