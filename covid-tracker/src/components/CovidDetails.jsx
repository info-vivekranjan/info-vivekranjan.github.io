import React, { useEffect, useRef, useState } from 'react';
import { FetchAll, FetchCovid, FetchCovidCountry } from './FetchCovid';
import styles from './CovidDetails.module.css';
import { CovidTable } from './CovidTable';
import { SingleCountryData } from './SingleCountryData';
import covidLogo from "../covidimg.svg"

function CovidDetails() {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState("")
    const [countryData, setCountryData] = useState([])
    const [hl, setHl] = useState(true)

    const ref = useRef();

    const handleAllData = () => {
        FetchAll()
            .then((res) => {

                console.log(res);
                setAllData(res.data)
            })
            .catch((err) => {

                console.log(err);
            })

    }
    useEffect(() => {
        handleAllData();
    }, [])



    const handleSingleData = () => {

        FetchCovid(query)
            .then((res) => {

                console.log(res.data);
                setData(res.data)
            })
            .catch((err) => {

                console.log(err);
            })



    }

    useEffect(() => {
        handleSingleData();
    }, [])



    const handleAllCountryData = () => {

        FetchCovidCountry()
            .then((res) => {

                // console.log(res);
                setCountryData(res.data)
            })
            .catch((err) => {

                console.log(err);
            })

    }

    useEffect(() => {
        handleAllCountryData();
    }, [])




    const handleMoveUp = () => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        handleMoveUp();
    }, [])


    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSingleData();
        }
    };




    return (
        <div>
            <div ref={ref}></div>
            <img src={covidLogo} alt="covidLogo" className={styles.covidLogoImg} />
            <h1 className={styles.typingerase}>Covid 19</h1>



            <>
                <div className={styles.allDataCont}>
                    <div className={styles.allConfirmed}>
                        <h4>Confirmed</h4>
                        <h5> + {
                            Number(parseFloat(allData.todayCases).toFixed(2)).toLocaleString('en', {
                                minimumFractionDigits: 0
                            })
                        }
                        </h5>
                        <h2>
                            {
                                Number(parseFloat(allData.cases).toFixed(2)).toLocaleString('en', {
                                    minimumFractionDigits: 0
                                })
                            }
                        </h2>

                    </div>

                    <div className={styles.allActive}>
                        <h4>Active</h4>
                        <h5>0</h5>
                        <h2>
                            {
                                Number(parseFloat(allData.active).toFixed(2)).toLocaleString('en', {
                                    minimumFractionDigits: 0
                                })
                            }
                        </h2>
                    </div>

                    <div className={styles.allRecovered}>
                        <h4>Recovered</h4>
                        <h5> + {
                            Number(parseFloat(allData.todayRecovered).toFixed(2)).toLocaleString('en', {
                                minimumFractionDigits: 0
                            })
                        }
                        </h5>

                        <h2>
                            {
                                Number(parseFloat(allData.recovered).toFixed(2)).toLocaleString('en', {
                                    minimumFractionDigits: 0
                                })
                            }
                        </h2>
                    </div>

                    <div className={styles.allDeceased}>
                        <h4>Deceased</h4>
                        <h5> + {
                            Number(parseFloat(allData.todayDeaths).toFixed(2)).toLocaleString('en', {
                                minimumFractionDigits: 0
                            })
                        }
                        </h5>

                        <h2>
                            {
                                Number(parseFloat(allData.deaths).toFixed(2)).toLocaleString('en', {
                                    minimumFractionDigits: 0
                                })
                            }
                        </h2>
                    </div>
                </div>
            </>


            <>
                <p style={{ fontWeight: "500" }}>Search your country</p>
                <div className={styles.wholeInputCont}>

                    <div className={styles.inputCont}>

                        <i onClick={handleSingleData} class="ri-search-line">
                            <input className={styles.searchCountry}
                                value={query}
                                placeholder="Search Country"
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeypress}
                                name="country"
                            />
                        </i>

                    </div>
                    {/* <button className={styles.searchButton} onClick={handleSingleData}>Search</button> */}
                </div>


                <SingleCountryData data={data} />
            </>


            <CovidTable countryData={countryData} setHl={setHl} hl={hl} />


            <div style={{
                position: "fixed",
                right: "0",
                bottom: "0",
                marginBottom: "30px",
                marginRight: "30px",
                scrollBehavior: "smooth",

            }}>

                <i
                    style={{
                        color: "white",
                        fontSize: "45px",
                        backgroundColor: "#007BFF",
                        cursor: "pointer",
                        borderRadius: "50%",
                    }}
                    onClick={handleMoveUp} className="ri-arrow-up-s-line"
                >

                </i>
            </div>

        </div >
    )
}
export { CovidDetails }