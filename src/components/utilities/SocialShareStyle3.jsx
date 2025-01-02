import Link from 'next/link';
import React from 'react';

const SocialShareStyle3 = ({ Links }) => {
    return (
        <>

            {Links.telegramLink && (
                <li className="facebook">
                <Link href={Links.telegramLink} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                </li>
            )}
            {Links.facebookLink && (
                <li className="facebook">
                <Link href={Links.facebookLink} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                </li>
            )}
            {Links.twitterLink && (
                <li className="facebook">
                <Link href={Links.twitterLink} target="_blank">
                    <i className="fab fa-twitter"></i>
                </Link>
                </li>
            )}
            {Links.instagramLink && (
                <li className="facebook">
                <Link href={Links.instagramLink} target="_blank">
                    <i className="fab fa-instagram"></i>
                </Link>
                </li>
            )}
            {Links.linkedinLink && (
                <li className="facebook">
                <Link href={Links.linkedinLink} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                </li>
            )}
        </>
    );
};

export default SocialShareStyle3;