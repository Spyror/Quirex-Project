import "../../App.css";
import { FaLocationDot } from "react-icons/fa6";import { FaCameraRetro } from "react-icons/fa";
import { MdCameraRoll } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { GiTreasureMap } from "react-icons/gi";
import Navbar from './Navbar'
import axios from 'axios';
import Swal from "sweetalert2";
import { useLocation ,useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
const Property = () => {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const navigation = useNavigate();
  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
     if(response?.data?.code==200){
      setListData(response?.data?.data)
     }

  }

  const location = useLocation();
  const handleBuy =async (propertyId)=>{
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  if(!userData?._id){
    navigation('/signIn')
    return
  }
  const response = await axios.post('http://localhost:9000/api/buy',{userId:userData?._id, propertyId});
  if(response?.data.code == 200){
    Swal.fire({
      title:"Buy Property",
      text:response?.data?.message,
      icon:"success"
    })
  }else{
    Swal.fire({
      title:"Buy Property",
      text:response?.data?.message,
      icon:"error"
    })
  }
  }

  return (
    <>
    {location?.pathname != '/' && <Navbar/>}
      <div className='container-fluid service properties'>
        <div className='sHead'>Properties</div>
        <div>
          <h1>Freatured Listings</h1>
        </div>
        <div className='listingBox row'>
          {listData?.map((item,index)=>{
            return(<>
            <div className="listCard">
            <div className="listImgBox ">
              <img src={`http://localhost:9000/img/${item.pic}`}/>
              <div className="forRent">FOR RENT</div>
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
              {location?.pathname!=('/property') && <div className="bBtn"><button onClick={()=>{handleBuy(item?._id)}} className="buyBtn">Buy</button></div>}
            </div>
          </div>
            </>)
          })}
          {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
        </div>
      </div>
    </>
  );
};

export default Property;
