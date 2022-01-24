// import React from 'react';
// import Modal from 'react-bootstrap/Modal'
// import UploadIcon from '../assets/img/cloud_upload.svg';

// export const AdminModals = (props) => {
//     const { children, bodyStyle, ...rest } = props;
//     return (
//         <>
//             <Modal animation={false}>
//                 <Modal.Header closeButton>
//                     <Modal.Title><h4 className="modal-title font-16 font_clr_wht">Import Data</h4></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form id="csv_form" enctype="multipart/form-data" method="POST" action="">

//                         <div className="row">
//                             <div className="col-12 text-right">
//                                 <a id="Download_CSV" download="" className="btn btn-responsive download_smpl_CSV">Download Sample CSV</a>
//                             </div>
//                             <div className="col-10 form-group">
//                                 <label>File</label>
//                                 <div className="input-group mb-3">
//                                     <h1 className="form-control file_name">File Name</h1>
//                                     <div className="input-group-append">
//                                         <a className="btn upload_file_btn font-12" onclick="move()">Upload</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-2">
//                                 <label className="btn m-t-29 upload_btn" for="file1"><img src={UploadIcon} alt="upload icon" /></label>
//                                 <input type="file" name="file_name" id="file1" hidden accept="*" />
//                             </div>
//                         </div>
//                         <div className="row" id="upload_progessSec">
//                             <div className="col-12 mb-3 text-center">
//                                 <div className="file_name_show" style={{ display: "none" }}>
//                                     <h4 className="regular-text-dark-fw300 file_name"></h4>
//                                 </div>
//                                 <div id="myProgress" style={{ display: "none" }}>
//                                     <div id="myBar">10%</div>
//                                 </div>
//                                 <div className="file_name_show" style={{ display: "none" }}>
//                                     <h4 className="font-16 brand-green mt-2">Uploading...</h4>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-12 text-right">
//                                 <a data-dismiss="modal" className="btn btn-responsive btn_back">Cancel</a>
//                                 <button disabled type="submit" className="btn btn-responsive">SAVE</button>
//                             </div>
//                         </div>
//                     </form>
//                 </Modal.Body>
//             </Modal>
//         </>
//     )
// }

