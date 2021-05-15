import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import styles from './CovidDetails.module.css';


function SingleCountryData({ data }) {


    const { theme } = useContext(ThemeContext);


    return <div div className={styles.fetchedDataCont}>


        <div className={styles.fetchedData} style={{ boxShadow: theme.boxShadow }}>

            {data.cases >= 0 &&
                <>
                    <div className={styles.singleDataCont}>

                        <div className={styles.singleCountry}>
                            <h2>{data.country}</h2>

                            <img className={styles.flagImg}
                                src={data.countryInfo.flag}
                                alt="countryFlag"
                            />

                        </div>

                        <div className={styles.singleConfirmed}>
                            <h4>Confirmed</h4>
                            <h5> +
                            {
                                    Number(parseFloat(data.todayCases).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h5>
                            <h2>
                                {
                                    Number(parseFloat(data.cases).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>

                        <div className={styles.singleActive}>
                            <h4>Active</h4>
                            <h5>0</h5>
                            <h2>
                                {
                                    Number(parseFloat(data.active).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>

                        <div className={styles.singleRecovered}>
                            <h4>Recovered</h4>
                            <h5> +
                                {
                                    Number(parseFloat(data.todayRecovered).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h5>
                            <h2>
                                {
                                    Number(parseFloat(data.recovered).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>

                        <div className={styles.singleDeceased}>
                            <h4>Deceased</h4>
                            <h5> +
                                {
                                    Number(parseFloat(data.todayDeaths).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h5>
                            <h2>
                                {
                                    Number(parseFloat(data.deaths).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>
                    </div>
                </>
            }


        </div>

    </div >
}
export { SingleCountryData }