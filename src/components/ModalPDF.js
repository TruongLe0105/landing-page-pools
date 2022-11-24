/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { images } from '../assets/ExportImg';
import poolsGuideVN from '../assets/images/file_pdf/pools_guide_VN.pdf';
import poolsGuideEng from '../assets/images/file_pdf/pools_guide_ENG.pdf';
import poolsGuideKor from '../assets/images/file_pdf/pools_guide_KOR.pdf';

const ModalPDF = ({ setOpenModal }) => {
	const { CLOSEIMG } = images;

	return (
		<div className="btn-instruction">
			<div className="wrapper-instruction">
				<img
					src={CLOSEIMG}
					onClick={() => setOpenModal(false)}
				/>
				<a
					href="https://poolsmobility.com/static/media/eng_pools_phone_project.pdf"
					// href={poolsGuideEng}
					target="_blank" rel="noreferrer"
				>English PDF File</a>
				{/* <a
					href={poolsGuideVN}
					target="_blank" rel="noreferrer"
				>Viet Nam PDF File</a> */}
				<a
					href="https://poolsmobility.com/static/media/kor_pools_phone_project.pdf"
					// href={poolsGuideKor}
					target="_blank" rel="noreferrer"
				>Korean PDF File</a>
			</div>
		</div>
	)
};


export default ModalPDF;