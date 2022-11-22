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
					href={poolsGuideEng}
					target="_blank"
				>English PDF File</a>
				<a
					href={poolsGuideVN}
					target="_blank"
				>Viet Nam PDF File</a>
				<a
					href={poolsGuideKor}
					target="_blank"
				>Korean PDF File</a>
			</div>
		</div>
	)
};


export default ModalPDF;