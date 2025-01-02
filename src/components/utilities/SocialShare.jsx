import Link from 'next/link';
import React from 'react';

const SocialShare = ({ contact }) => {
    // console.log(con)
    return (
        <>
            {contact?.telegramLink && (
                <li className="facebook">
                    <Link href={contact?.telegramLink} target="_blank">
                        <i className="fab fa-telegram"></i>
                    </Link>
                </li>
            )}
            {contact?.facebookLink && (
                <li className="facebook">
                    <Link href={contact?.facebookLink} target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </li>
            )}
            {contact?.twitterLink && (
                <li className="facebook">
                    <Link href={contact?.twitterLink} target="_blank">
                        <i className="fab fa-twitter"></i>
                    </Link>
                </li>
            )}
            {contact?.instagramLink && (
                <li className="facebook">
                    <Link href={contact?.instagramLink} target="_blank">
                        <i className="fab fa-instagram"></i>
                    </Link>
                </li>
            )}
            {contact?.linkedInLink && (
                <li className="facebook">
                    <Link href={contact?.linkedInLink} target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                </li>
            )}
            {contact?.tiktokLink && (
                <li className="facebook">
                    <Link href={contact?.tiktokLink} target="_blank">
                        <i className="fab fa-tiktok"></i>
                    </Link>
                </li>
            )}
        </>
    );
};

export default SocialShare;