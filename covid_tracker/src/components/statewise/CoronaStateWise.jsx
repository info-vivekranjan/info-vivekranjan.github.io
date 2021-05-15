import React, { useContext, useEffect, useState } from 'react';
import { FetchCoronaLive } from './FetchCoronaLive';
import styles from './CoronaStateWise.module.css'
import { ThemeContext } from '../../context/ThemeContextProvider';
import { Footer } from '../Footer/Footer';



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
                <div className={styles.tableHeader}>
                    <tr className={styles.tableHeaderData}>
                        <th className={styles.th1Statewise}>State</th>
                        <th className={styles.th2Statewise} style={{ cursor: "pointer" }} onClick={() => setHighToLow(!highTolow)}>Total Cases</th>
                        <th className={styles.th3Statewise}>Total Active</th>
                        <th className={styles.th4Statewise}>Total Recovered</th>
                        <th className={styles.th5Statewise}>Total Deaths</th>
                    </tr>
                </div>

                <div>
                    {
                        data.sort((a, b) => highTolow ? b.Confirmed - a.Confirmed : a.Confirmed - b.Confirmed)
                            .map((item) => {
                                return <div className={styles.allCountryData} >
                                    {
                                        (item.Date).includes(todayDateSum) && //for filtering latest data
                                        <tr className={styles.tableRowData}>

                                            <td style={{ backgroundColor: theme.statewiseBG }} className={styles.countryTD}>
                                                {item.Province}
                                            </td>

                                            <td style={{ backgroundColor: theme.statewiseBG }}>

                                                {
                                                    Number(parseFloat(item.Confirmed).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </td>

                                            <td style={{ backgroundColor: theme.statewiseBG }}>

                                                {
                                                    Number(parseFloat(item.Active).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </td>

                                            <td style={{ backgroundColor: theme.statewiseBG }}>

                                                {
                                                    Number(parseFloat(item.Recovered).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </td>

                                            <td style={{ backgroundColor: theme.statewiseBG }}>

                                                {
                                                    Number(parseFloat(item.Deaths).toFixed(2)).toLocaleString('en', {
                                                        minimumFractionDigits: 0
                                                    })
                                                }

                                            </td>



                                        </tr>
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