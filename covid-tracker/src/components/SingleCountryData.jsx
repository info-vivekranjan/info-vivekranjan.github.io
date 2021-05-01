import React from 'react';
import styles from './CovidDetails.module.css';


function SingleCountryData({ data }) {


    return <div div className={styles.fetchedDataCont}>


        <div className={styles.fetchedData}>

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

                        <div className={styles.allConfirmed}>
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

                        <div className={styles.allActive}>
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

                        <div className={styles.allRecovered}>
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

                        <div className={styles.allDeceased}>
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