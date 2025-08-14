import { MdCameraRoll } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { GiTreasureMap } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";import { FaCameraRetro } from "react-icons/fa";
import Navbar from '../landingPage/Navbar'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminPropertyList = () => {
const [listData, setListData] = useState([]);
useEffect(()=>{
  fetchData()
},[])

  const fetchData = async()=>{
    const response = await axios.get('http://localhost:9000/api/property-list');
     if(response?.data?.code==200){
      setListData(response?.data?.data)
     }
  }
  console.log(listData);

  const handleDeleteProperty=(_id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
   const response =  await axios.post("http://localhost:9000/api/delete-property",{_id});
   if(response?.data?.code == 200){
    Swal.fire({
      title: "Delete Property",
      text: response?.data?.message,
      icon: "success",
    })
    fetchData();
   }else{
    Swal.fire({
      title: "Delete Property",
      text: response?.data?.message,
      icon: "error",
    })
   }
  }
});
  }


  return (
    <>
    <Navbar/>
    <div className='container-fluid service properties'>
        <div className='sHead'>Properties</div>
        <div>
          <h1>Property Listings</h1>
        </div>
        <div className='listingBox row'>
          {listData?.map((item,index)=>{
            return(<>
            <div className="listCard">
            <div className="listImgBox ">
              <img src={`http://localhost:9000/img/${item.pic}`}/>
              <div onClick={()=>{handleDeleteProperty(item?._id)}} className="forRent">Delete <RiDeleteBin5Fill /></div>
              <div className="propLocation">
                <p><FaLocationDot />{item?.location}</p>
              </div>
            </div>
            <div className="propInfo">
              <p className="propRent">${item?.price}/ <span>Month</span></p>
              <h4>{item.title}</h4>
              <p className="propDesc">
                {item?.description}
              </p>
              <div className="bhk">
                <div className="area">
                  {item?.area}<GiTreasureMap />
                  <p>square Ft</p>
                </div>
              </div>
            </div>
          </div>
            </>)
          })}
          {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
        </div>
      </div>
    </>
  )
}

export default AdminPropertyList