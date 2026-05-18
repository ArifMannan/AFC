"use client";

import Image from 'next/image';
import React from 'react';

const members = [
    { id: 'EMP2004-001', name: 'Nurul Islam Hannan', role: 'Chief Advisor', img: '/static/images/profile/Nurul_Islam_Hannan_Chif_Advisor.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-002', name: 'AHM Nazrul Islam', role: 'Advisor', img: '/static/images/profile/AHM_Nazrul_Islam_Advisor.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-003', name: 'ASM Rayhan', role: 'Advisor', img: '/static/images/profile/ASM_Rayhan_Advisor.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-004', name: 'Ali Murtaza', role: 'Advisor', img: '/static/images/profile/Ali_Murtaza_Advisor_.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },

    { id: 'EMP2004-005', name: 'Md Fakhrul Islam', role: 'Advisor', img: '/static/images/profile/Md_Fakhrul_Islam_Advisor.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-006', name: 'Ikbal Hossain', role: 'Advisor', img: '/static/images/profile/Ikbal_Hossain_Advisor.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
];
const executive_members = [
    { id: 'EMP2004-002', name: 'Mahbub Alom Tarek', role: 'Executive Member', img: '/static/images/profile/tarek.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-010', name: 'Abul Hossain Rony', role: 'Executive Member', img: '/static/images/profile/rony.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-011', name: 'Tamim Bin Saif', role: 'Executive Member', img: '/static/images/profile/tamim.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-012', name: 'Himrul Kayes Rana', role: 'Executive Member', img: '/static/images/profile/rana.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-013', name: 'Golam Sabbir', role: 'Executive Member', img: '/static/images/profile/sabbir.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    {
        id: 'EMP2004-014', name: 'Aminul Islam Siman', role: 'Executive Member', img: '/static/images/profile/siman.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
    {
        id: 'EMP2004-015', name: 'Afser Hossain Bijoy', role: 'Executive Member', img: '/static/images/profile/afsar.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
    {
        id: 'EMP2004-016', name: 'Niloy Jonaed', role: 'Executive Member', img: '/static/images/profile/niloy.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
    {
        id: 'EMP2004-017', name: 'Fazlur Rahman', role: 'Executive Member', img: '/static/images/profile/fazlur.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
];

const employeeIdSeq = (member) => {
    const m = String(member.id).match(/-(\d+)$/);
    return m ? parseInt(m[1], 10) : 0;
};

const membersByIdAsc = [...members].sort((a, b) => employeeIdSeq(a) - employeeIdSeq(b));
const executiveMembersByIdAsc = [...executive_members].sort(
    (a, b) => employeeIdSeq(a) - employeeIdSeq(b)
);

const board_members = [
    { id: 'EMP2004-002', name: 'Abdus Samad Raju', role: 'Board Of Director', img: '/static/images/profile/raju.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-010', name: 'Md. Mijanur Rahman Ripon', role: 'Board Of Director', img: '/static/images/profile/ripon.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-011', name: 'Md. Kamrul Islam', role: 'Board Of Director', img: '/static/images/profile/Kamrul.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-012', name: 'Abdus Salam koli', role: 'Board Of Director', img: '/static/images/profile/koli.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    { id: 'EMP2004-013', name: 'Motaleb Hossain Rajib', role: 'Board Of Director', img: '/static/images/profile/rajib.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' } },
    {
        id: 'EMP2004-014', name: 'Shohidul Islam Kowshik', role: 'Board Of Director', img: '/static/images/profile/kowshik.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
    {
        id: 'EMP2004-015', name: 'Tahrim Riham', role: 'Board Of Director', img: '/static/images/profile/tahrim.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
    {
        id: 'EMP2004-016', name: 'Imtiaz Shah Shourob', role: 'Board Of Director', img: '/static/images/profile/showrov.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
    {
        id: 'EMP2004-017', name: 'Shamim Hossain', role: 'Board Of Director', img: '/static/images/profile/shamim.jpg', socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
    },
];

const TeamPage = () => (
    <section className="container py-5 mt-5">

        <div className="row justify-content-center mt-5 pt-3">
            <div className="col-lg-7">
                <div className="section__header">
                    <h6 className="section__header-sub-title">Our Members</h6>
                    <h6 className="section__header-title">Meet Our Members</h6>
                </div>
            </div>
        </div>

        <div className="row g-4">
            <h5 className='fw-bold text-success'>Advisor</h5>
            {membersByIdAsc.map(member => (
                <div key={member.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm employee-card rounded-4 overflow-hidden position-relative">
                        {/* Top-right curved accent */}
                        <div className="accent-top" />
                        {/* Bottom-left curved accent */}
                        <div className="accent-bottom" />

                        <div className="card-body text-center px-0 pt-5 position-relative">
                            {/* Avatar with rotating ring */}
                            <div className="avatar-wrapper mx-auto">
                                <div className="ring" />
                                <div className="avatar-inner">
                                    <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>

                            <h6 className="mt-4 fw-semibold text-dark mb-1">{member.name}</h6>
                            <p className="text-success small mb-3">{member.role}</p>

                            {/* Social links */}
                            <div className="d-flex justify-content-center gap-3 mb-4 social-icons">
                                <a href={member.socials.facebook}><i className="fa-brands fa-facebook-f" /></a>
                                <a href={member.socials.twitter}><i className="fa-brands fa-twitter" /></a>
                                <a href={member.socials.linkedin}><i className="fa-brands fa-linkedin-in" /></a>
                                <a href={member.socials.instagram}><i className="fa-brands fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="row g-4">
            <h5 className='fw-bold text-success pt-5'>Board of Directors</h5>
            {board_members.map(member => (
                <div key={member.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm employee-card rounded-4 overflow-hidden position-relative">
                        {/* Top-right curved accent */}
                        <div className="accent-top" />
                        {/* Bottom-left curved accent */}
                        <div className="accent-bottom" />

                        <div className="card-body text-center px-0 pt-5 position-relative">
                            {/* Avatar with rotating ring */}
                            <div className="avatar-wrapper mx-auto">
                                <div className="ring" />
                                <div className="avatar-inner">
                                    <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>

                            <h6 className="mt-4 fw-semibold text-dark mb-1">{member.name}</h6>
                            <p className="text-success small mb-3">{member.role}</p>

                            {/* Social links */}
                            <div className="d-flex justify-content-center gap-3 mb-4 social-icons">
                                <a href={member.socials.facebook}><i className="fa-brands fa-facebook-f" /></a>
                                <a href={member.socials.twitter}><i className="fa-brands fa-twitter" /></a>
                                <a href={member.socials.linkedin}><i className="fa-brands fa-linkedin-in" /></a>
                                <a href={member.socials.instagram}><i className="fa-brands fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="row g-4">
            <h5 className='fw-bold text-success pt-5'>Executive Members</h5>
            {executiveMembersByIdAsc.map(member => (
                <div key={member.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm employee-card rounded-4 overflow-hidden position-relative">
                        {/* Top-right curved accent */}
                        <div className="accent-top" />
                        {/* Bottom-left curved accent */}
                        <div className="accent-bottom" />

                        <div className="card-body text-center px-0 pt-5 position-relative">
                            {/* Avatar with rotating ring */}
                            <div className="avatar-wrapper mx-auto">
                                <div className="ring" />
                                <div className="avatar-inner">
                                    <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>

                            <h6 className="mt-4 fw-semibold text-dark mb-1">{member.name}</h6>
                            <p className="text-success small mb-3">{member.role}</p>

                            {/* Social links */}
                            <div className="d-flex justify-content-center gap-3 mb-4 social-icons">
                                <a href={member.socials.facebook}><i className="fa-brands fa-facebook-f" /></a>
                                <a href={member.socials.twitter}><i className="fa-brands fa-twitter" /></a>
                                <a href={member.socials.linkedin}><i className="fa-brands fa-linkedin-in" /></a>
                                <a href={member.socials.instagram}><i className="fa-brands fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <style jsx>{`
      .employee-card {
        background: #ffffff;
        transition: transform .3s, box-shadow .3s;
      }
      .employee-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
      }
      .accent-top {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 150px;
        background: rgba(72,187,120,0.2);
        border-radius: 0 0 0 100%;
      }
      .accent-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 130px;
        height: 130px;
        background: rgba(72,187,120,0.15);
        border-radius: 0 100% 0 0;
      }
      .avatar-wrapper {
        position: relative;
        width: 140px;
        height: 140px;
      }
      .ring {
        position: absolute;
        inset: 0;
        border: 3px dashed #48bb78;
        border-radius: 50%;
        animation: spin 12s linear infinite;
      }
      .avatar-inner {
        position: absolute;
        inset: 10px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 15px rgba(72,187,120,0.4);
      }
      .social-icons a {
        color: #38a169;
        font-size: 1.1rem;
        transition: transform .2s;
      }
      .social-icons a:hover {
        transform: scale(1.2);
        color: #276749;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    </section>
);

export default TeamPage;
