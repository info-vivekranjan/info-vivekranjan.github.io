import React, { useContext, useEffect, useState } from 'react';
import { FetchCoronaLive } from './FetchCoronaLive';
import styles from './CoronaStateWise.module.css'
import { ThemeContext } from '../../context/ThemeContextProvider';
import { Footer } from '../Footer/Footer';
import cx from 'classnames';


function CoronaStateWise() {

    const [query, setQuery] = useState("India");
    const [data, setData] = useState([]);
    const [highTolow, setHighToLow] = useState(true);
    const { theme } = useContext(ThemeContext);


    const handleCoronaData = () => {
        FetchCoronaLive(query)
            .then((res) => {
                console.log(res);
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            })

    }

    useEffect(() => {
        handleCoronaData();
    }, [])




    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var todayDate = year + "-" + month + "-" + date;

    var todayDateSum = ""

    if (month < 10 && date < 10) {
        var todayDate1 = year + "-0" + month + "-0" + date;
        todayDateSum += todayDate1

    } else if (month < 10 && date >= 10) {
        var todayDate1 = year + "-0" + month + "-" + date;
        todayDateSum += todayDate1
    } else if (month >= 10 && date < 10) {
        var todayDate1 = year + "-" + month + "-0" + date;
        todayDateSum += todayDate1
    }
    else {
        todayDateSum += todayDate
    }


    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleCoronaData();
        }
        // after that in Inpu box onKeyDown={handleKeypress}
    };


    return (

        <div className={styles.stateWiseCoronaCont}>
            <div className={styles.searchStateCont}>
                <div>
                    <h2>Coronavirus every country, State Wise updates.</h2>
                    <p>Enter your country name to search all state COVID cases</p>
                    <input style={{ backgroundColor: theme.statewiseBG }} className={styles.inputStatewise} value={query} placeholder="Enter Your Country" name="country" onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeypress} />
                    <button onClick={handleCoronaData}>Search   {">>"}</button>
                </div>

            </div>


            <div className={styles.wholeTableCont}>
                <div className={cx(styles.tableHeader, styles.tableHeader2)} style={{ backgroundColor: theme.covidtableHeaderBG, border: theme.tableBorder }}>

                    <div className={styles.thStatewise} style={{ border: theme.tableBorder, color: theme.textColor }}  >State</div>
                    <div className={styles.thStatewise} style={{ border: theme.tableBorder, color: theme.textColor, cursor: "pointer" }} onClick={() => setHighToLow(!highTolow)}>Total Cases</div>
                    <div className={styles.thStatewise} style={{ border: theme.tableBorder, color: theme.textColor }} >Total Active</div>
                    <div className={styles.thStatewise} style={{ border: theme.tableBorder, color: theme.textColor }} >Total Recovered</div>
                    <div className={styles.thStatewise} style={{ border: theme.tableBorder, color: theme.textColor }} >Total Deaths</div>

                </div>

                <div>
                    {
                        data.sort((a, b) => highTolow ? b.Confirmed - a.Confirmed : a.Confirmed - b.Confirmed)
                            .map((item) => {
                                return <div className={cx(styles.allCountryData, styles.tableHeader)} >
                                    {
                                        (item.Date).includes(todayDateSum) && //for filtering latest data
                                        <div className={styles.tableRowData}>

                                            <div className={cx(styles.trStatewise, styles.countryTD)} style={{ border: theme.tableBorder, color: theme.textColor, backgroundColor: theme.covidtableHeaderBG }}>
                                                {item.Province}
                                            </div>

                                            <div className={styles.trStatewise} style={{ border: theme.tableBorder, color: "#FF073A" }}>

                                                {
                                                    Number(parseFloat(item.Confirmed).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </div>

                                            <div className={styles.trStatewise} style={{ border: theme.tableBorder, color: "#007BFF" }}>

                                                {
                                                    Number(parseFloat(item.Active).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </div>

                                            <div className={styles.trStatewise} style={{ border: theme.tableBorder, color: "#28A745" }}>

                                                {
                                                    Number(parseFloat(item.Recovered).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </div>

                                            <div className={styles.trStatewise} style={{ border: theme.tableBorder, color: "#6C757D" }}>

                                                {
                                                    Number(parseFloat(item.Deaths).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </div>



                                        </div>
                                    }
                                </div>
                            })
                    }
                </div>
            </div>



            <Footer />


        </div>
    );
}
export { CoronaStateWise }