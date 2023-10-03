import React from "react";
import AdminNavbar from "../Admin/AdminNav";
import d1 from "../Imges/d1.png";
import d2 from "../Imges/d2.png";
import d3 from "../Imges/d3.png";
import d4 from "../Imges/d4.png";
import d5 from "../Imges/d5.png";
export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <div
        style={{
          backgroundColor: "  #fff",
          paddingTop: "20px",
          height: "1600px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "40px",
            marginLeft: "90px",
            width: "82%",
            height: "450px",
          }}
        >
          <div>
            <img style={{ width: "500px", height: "auto",  border: '1px solid #ccc', borderRadius: '10px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} src={d1} alt='' />
          </div>
          <div style={{ width: "500px", height: "600px" }}>
            <img style={{ width: "500px", height: "auto" , border: '1px solid #ccc', borderRadius: '10px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} src={d2} alt='' />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginLeft: "90px",
            marginTop: "50px",
            height: "450px",
          }}
        >
          <div>
            <img style={{ width: "500px", height: "auto" , border: '1px solid #ccc', borderRadius: '10px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} src={d3} alt='' />
          </div>
          <div style={{ width: "500px", height: "600px" }}>
            <img style={{ width: "500px", height: "auto",  border: '1px solid #ccc', borderRadius: '10px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} src={d4} alt='' />
          </div>
        </div>
        <div style={{ marginBottom: "100px", marginLeft: "250px" }}>
          <img style={{ width: "700px", height: "auto" , border: '1px solid #ccc', borderRadius: '10px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} src={d5} alt='' />
        </div>
      </div>
    </div>
  );
}
