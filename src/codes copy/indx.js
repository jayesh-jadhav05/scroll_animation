// // App.js

// import { useEffect, useState } from 'react';
// import './App.css';
// import BasicTabs from './Components/Tabs/BasicTabs';

// const SearchBar = () => {

//     const [cityesdata, setCitysData] = useState([]);
//     const [bgImg, setBgimg] = useState('https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg')
//     const [searchInput, setSearchInput] = useState();
//     const [searchedData, setSearchData] = useState(null);

//     const fetchData = async () => {
//         const res = await fetch('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json');
//         const data = await res.json();
//         setCitysData(data);
//     };

//     useEffect(() => {
//         fetchData();
//     }, [])

//     // Style The Main container and Change Background Image
//     const styles = {
//         container: {
//             width: '100vw',
//             height: '100vh',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flexDirection: 'column',
//             background: `url(${bgImg})`,
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             color: 'white',
//             paddingTop: '1rem',
//             gap: '1rem'
//         },
//     };

//     const handleSearch = () => {
//         let searchResult = cityesdata.filter((item) => item.name.toLowerCase() === searchInput.toLowerCase());
//         const [obj] = searchResult;
//         let imgurl = obj.backgroundUrl;
//         setBgimg(imgurl);
//         setSearchData(obj)
//     };

//     return (
//         <div className='search-container' style={styles.container}>
//             <div className='whether-div'>
//                 <div></div>
//                 <div style={{ color: 'black' }}>
//                     {
//                         searchedData !== null ? <div className='show-whether' id="weather-data">
//                             <img src={searchedData.weather.icon} alt='icon' />
//                             <h3>{searchedData.weather.temp}</h3>
//                             <h6>{searchedData.weather.main}</h6>
//                         </div>
//                             : cityesdata.length > 0 && <div className='show-whether'>
//                                 <img src={cityesdata[0].weather.icon} alt='icon' />
//                                 <h3>{cityesdata[0].weather.temp}</h3>
//                                 <h6 style={{ fontSize: '1.1rem', color: 'white' }}>{cityesdata[0].weather.main}</h6>
//                             </div>
//                     }
//                 </div>
//             </div>
//             <div className='search'>
//                 <h4 className='city-name'>{searchedData !== null ? searchedData.name : 'New Delhi'}</h4>
//                 <div className='inputs-div'>
//                     <input type='text' placeholder='New Delhi' id='search-input' onChange={(e) => setSearchInput(e.target.value)} />
//                     <button id='btn-submit' onClick={handleSearch}>Search</button>
//                 </div>
//             </div>
//             {
//                 searchedData != null ? <BasicTabs cites={searchedData.categories} />
//                     : cityesdata.length > 0 && <BasicTabs cites={cityesdata[0].categories} />
//             }

//         </div>
//     )
// };


// function App() {
//     return (
//         <div className="App">
//             <SearchBar />
//         </div>
//     );
// }

// export default App;




// // -------------------------App.css

// /* Search Bar Styling */
// .search {
//     width: 100vw;
//     height: 30vh;
//     display: flex;
//     justify - content: center;
//     align - items: center;
//     flex - direction: column;
//     gap: 1rem;
//     margin - bottom: 17rem;
// }
// .search - container {
//     background - repeat: no - repeat;
// }
// .inputs - div {
//     width: 70 %;
//     display: flex;
//     justify - content: center;
//     align - items: center;
// }
// #search - input {
//     width: 50 %;
//     padding: 0.7rem 0.2rem;
//     border - top - left - radius: 20rem;
//     border - bottom - left - radius: 20rem;
// }
// #btn - submit {
//     width: 10 %;
//     padding: 0.7rem 0;
//     border - top - right - radius: 20rem;
//     border - bottom - right - radius: 20rem;
// }
// .city - name {
//     font - size: 2rem;
//     color: white;
//     font - weight: bold;
// }
// .whether - div {
//     display: flex;
//     width: 100vw;
//     justify - content: space - around;
//     margin - top: 3rem;
// }
// .show - whether {
//     display: flex;
//     gap: 0.3rem;
//     justify - content: center;
//     align - items: center;
//     border - radius: 1rem;
//     padding: 0 1rem;
// }



// // -----------------------------------Hotels.js

// import React from "react";
// import './hotelStyle.css';

// const Hotel = ({ data }) => {
//     console.log('hotels', data)
//     return (
//         <div className='hotels'>
//             <div className='left-side'>
//                 <img src={data.imageUrl} alt='city-logo' className='city-image' />
//                 <div className='second-div'>
//                     <h2>{data.name}</h2>
//                     <li>{data.rating}</li>
//                     <p>{data.address}</p>
//                 </div>
//             </div>
//             <div className='right-side'>
//                 <div className='f1 child'>
//                     <h6>Check In</h6>
//                     <p>{data.checkIn}</p>
//                 </div>
//                 <div className='f2 child'>
//                     <h6>Check Out</h6>
//                     <p>{data.checkOut}</p>
//                 </div>
//                 <div className='f3 child'>
//                     <h6>From: {data.price}</h6>
//                     <button className="btn">Buy Now</button>
//                     <p>Have a Promo Code</p>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Hotel;


// // -------------------------------Hotel.css


// .hotels - data{
//     display: flex;
//     flex - direction: column;
//     gap: 1rem;
// }
// .hotels {
//     display: flex;
//     gap: 0.5rem;
//     border: 2px solid black;
//     background - color: gray;
//     height: 10rem;
// }
// .hotels.left - side {
//     width: 50 %;
// }
// .hotels.right - side {
//     width: 50 %;
// }
// .btn {
//     padding: 0.5rem 1rem;
//     border - radius: 10rem;
// }



// // ---------------------------------------- office.js

// import React from "react";
// import './officeStyle.css';


// const Office = ({ data }) => {
//     return (
//         <div className='Office'>
//             <div className='left-side'>
//                 <img src={data.imageUrl} alt='city-logo' className='city-image' />
//                 <div className='second-div'>
//                     <h2>{data.name}</h2>
//                     <li>{data.rating}</li>
//                     <p>{data.address}</p>
//                 </div>
//             </div>
//             <div className='right-side'>
//                 <div className='f1 child'>
//                     <h6>Open At</h6>
//                     <p>{data.openAt}</p>
//                 </div>
//                 <div className='f2 child'>
//                     <h6>Close At</h6>
//                     <p>{data.closeAt}</p>
//                 </div>
//                 <div className='f3 child'>
//                     <h6>from:{data.price}</h6>
//                     <button className="btn">Buy Now</button>
//                     <p>have a promo code</p>
//                 </div>
//             </div>
//         </div>
//     )
// };


// export default Office;


// // ----------------------------office.css

// .office - div {
//     display: flex;
//     flex - direction: column;
//     gap: 1rem;
// }

// .Office {
//     display: flex;
//     gap: 0.5rem;
//     border: 2px solid black;
//     background - color: gray;
//     height: 10rem;
// }

// // ------------------------------places-city.js

// import React from "react";
// import './cityStyle.css';

// const City = ({ data }) => {

//     console.log('single', data)
//     return (
//         <div className='city'>
//             <div className='left-side'>
//                 <img src={data.imageUrl} alt='city-logo' className='city-image' />
//                 <div className='second-div'>
//                     <h2>{data.name}</h2>
//                     <li>{data.rating}</li>
//                     <p>{data.desc}</p>
//                 </div>
//             </div>
//             <div className='right-side'>
//                 <div className='f1 child'>
//                     <h6>Open At</h6>
//                     <p>{data.openAt}</p>
//                 </div>
//                 <div className='f2 child'>
//                     <h6>Close At</h6>
//                     <p>{data.closeAt}</p>
//                 </div>
//                 <div className='f3 child'>
//                     <h6>Entry free</h6>
//                     <p>{data.entryFee}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default City;



// // ------------------------------------places - city.css


// .city {
//     display: flex;
//     gap: 0.5rem;
//     border: 2px solid black;
//     background - color: gray;
//     height: 10rem;
// }
// .left - side img {
//     width: 30 %;
// }
// .right - side {
//     width: 50 %;
//     display: flex;
//     align - items: center;
//     justify - content: center;
// }
// .left - side {
//     display: flex;
//     gap: 1rem;
//     width: 50 %;
// }
// h2, li, p{
//     margin: 0;
//     padding: 0;
// }
// .child {
//     flex: 1;
// }

// .f1,.f3 {
//     background - color: azure;
//     display: flex;
//     justify - content: center;
//     align - items: center;
//     flex - direction: column;
//     height: 100 %;
//     color: black;
// }
// .f2 {
//     display: flex;
//     justify - content: center;
//     align - items: center;
//     flex - direction: column;
//     height: 100 %;
// }

// .places {
//     display: flex;
//     flex - direction: column;
//     gap: 1rem;
// }



// // --------------------------------- restouarant.js

// import React from "react";
// import './restaurantsStyle.css';

// const Restaurant = ({ data }) => {
//     return (
//         <div className='Restaurants'>
//             <div className='left-side'>
//                 <img src={data.imageUrl} alt='city-logo' className='city-image' />
//                 <div className='second-div'>
//                     <h2>{data.name}</h2>
//                     <li>{data.rating}</li>
//                     <p>{data.address}</p>
//                 </div>
//             </div>
//             <div className='right-side'>
//                 <div className='f1 child'>
//                     <h6>Open At</h6>
//                     <p>{data.openAt}</p>
//                 </div>
//                 <div className='f2 child'>
//                     <h6>Close At</h6>
//                     <p>{data.closeAt}</p>
//                 </div>
//                 <div className='f3 child'>
//                     <h6>from:{data.price}</h6>
//                     <button className="btn">Buy Now</button>
//                     <p>have a promo code</p>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Restaurant;


// // --------------------------------restau.css

// .restaurants - div {
//     display: flex;
//     flex - direction: column;
//     gap: 1rem;
// }

// .Restaurants {
//     display: flex;
//     gap: 0.5rem;
//     border: 2px solid black;
//     background - color: gray;
//     height: 10rem;
// }

// // --------------------------------------------tabs.js

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import City from '../Places/City';
// import Hotel from '../Hotels/Hotel'
// import Restaurant from '../Restaurants/Restaurants';
// import Office from '../Offices/Office';

// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// };

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// };


// export default function BasicTabs({ cites }) {

//     const { places, hotels, offices, restaurants } = cites;

//     console.log('res', restaurants)
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Box sx={{ width: '100vw' }}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                     <Tab label="PLACES" {...a11yProps(0)} style={{ color: 'white' }} />
//                     <Tab label="HOTELS" {...a11yProps(1)} style={{ color: 'white' }} id='hotels' />
//                     <Tab label="RESTAURANT" {...a11yProps(2)} style={{ color: 'white' }} id='restaurants' />
//                     <Tab label="OFFICES" {...a11yProps(3)} style={{ color: 'white' }} id='offices' />
//                 </Tabs>
//             </Box>
//             <CustomTabPanel value={value} index={0}>
//                 <div className='places'>
//                     {
//                         places.map((data) => {
//                             return <City data={data} />
//                         })
//                     }

//                 </div>
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={1}>
//                 <div className='hotels-data'>
//                     {
//                         hotels.map((data) => {
//                             return <Hotel data={data} />
//                         })
//                     }
//                 </div>
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={2}>
//                 <div className='restaurants-div'>
//                     {
//                         restaurants.map((data) => {
//                             return <Restaurant data={data} />
//                         })
//                     }
//                 </div>
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={3}>
//                 <div className='office-div'>
//                     {
//                         offices.map((data) => {
//                             return <Office data={data} />
//                         })
//                     }
//                 </div>
//             </CustomTabPanel>
//         </Box>
//     );
// }